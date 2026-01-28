import React, { useState } from 'react';
import { ChevronDown, Image, Video, Instagram, Plus, Smile, MoreVertical, Sparkles, Calendar } from 'lucide-react';

const CreateSchedule = ({ selectedAccount, setSelectedAccount }) => {
  const [activeTab, setActiveTab] = useState('post');
  const [postContent, setPostContent] = useState(
    `Experience the ultimate thrill of mountain biking as you conquer rugged trails, enjoy breathtaking scenery, and tackle adrenaline-pumping descents. Challenge yourself, push your limits, and embrace the excitement of outdoor adventure on two wheels!

#MountainBiking #OutdoorAdventure #TrailBlazing #AdrenalineRush`
  );
  const [scheduledTime, setScheduledTime] = useState('Sept 17, 12:22 PM');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Create Scedule</h2>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MoreVertical className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Account Selector */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="relative">
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900">{selectedAccount}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Image className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Video className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Instagram className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('post')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              activeTab === 'post'
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Post
          </button>
          <button
            onClick={() => setActiveTab('story1')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              activeTab === 'story1'
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Image className="w-4 h-4 inline mr-2" />
            Story
          </button>
          <button
            onClick={() => setActiveTab('story2')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              activeTab === 'story2'
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Video className="w-4 h-4 inline mr-2" />
            Story
          </button>
        </div>

        {/* Image Preview */}
        <div className="mb-4 relative rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&h=400&fit=crop"
            alt="Mountain biking"
            className="w-full h-64 object-cover"
          />
          <button className="absolute top-3 right-3 p-2 bg-white rounded-lg shadow-md hover:bg-gray-50">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Caption */}
        <div className="mb-4">
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-sm text-gray-700"
            rows="6"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-gray-700">Rewrite With AI</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <span className="text-gray-700">Continue</span>
            </button>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Smile className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Schedule Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{scheduledTime}</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium">
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

// Import Clock from lucide-react at the top
import { Clock } from 'lucide-react';

export default CreateSchedule;