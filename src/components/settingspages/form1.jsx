import React from "react";

const ProfileForm = () => {
  const fields = [
    { label: "FIRST NAME", placeholder: "Enter First Name" },
    { label: "LAST NAME", placeholder: "Enter Last Name" },
    { label: "DOB", placeholder: "Enter DOB" },
    { label: "PHONE NO", placeholder: "Enter Phone Number" },
    { label: "GENDER", placeholder: "Enter Gender" },
  ];

  return (
    <div className="flex-1 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 p-4 w-full bg-white dark:bg-[#7C7C7C]">
      {/* Profile Image */}
      <div className="w-40 h-40 md:w-64 md:h-64 bg-gray-300 rounded-md"></div>

      {/* Input Fields */}
      <div className="w-full md:w-2/3 space-y-3">
        {fields.map(({ label, placeholder }) => (
          <div key={label} className="flex flex-col">
            <label className="text-green-600 dark:text-black font-bold text-xs">{label}</label>
            <input
              type="text"
              placeholder={placeholder}
              className="w-full md:w-2/3 border border-black rounded-md p-2 text-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileForm;
