import { useState } from "react";

const AgentAccountForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
    setSuccess("");
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const { firstName, lastName, username, password, confirmPassword } = formData;

    if (!firstName || !lastName || !username || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/agent/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      else
      
  
      setSuccess("Agent account created successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Create Agent Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full px-4 py-2 border rounded"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full px-4 py-2 border rounded"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="username"
          placeholder="Username / Agent ID"
          className="w-full px-4 py-2 border rounded"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full px-4 py-2 border rounded"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default AgentAccountForm;
