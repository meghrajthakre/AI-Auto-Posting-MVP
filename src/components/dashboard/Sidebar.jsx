import React from 'react';
import { Home, Calendar, Folder, Settings, Clock } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-6">
      <button className="p-3 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
        <Home className="w-6 h-6" />
      </button>
      <button className="p-3 text-white bg-red-500 rounded-lg transition-colors">
        <Calendar className="w-6 h-6" />
      </button>
      <button className="p-3 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
        <Folder className="w-6 h-6" />
      </button>
      <button className="p-3 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
        <Settings className="w-6 h-6" />
      </button>
      <div className="flex-1"></div>
      <button className="p-3 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
        <Clock className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Sidebar;