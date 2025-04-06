import User from "../models/User.js";

const updateUser = async (req, res) => {
  const { userId, firstName, lastName, dob, phone, gender } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required." });
  }

  const updateData = {};
  if (firstName) updateData.firstName = firstName;
  if (lastName) updateData.lastName = lastName;
  if (dob) updateData.dob = dob;
  if (phone) updateData.phone = phone;
  if (gender) updateData.gender = gender;

  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({ error: "No data provided to update." });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update user." });
  }
};

export default updateUser ;
