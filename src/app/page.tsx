'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BadgeCheck, AlertCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white"
        >
          🎒 College Lost & Found
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          Quickly report lost items or check if someone returned yours.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mt-4"
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="./report"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md transition-transform hover:scale-105"
          >
            <AlertCircle className="w-5 h-5" />
            Report Lost Item
          </Link>

          <Link
            href="./items"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md transition-transform hover:scale-105"
          >
            <BadgeCheck className="w-5 h-5" />
            View Found Items
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
