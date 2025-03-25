import React from 'react';
import { MessageCircle, Clock, Folder } from 'lucide-react';

const forumData = [
  {
    name: 'Beginners',
    description: 'Discussions about C++ programming for beginners',
    lastTopic: {
      title: 'Getter for enum member returns a copy of enum?',
      date: 'Mar 19, 2025',
      author: 'TheldeasMan'
    }
  },
  {
    name: 'Windows Programming',
    description: 'Win32, MFC, ATL, C++/CLI, .NET ...',
    lastTopic: {
      title: 'Formatted Console Log with Datetime',
      date: 'Mar 12, 2025',
      author: 'seeplus'
    }
  },
  {
    name: 'UNIX/Linux Programming',
    description: 'Programming C++ for UNIX and Linux',
    lastTopic: {
      title: 'tzdb: cannot locate zone',
      date: 'Mar 3, 2025',
      author: 'spistol'
    }
  },
  {
    name: 'General C++ Programming',
    description: 'Anything about programming in C++',
    lastTopic: {
      title: 'Use C++ 20 with Embarcadero',
      date: 'Mar 18, 2025',
      author: 'salem c'
    }
  },
  {
    name: 'Lounge',
    description: 'Discussions about this website, or other topics not related to C++ programming',
    lastTopic: {
      title: 'I wrote a cron job!',
      date: 'Mar 15, 2025',
      author: 'jonnin'
    }
  },
  {
    name: 'Jobs',
    description: 'Job offers for C++ programmers',
    lastTopic: {
      title: 'Jobs',
      date: 'Apr 18, 2024',
      author: 'deleted account xyzzy'
    }
  },
  {
    name: 'Articles',
    description: 'How-to\'s and other technical articles',
    lastTopic: {
      title: 'How to Make a Game 2',
      date: 'Jul 29, 2011',
      author: 'anonymous23323124'
    }
  }
];

const ForumsContent = () => {
  return (
    <div className="max-w-7xl my-18 mx-auto px-4 py-10">
      <div className="bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-zinc-800 px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <Folder className="mr-3 text-blue-600" />
            Forums
          </h1>
          <div className="text-zinc-400 text-sm">
            Total Forums: {forumData.length}
          </div>
        </div>

        {/* Forums List */}
        <div className="divide-y divide-zinc-800">
          {forumData.map((forum, index) => (
            <div 
              key={index} 
              className="px-6 py-5 hover:bg-zinc-800/50 transition-colors duration-300 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-start justify-between space-y-2 md:space-y-0">
                {/* Forum Details */}
                <div className="flex-grow pr-4 w-full md:w-auto">
                  <div className="flex items-center space-x-3">
                    <h2 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                      {forum.name}
                    </h2>
                    {/* Optional badge */}
                    {forum.name === 'Beginners' && (
                      <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-400 text-sm mt-1 line-clamp-1">
                    {forum.description}
                  </p>
                </div>

                {/* Last Topic Details */}
                <div className="text-right w-full md:w-auto flex-shrink-0">
                  <div className="flex items-center justify-start md:justify-end space-x-2 mb-1">
                    <MessageCircle className="w-4 h-4 text-zinc-500" />
                    <a href="#" className="text-blue-500 hover:text-blue-400 text-sm truncate max-w-[200px]">
                      {forum.lastTopic.title}
                    </a>
                  </div>
                  <div className="flex items-center justify-start md:justify-end text-zinc-500 text-xs space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{forum.lastTopic.date} by {forum.lastTopic.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumsContent;