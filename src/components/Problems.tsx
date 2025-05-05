"use client";
import React, { useState, useEffect } from 'react';
import { ListFilter, ThumbsUp, ThumbsDown, ChevronDown, ChevronUp } from 'lucide-react';
import problemsData from '../data/problems.json';

interface Problem {
  title: string;
  platform: string;
  difficulty: string;
  tags: string[];
  author: string;
  date: string;
  likes: number;
  dislikes: number;
  acceptance: string;
  url: string;
  description: string;
}

const difficultyColors = {
  'Easy': 'text-green-500 bg-green-500/20',
  'Medium': 'text-yellow-500 bg-yellow-500/20',
  'Hard': 'text-red-500 bg-red-500/20'
};

const platformColors = {
  'LeetCode': 'text-orange-500 border-orange-500',
  'CodeForces': 'text-blue-500 border-blue-500',
  'CSES': 'text-purple-500 border-purple-500',
  'GeeksForGeeks': 'text-green-500 border-green-500',
  'LightOJ': 'text-cyan-500 border-cyan-500'
};

const ProgrammingProblems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProblems, setFilteredProblems] = useState<Problem[]>(problemsData.problems);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    platform: '',
    difficulty: '',
    searchTerm: '',
  });
  const [sortConfig, setSortConfig] = useState({
    key: 'likes' as keyof Problem,
    direction: 'desc' as 'asc' | 'desc'
  });
  
  const problemsPerPage = 10;

  useEffect(() => {
    let result = problemsData.problems;
    
    if (filters.platform) {
      result = result.filter(problem => problem.platform === filters.platform);
    }
    
    if (filters.difficulty) {
      result = result.filter(problem => problem.difficulty === filters.difficulty);
    }
    
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter(problem => 
        problem.title.toLowerCase().includes(term) || 
        problem.description.toLowerCase().includes(term) ||
        problem.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    result = [...result].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    
    setFilteredProblems(result);
    setCurrentPage(1);
  }, [filters, sortConfig]);

  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);

  const handleFilterChange = (filterName: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      platform: '',
      difficulty: '',
      searchTerm: '',
    });
  };

  const handleSort = (key: keyof Problem) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'desc' ? 'asc' : 'desc'
    });
  };

  const renderSortIcon = (key: keyof Problem) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? 
      <ChevronUp className="inline h-4 w-4" /> : 
      <ChevronDown className="inline h-4 w-4" />;
  };

  const platforms = [...new Set(problemsData.problems.map(p => p.platform))];
  const difficulties = [...new Set(problemsData.problems.map(p => p.difficulty))];

  return (
    <div className="w-full max-w-7xl mx-auto px-2 mb-16 sm:px-6 lg:px-8 bg-tranparent rounded-lg shadow-xl">
      <div className="pt-6 pb-4">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Programming Problems
        </h1>

        {/* Search and Filter Controls */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search problems..."
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 items-center">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ListFilter className="h-4 w-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            {(filters.platform || filters.difficulty) && (
              <button 
                onClick={clearFilters}
                className="px-4 py-2 text-sm font-medium text-white bg-zinc-700 border border-zinc-600 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Extended Filters */}
        {showFilters && (
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-zinc-800 rounded-lg border border-zinc-700">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Platform</label>
              <select
                className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.platform}
                onChange={(e) => handleFilterChange('platform', e.target.value)}
              >
                <option value="">All Platforms</option>
                {platforms.map((platform) => (
                  <option key={platform} value={platform}>{platform}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
              <select
                className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.difficulty}
                onChange={(e) => handleFilterChange('difficulty', e.target.value)}
              >
                <option value="">All Difficulties</option>
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Results Count */}
        {filteredProblems.length > 0 ? (
          <div className="text-sm text-gray-400 mb-4">
            Found {filteredProblems.length} {filteredProblems.length === 1 ? 'problem' : 'problems'}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400">
            No problems found matching your filters.
          </div>
        )}

        {/* Problems Table */}
        {filteredProblems.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm  text-left text-gray-400">
              <thead className="text-xs uppercase bg-zinc-800 text-gray-400">
                <tr>
                  <th 
                    scope="col" 
                    className="px-4  py-3 cursor-pointer"
                    onClick={() => handleSort('title')}
                  >
                    Title {renderSortIcon('title')}
                  </th>
                  <th 
                    scope="col" 
                    className="px-4 py-3 cursor-pointer hidden md:table-cell"
                    onClick={() => handleSort('platform')}
                  >
                    Platform {renderSortIcon('platform')}
                  </th>
                  <th 
                    scope="col" 
                    className="px-4 py-3 cursor-pointer hidden md:table-cell"
                    onClick={() => handleSort('difficulty')}
                  >
                    Difficulty {renderSortIcon('difficulty')}
                  </th>
                  <th 
                    scope="col" 
                    className="px-4 py-3 cursor-pointer hidden lg:table-cell"
                    onClick={() => handleSort('likes')}
                  >
                    Likes {renderSortIcon('likes')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentProblems.map((problem, index) => (
                  <tr 
                    key={index}
                    className="border-b border-zinc-800 hover:bg-zinc-800/50"
                  >
                    <td className="px-4 py-4">
                      <div className="block">
                        <a 
                          href={problem.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-blue-400 hover:text-blue-300"
                        >
                          {problem.title}
                        </a>
                        <div className="text-xs text-gray-500 mt-1">
                          {problem.tags.map((tag, i) => (
                            <span key={i} className="inline-block bg-zinc-800 rounded-full px-2 py-1 text-xs font-semibold text-gray-400 mr-1 mb-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-400 mt-2 hidden md:block">
                          {problem.description}
                        </p>
                        <div className="md:hidden flex flex-wrap items-center gap-2 mt-2">
                          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded border ${platformColors[problem.platform as keyof typeof platformColors]}`}>
                            {problem.platform}
                          </span>
                          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${difficultyColors[problem.difficulty as keyof typeof difficultyColors]}`}>
                            {problem.difficulty}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="flex items-center">
                              <ThumbsUp className="h-3 w-3 mr-1 text-green-500" /> 
                              {problem.likes}
                            </span>
                            <span className="flex items-center">
                              <ThumbsDown className="h-3 w-3 mr-1 text-red-500" /> 
                              {problem.dislikes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded border ${platformColors[problem.platform as keyof typeof platformColors]}`}>
                        {problem.platform}
                      </span>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${difficultyColors[problem.difficulty as keyof typeof difficultyColors]}`}>
                        {problem.difficulty}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Acceptance: {problem.acceptance}
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden lg:table-cell">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1 text-green-500" /> 
                          {problem.likes}
                        </span>
                        <span className="flex items-center">
                          <ThumbsDown className="h-4 w-4 mr-1 text-red-500" /> 
                          {problem.dislikes}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Controls */}
        {filteredProblems.length > 0 && (
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 px-4 space-y-4 md:space-y-0">
            <span className="text-sm text-gray-400">
              Showing <span className="font-semibold">{indexOfFirstProblem + 1}</span> to{' '}
              <span className="font-semibold">{Math.min(indexOfLastProblem, filteredProblems.length)}</span> of{' '}
              <span className="font-semibold">{filteredProblems.length}</span> Problems
            </span>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm font-medium text-gray-400 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                First
              </button>
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium text-gray-400 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <div className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
                {currentPage}
              </div>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium text-gray-400 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
              <button 
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm font-medium text-gray-400 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Last
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgrammingProblems;