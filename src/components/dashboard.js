import React from "react";
import { FaGraduationCap, 
  FaFolderOpen , 
  PiNotePencil, 
  SiBookstack, 
  FaFiles,
  AiFillNotification,
  FaRegClock, 
  HiOutlineArchiveBoxXMark   } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="dashboard-container bg-purple-100 h-screen p-6">
      {/* Sidebar */}
      <aside className="sidebar bg-purple-700 text-white p-4 rounded-lg w-64 float-left">
        <div className="logo flex items-center gap-3 mb-8">
          <div className="bg-white rounded-full p-3 text-purple-700">
          <FaGraduationCap className="icon" />
            
          </div>
          <span className="font-bold text-lg">Dashboard</span>
        </div>
        <ul className="menu text-sm">
          <li className="mb-4 cursor-pointer hover:text-purple-300">
          <FaFolderOpen className="icon" />
            📂 Payment Info
          </li>
          <li className="mb-4 cursor-pointer hover:text-purple-300">
          <PiNotePencil className="icon" />
            📝 Registration
          </li>
          <li className="mb-4 cursor-pointer hover:text-purple-300">
          <SiBookstack className="icon" />
            📚 Courses
          </li>
          <li className="mb-4 cursor-pointer hover:text-purple-300">
          < HiOutlineArchiveBoxXMark className="icon" />
            ➖ Drop Semester
          </li>
          <li className="mb-4 cursor-pointer hover:text-purple-300">
          <FaFiles className="icon" />
            🗂 Results
          </li>
          <li className="mb-4 cursor-pointer hover:text-purple-300">
          <AiFillNotification className="icon" />
            📢 Notices
          </li>
          <li className="mb-4 cursor-pointer hover:text-purple-300">
          <FaRegClock className="icon" />
            🕒 Schedule
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content bg-white p-6 rounded-lg shadow-md ml-72">
        {/* Header */}
        <div className="header flex justify-between items-center mb-8">
          <h1 className="text-lg font-bold text-purple-600">Welcome back, John!</h1>
          <div className="user-profile flex items-center gap-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="rounded-full"
            />
            <div>
              <p className="font-bold">John Doe</p>
              <p className="text-sm text-gray-500">3rd Year</p>
            </div>
          </div>
        </div>

        {/* Finance Section */}
        <section className="finance grid grid-cols-3 gap-4 mb-8">
          <div className="finance-card bg-purple-200 p-4 rounded-lg text-center">
            <h3 className="font-bold text-lg">$10,000</h3>
            <p className="text-sm text-purple-600">Total Payable</p>
          </div>
          <div className="finance-card bg-purple-200 p-4 rounded-lg text-center">
            <h3 className="font-bold text-lg">$5,000</h3>
            <p className="text-sm text-purple-600">Total Paid</p>
          </div>
          <div className="finance-card bg-purple-200 p-4 rounded-lg text-center">
            <h3 className="font-bold text-lg">$300</h3>
            <p className="text-sm text-purple-600">Others</p>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="additional-content flex justify-between">
          {/* Course Instructors */}
          <div className="instructors bg-gray-100 p-4 rounded-lg w-1/2 mr-4">
            <h3 className="font-bold mb-3">Course Instructors</h3>
            <div className="flex gap-3">
              <img
                src="https://via.placeholder.com/40"
                alt="Instructor 1"
                className="rounded-full"
              />
              <img
                src="https://via.placeholder.com/40"
                alt="Instructor 2"
                className="rounded-full"
              />
              <img
                src="https://via.placeholder.com/40"
                alt="Instructor 3"
                className="rounded-full"
              />
            </div>
          </div>

          {/* Daily Notice */}
          <div className="notices bg-gray-100 p-4 rounded-lg w-1/2">
            <h3 className="font-bold mb-3">Daily Notice</h3>
            <p className="text-sm">
              Proin payment due soon. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Velit?
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard