import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Authorization Failed: No token provided");
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data
    next();
  } catch (error) {
    console.log("Authorization Failed: Invalid token", error.message);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default authMiddleware;
