import { useState } from 'react';
import './index.css';

export default function App() {
  const [message, setMessage] = useState('');

  const checkBackend = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/users/status');
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage('❌ Backend not responding.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="text-center p-6 bg-white rounded-2xl shadow-lg space-y-4">
        <h1 className="text-4xl font-bold text-purple-700">🚀 MERN Test & Debug Dashboard</h1>
        <p className="text-gray-600 text-lg">
          Welcome to your MERN stack testing workspace!<br />
          Start running your unit, integration, and e2e tests.
        </p>

        <button
          onClick={checkBackend}
          className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition"
        >
          🔄 Check Backend Status
        </button>

        {message && <p className="text-lg font-medium text-green-700">{message}</p>}
      </div>
    </div>
  );
}
