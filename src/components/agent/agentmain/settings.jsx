import React from 'react'
import { Wallet, DollarSign, PiggyBank, Send } from 'lucide-react'
function Settings() {
    const data = [
        { icon: <Wallet size={28} />, title: "Main balance", value: "$121.20" },
        { icon: <DollarSign size={28} />, title: "Total earning", value: "$362.28" },
        { icon: <PiggyBank size={28} />, title: "Deposit total", value: "$178.65" },
        { icon: <Send size={28} />, title: "Total payout", value: "$568.14" },
    ]
    const fields = [
        { label: "FIRST NAME", placeholder: "Enter First Name" },
        { label: "LAST NAME", placeholder: "Enter Last Name" },
        { label: "DOB", placeholder: "Enter DOB" },
        { label: "PHONE NO", placeholder: "Enter Phone Number" },
        { label: "GENDER", placeholder: "Enter Gender" },
      ];
  return (
    <div>
       <div className="p-8 bg-white flex justify-center dark:bg-[#2D2D2D]">
      <div className="w-4/5 flex justify-center shadow-lg shadow-black rounded-xl p-6 bg-[#208C53]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full ">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#47B67C] p-6 rounded-xl  shadow-lg shadow-black flex flex-col items-start space-y-2 w-[220px] h-[140px]"
            >
              <div className="text-[#F6BA02]">{item.icon}</div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-[#F6BA02] text-md">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 p-6 w-full  rounded-lg ">
   
      <div>
      <div className="w-40 h-40 md:w-64 md:h-64 bg-gray-300 rounded-full flex items-center justify-center ">
        </div>
      <div className="w-full justify-center items-center flex flex-col">
      <button className="flex justify-center w-2/5 bg-[#D9D9D9] p-1 font-bold rounded-lg mt-4 hover:bg-green-600">EDIT IMAGE </button>
      </div>
      </div>
      
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
    </div>
  )
}

export default Settings;
