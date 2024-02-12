"use client" 
import { Joke } from '@/types/joke';
import React, { useState, useEffect, FC } from 'react';

interface JokeTileProps {
    joke: Joke
}

const JokeTile: FC<JokeTileProps> = ({joke}) => {

  return (
          <div className="p-2 border border-gray-300 rounded-md shadow-sm bg-blue-50">
             {joke.type == 'single' ? <p className="text-sm text-gray-700 italic">{joke.joke}</p> : <p className="text-sm text-gray-700 italic">{joke.setup} {joke.delivery}</p> }
          </div>    
  );
};

export default JokeTile;
