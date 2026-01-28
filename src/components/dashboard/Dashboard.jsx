import React, { useState } from 'react';
import { Bell, Mail, Search, Calendar, Grid3x3, List } from 'lucide-react';
import Sidebar from './Sidebar';
import CreateSchedule from './CreateSchedule';
import ScheduleCalendar from './ScheduleCalendar';

const Dashboard = () => {
  const [selectedAccount, setSelectedAccount] = useState('@AnjasTravell');
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 8, 19)); // Sept 19, 2024

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
              </div>
              <nav className="flex space-x-6">
                <a href="#" className="text-gray-900 font-medium border-b-2 border-red-500 pb-1">Project</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Task</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Tools</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Team</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Analytics</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Mail className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
            <p className="text-gray-500 mt-1">Manage and track your scheduled uploads to ensure everything goes as planned</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Create Schedule Section */}
            <CreateSchedule 
              selectedAccount={selectedAccount}
              setSelectedAccount={setSelectedAccount}
            />

            {/* Your Schedule Section */}
            <ScheduleCalendar 
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;