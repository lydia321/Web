"use client" 
import React, { useState, useEffect } from 'react';
import Joke from '../app/types/Joke'
import JokeTile from './JokeTile';
import { useGetAllJokesQuery } from '@/app/api/jokes-api';

const JokesDisplay: React.FC = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { data, isSuccess, isError } = useGetAllJokesQuery({searchQuery: searchQuery})

  useEffect(() => {
    if (isSuccess) {
      if (data.jokes)
      setJokes(data.jokes)
    else
    setJokes([])
      setIsLoading(false)
    }

    if (isError)
    throw new Error('Failed to fetch jokes');
  }, [data, isSuccess]);
  
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter(cat => cat !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const filteredByCategory = jokes.filter(joke => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(joke.category)) {
      return false;
    }

    return true;
  });

  return (
    <div className="flex flex-col items-center space-y-4">
      <div>
      <input
        type="text"
        placeholder="Search for jokes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      </div>
      <div className="flex flex-col items-start space-y-2">
      <div className="flex items-center">
        <p className="text-gray-700 text-lg font-semibold mr-2">Select your preferred flavor of humor:</p>
        <div className="flex flex-wrap ">
          {Array.from(new Set(jokes.map(joke => joke.category))).map(category => (
            <button
              key={category}
              className={`px-3 py-1 rounded-full text-white mr-2 mb-2 transition duration-300 ease-in-out ${
                selectedCategories.includes(category)
                  ? 'bg-indigo-700'
                  : 'bg-blue-500'
              }`}
              onClick={() => handleCategoryToggle(category)}
            >
              {category}
            </button>
          ))}
          </div>
        </div>
      </div>
      {isLoading && <p className="text-lg text-gray-700 animate-pulse">Loading jokes...</p>}
      {!isLoading && jokes.length == 0 && <p className="text-lg text-gray-700">No jokes found</p>}
       {isSuccess && filteredByCategory.map((joke, index) => (
        <div key={index}>
          <JokeTile joke={joke} />
        </div>
        ))
    }
    </div>
  );
};

export default JokesDisplay;
