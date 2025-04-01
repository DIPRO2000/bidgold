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
    <div className="flex-1 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 p-6 w-full  rounded-lg ">
      {/* Profile Image */}
      <div className="w-40 h-40 md:w-64 md:h-64 bg-gray-300 rounded-full flex items-center justify-center ">
        {/* Placeholder for image */}
      </div>

      {/* Input Fields */}
      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map(({ label, placeholder }) => (
          <div key={label} className="flex flex-col">
            <label className="text-green-600 font-bold text-xs mb-1   m-2 ">{label}</label>
            <input
              type="text"
              placeholder={placeholder}
              className=" border border-black  rounded-md w-3/4 p-2 text-sm focus:ring-2 focus:ring-green-400"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileForm;