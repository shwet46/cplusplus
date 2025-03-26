"use client";
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import articlesData from '../data/articles.json';

interface Article {
  title: string;
  categories: string[];
  author: string;
  date: string;
  score: number;
  updatedDate: string | null;
  votes: number;
}

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesData.articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articlesData.articles.length / articlesPerPage);

  const renderStars = (score: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < Math.round(score) ? 'text-amber-500' : 'text-gray-600'}`}
            fill={i < Math.round(score) ? '#f59e0b' : 'none'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 mb-16 sm:px-6 lg:px-8 bg-transparent rounded-lg">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Articles
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-zinc-700 text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3 hidden md:table-cell">Title</th>
              <th scope="col" className="px-4 py-3 hidden md:table-cell">Author</th>
              <th scope="col" className="px-4 py-3 hidden md:table-cell">Date</th>
              <th scope="col" className="px-4 py-3 hidden md:table-cell">Score</th>
            </tr>
          </thead>
          <tbody>
            {currentArticles.map((article: Article, index) => (
              <tr 
                key={index} 
                className="border-b border-zinc-700 hover:bg-zinc-800"
              >
                <td className="px-4 py-4 block md:table-cell">
                  <div className="font-medium text-white">
                    {article.title}
                    <div className="text-xs text-gray-500 mt-1">
                      {article.categories.join(', ')}
                    </div>
                  </div>
                  <div className="md:hidden flex items-center mt-2">
                    <span className="mr-2 text-gray-400">{article.author}</span>
                    <span className="mr-2 text-gray-400">{article.date}</span>
                    <div className="flex items-center">
                      {renderStars(article.score)}
                      <span className="ml-1 text-gray-500 text-xs">
                        {article.score}/5
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 hidden md:table-cell text-gray-400">{article.author}</td>
                <td className="px-4 py-4 hidden md:table-cell text-gray-400">
                  {article.date}
                  {article.updatedDate && article.updatedDate !== article.date && (
                    <div className="text-xs text-gray-500 mt-1">
                      Updated: {article.updatedDate}
                    </div>
                  )}
                </td>
                <td className="px-4 py-4 hidden md:table-cell">
                  <div className="flex items-center">
                    {renderStars(article.score)}
                    <span className="ml-2 text-gray-500">
                      {article.score}/5 ({article.votes} votes)
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 px-4 space-y-2 md:space-y-0">
        <span className="text-sm text-gray-400">
          Showing <span className="font-semibold">{indexOfFirstArticle + 1}</span> to{' '}
          <span className="font-semibold">{Math.min(indexOfLastArticle, articlesData.articles.length)}</span> of{' '}
          <span className="font-semibold">{articlesData.articles.length}</span> Articles
        </span>
        <div className="inline-flex">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-400 bg-zinc-800 border border-zinc-700 rounded-l-lg hover:bg-zinc-700 disabled:opacity-50"
          >
            Previous
          </button>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-400 bg-zinc-800 border border-zinc-700 rounded-r-lg hover:bg-zinc-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;