'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation (you can add more)
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Mock login action
    console.log('Logging in with:', { email, password });
    setError('');
    alert('Login successful!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">🔐 Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border bg-transparent px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border bg-transparent px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         <Link href='./app./page'>
           <button
             type="submit"
             className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition"
           >Login             
           </button>
         </Link>
        </form>
      </motion.div>
    </div>
  );
}
