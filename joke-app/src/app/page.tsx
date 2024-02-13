import React from 'react';
import Head from 'next/head';
import JokesDisplay from '../components/JokesDisplay'

export default function JokesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <main>
        <JokesDisplay />
      </main>
    </div>
  );
}
