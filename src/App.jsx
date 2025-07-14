import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">🚀 MERN Test & Debug Dashboard</h1>
        <p className="text-gray-600 text-lg">
          Welcome to your MERN stack testing workspace! <br />
          Start running your unit, integration, and e2e tests.
        </p>
      </div>
    </div>
  );
}
