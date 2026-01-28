import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Calendar as CalendarIcon, Grid3x3, List, Search } from 'lucide-react';

const ScheduleCalendar = ({ selectedDate, setSelectedDate }) => {
  const [viewMode, setViewMode] = useState('calendar');
  const [selectedAccount, setSelectedAccount] = useState('Social Account');
  const [postStatus, setPostStatus] = useState('Post Status');

  // Sample scheduled posts data
  const scheduledPosts = {
    1: [{ id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop' }, 
        { id: 2, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop' }],
    2: [{ id: 3, image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=100&h=100&fit=crop' }],
    3: [{ id: 4, image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=100&h=100&fit=crop' }],
    4: [{ id: 5, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=100&h=100&fit=crop' }],
    5: [{ id: 6, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop' }],
    6: [{ id: 7, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop' },
        { id: 8, image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=100&h=100&fit=crop' }],
    7: [{ id: 9, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop' }],
    10: [{ id: 10, image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=100&h=100&fit=crop' }],
    15: [{ id: 11, image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=100&h=100&fit=crop' }],
    16: [{ id: 12, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=100&h=100&fit=crop' },
         { id: 13, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop' }],
    19: [{ id: 14, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop' },
         { id: 15, image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=100&h=100&fit=crop' },
         { id: 16, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop' }],
    28: [{ id: 17, image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=100&h=100&fit=crop' },
         { id: 18, image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=100&h=100&fit=crop' }],
  };

  const daysInMonth = 30;
  const firstDayOfWeek = 0; // Sunday
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderCalendarDays = () => {
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const posts = scheduledPosts[day] || [];
      const isToday = day === 19;

      days.push(
        <div
          key={day}
          className={`min-h-24 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors ${
            isToday ? 'bg-red-50 border-red-300' : 'bg-white'
          }`}
        >
          <div className="text-sm font-medium text-gray-900 mb-2">{day}</div>
          {posts.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {posts.map((post) => (
                <img
                  key={post.id}
                  src={post.image}
                  alt={`Post ${post.id}`}
                  className="w-12 h-12 rounded object-cover"
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Your Scedule</h2>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search ..."
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent w-48"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium">
              + Post Setting
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <span className="text-gray-700">{selectedAccount}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <span className="text-gray-700">{postStatus}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <CalendarIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Grid3x3 className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <List className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Calendar Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center space-x-2 text-sm font-medium text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg">
            <ChevronLeft className="w-4 h-4" />
            <span>Today</span>
          </button>
          <div className="flex items-center space-x-2">
            <ChevronRight className="w-5 h-5 text-gray-600 cursor-pointer hover:bg-gray-100 rounded" />
            <span className="text-sm font-semibold text-gray-900">19 Sept 2024</span>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="mb-4">
          <div className="grid grid-cols-7 gap-2 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {renderCalendarDays()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCalendar;