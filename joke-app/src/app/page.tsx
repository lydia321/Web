"use client" 
import React from 'react';
import Head from 'next/head';
import JokesDisplay from '../components/JokesDisplay'

export default function JokesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Jokes Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Jokes Central</h1>
        <p className="text-lg text-gray-600">Embark on a journey of random giggles 😄</p>
      </header>

      <main>
        <JokesDisplay />
      </main>
    </div>
  );
}
