"use client" 
import React, { useState, useEffect } from 'react';
import JokeTile from './JokeTile';
import ErrorComponent from './ErrorComponent';
import { useGetAllJokesQuery } from '@/services/jokeApiSlice';
import { Joke } from '@/types/joke';

const JokesDisplay: React.FC = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Any");
  const [categories, setCategories] = useState(["Any", "Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"]);
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isSuccess, isError, isLoading } = useGetAllJokesQuery({ searchQuery: searchQuery, category: selectedCategory });

  useEffect(() => {
    if (isSuccess) {
      if (data.jokes) {
        setJokes(data.jokes);
      } else {
        setJokes([]);
      }
    }
  }, [data, isSuccess]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col space-y-8 bg-gradient-to-r from-purple-600 to-blue-500 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-white text-center mb-4">WELCOME TO Jokes Central</h1>
          <p className="text-lg text-white text-center mb-8">Embark on a journey of random giggles 😄</p>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Search for jokes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
            <div className="flex flex-wrap justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-6 py-3 text-sm font-medium text-white rounded-full transition duration-300 ease-in-out ${
                    category === selectedCategory
                      ? 'bg-pink-600'
                      : 'bg-green-500'
                  } hover:bg-pink-700 focus:bg-pink-700 focus:outline-none mb-4`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8 bg-white p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Jokes Searched</h2>
            <p className="text-lg text-gray-600">Here are some jokes we found for you!</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {isLoading && <p className="text-lg text-gray-700 animate-pulse">Loading jokes...</p>}
            {!isLoading && jokes.length === 0 && <p className="text-lg text-gray-700">No jokes found</p>}
            {isSuccess && jokes.map((joke, index) => (
              <div key={index} className="w-full md:w-auto">
                <JokeTile joke={joke} />
              </div>
            ))}
          </div>
          {isError && <ErrorComponent message="Failed to fetch jokes. Please try again later." />}
        </div>
      </div>
    </div>
  );
};

export default JokesDisplay;
