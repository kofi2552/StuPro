// ManageSchool.jsx
import React, { useState } from "react";
import { BiSolidHome } from "react-icons/bi";

const ManageSchool = () => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [excelFile, setExcelFile] = useState(null);

  const handleFileChange = (e) => {
    setExcelFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and file upload
  };

  const HandleHome = () => {
    window.location.href = "/dashboard";
  };

  {
    /* <h1 className="text-lg font-bold text-white ">
            Dashboard
          </h1> */
  }

  return (
    <div className="max-w-3xl mx-auto mt-4 pb-8">
      <button className="my-4 flex items-center gap-1" onClick={HandleHome}>
        <BiSolidHome /> Home
      </button>
      <div className="p-8 bg-white shadow-lg rounded-lg ">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New School
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* School Name Input */}
          <div className="flex flex-col">
            <label htmlFor="schoolName" className="text-gray-700 font-medium">
              School Name
            </label>
            <input
              type="text"
              id="schoolName"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter school name"
              required
            />
          </div>

          {/* School Address Input */}
          <div className="flex flex-col">
            <label
              htmlFor="schoolAddress"
              className="text-gray-700 font-medium"
            >
              School Address
            </label>
            <textarea
              id="schoolAddress"
              value={schoolAddress}
              onChange={(e) => setSchoolAddress(e.target.value)}
              className="mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter school address"
              rows="3"
            ></textarea>
          </div>

          {/* Excel File Upload */}
          <div className="flex flex-col">
            <label htmlFor="excelFile" className="text-gray-700 font-medium">
              Upload Student Data (Excel)
            </label>
            <input
              type="file"
              id="excelFile"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              className="mt-2 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
              required
            />
            <p className="text-sm text-gray-500 mt-2">
              * Supported formats: .xlsx, .xls
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Add School
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageSchool;
