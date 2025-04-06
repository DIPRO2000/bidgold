import React, { useState } from "react";
import axios from "axios";

const ProfileForm = () => {
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  const userId = user?.id;
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    gender: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const isEmpty = Object.values(form).every((val) => val.trim() === "");
    if (isEmpty) {
      alert("Please fill at least one field to save changes.");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.patch("http://localhost:3000/api/user/update", {
        userId,
        ...form,
      });

      alert("Changes saved successfully.");

      const updatedUser = { ...user };
      let updated = false;

      if (form.firstName && form.firstName !== user.firstName) {
        updatedUser.firstName = form.firstName.trim();
        updated = true;
      }
      if (form.lastName && form.lastName !== user.lastName) {
        updatedUser.lastName = form.lastName.trim();
        updated = true;
      }

      if (updated) {
        localStorage.setItem("user", JSON.stringify(updatedUser));
        window.location.reload();
      }

    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { label: "FIRST NAME", name: "firstName", placeholder: "Enter First Name for Change" },
    { label: "LAST NAME", name: "lastName", placeholder: "Enter Last Name for Change" },
    { label: "DOB", name: "dob", placeholder: "Enter DOB for Change" },
    { label: "PHONE NO", name: "phone", placeholder: "Enter Phone Number for Change" },
    { label: "GENDER", name: "gender", placeholder: "Enter Gender for Change" },
  ];

  if (!user) {
    return <div className="p-6 text-red-600 font-semibold">User not logged in.</div>;
  }

  return (
    <div className="flex-1 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 p-6 w-full rounded-lg">
      <div>
        <div className="w-40 h-40 md:w-64 md:h-64 bg-gray-300 rounded-full flex items-center justify-center">
          {/* Placeholder for profile image */}
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <button className="flex justify-center w-2/5 bg-[#D9D9D9] p-1 font-bold rounded-lg mt-4 hover:bg-green-600">
            EDIT IMAGE
          </button>
        </div>
      </div>

      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map(({ label, name, placeholder }) => (
          <div key={name} className="flex flex-col">
            <label className="text-green-600 font-bold text-xs mb-1 m-2">
              {label}
            </label>
            <input
              name={name}
              type={name === "dob" ? "date" : "text"}
              value={form[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className="border border-black rounded-md w-3/4 p-2 text-sm focus:ring-2 focus:ring-green-400"
            />
          </div>
        ))}
        <div className="col-span-1 md:col-span-2 mt-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
