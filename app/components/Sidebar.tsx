import { FaBook, FaCog, FaInfoCircle, FaUser } from 'react-icons/fa';
import { MdOutlineCreate } from 'react-icons/md';

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col justify-between">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <img src="/logo.svg" alt="Grade Gator" className="h-8 w-8" />
        <h1 className="text-xl font-bold text-green-600">Grade Gator</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li className="flex items-center p-4 bg-green-100 border-l-4 border-green-600">
            <FaBook className="text-green-600 mr-3" />
            <span className="text-green-600 font-medium">Courses</span>
          </li>
        </ul>
      </nav>

      {/* Footer Links */}
      <div className="p-4 border-t">
        <ul className="space-y-2">
          <li className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-green-600">
            <FaCog />
            <span>Settings</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-green-600">
            <FaInfoCircle />
            <span>Help center</span>
          </li>
        </ul>

        {/* Profile */}
        <div className="mt-6 flex items-center gap-3 cursor-pointer">
          <img
            src="/user-avatar.svg"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-700">Louise Thompson</p>
            <p className="text-sm text-gray-500">Instructor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
