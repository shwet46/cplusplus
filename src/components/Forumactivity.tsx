import React from 'react';

const forumData = [
  {
    title: 'Getter for enum member returns a copy of enum?',
    category: 'Beginners',
    author: 'ElusiveTau',
    date: 'Mar 19, 2025 at 8:02am',
    replies: 11,
  },
  {
    title: 'Use C++ 20 with Embarcadero',
    category: 'General C++ Programming',
    author: 'bistelA0005',
    date: 'Mar 18, 2025 at 9:06am',
    replies: 4,
  },
  {
    title: 'Call of Templated Function w/ Explicit Template Argument Fails to Compile',
    category: 'General C++ Programming',
    author: 'BernardIE5317',
    date: 'Mar 16, 2025 at 3:50am',
    replies: 1,
  },
  {
    title: 'I wrote a cron job!',
    category: 'Lounge',
    author: 'Duthomhas',
    date: 'Mar 15, 2025 at 11:32pm',
    replies: 12,
  },
  {
    title: 'Random Story Time',
    category: 'Lounge',
    author: 'Duthomhas',
    date: 'Mar 14, 2025 at 1:59pm',
    replies: 19,
  },
  {
    title: 'Formatted Console Log with Datetime',
    category: 'Windows Programming',
    author: 'ElusiveTau',
    date: 'Mar 12, 2025 at 9:29pm',
    replies: 7,
  },
  {
    title: 'Well, it looks like Mozilla is finally turning Evil™',
    category: 'Lounge',
    author: 'Duthomhas',
    date: 'Mar 12, 2025 at 2:19am',
    replies: 7,
  },
  {
    title: 'scientific computing - optimize speed',
    category: 'General C++ Programming',
    author: 'PhysicsIsFun',
    date: 'Mar 7, 2025 at 2:23pm',
    replies: 16,
  },
  {
    title: "why can't I use cout with without iostream",
    category: 'General C++ Programming',
    author: 'stonedviper',
    date: 'Mar 6, 2025 at 9:18pm',
    replies: 5,
  },
  {
    title: 'Is my understanding of pointers correct?',
    category: 'Beginners',
    author: 'Ch1156',
    date: 'Mar 6, 2025 at 12:33pm',
    replies: 18,
  },
];

const ForumActivity = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Latest <span className="text-blue-500">Forum</span> Activity:</h1>
      <div className="space-y-4">
        {forumData.map((post, index) => (
          <div
            key={index}
            className="p-4 bg-gray-200 rounded-lg shadow-md border border-gray-300 font-mono"
          >
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              {post.title}
            </a>{' '}
            <span className="text-gray-500">[{post.category}]</span>
            <p className="text-sm text-gray-700 mt-1">by <span className="text-blue-500">{post.author}</span></p>
            <p className="text-xs text-gray-500 mt-1">{post.date}</p>
            <p className="text-xs text-gray-600 mt-1">[{post.replies} replies]</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumActivity;