'use client';

import React, { useState } from 'react';
import { Trash2, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

type LostItem = {
  id: number;
  "your name": string;
  "lost item name": string;
  description: string;
  "your contact": number;
  "lost date": string;
  inStock: boolean;
};

export default function LostAndFoundPage() {
  const [items, setItems] = useState<LostItem[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [yourName, setYourName] = useState('');
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [lostDate, setLostDate] = useState('');
  const [inStock, setInStock] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!yourName || !itemName || !description || !contact || !lostDate) {
      alert('Please fill in all fields');
      return;
    }

    const newItem: LostItem = {
      id: Date.now(),
      "your name": yourName,
      "lost item name": itemName,
      description,
      "your contact": Number(contact),
      "lost date": lostDate,
      inStock,
    };

    setItems([...items, newItem]);
    setShowForm(false);
    setYourName('');
    setItemName('');
    setDescription('');
    setContact('');
    setLostDate('');
    setInStock(true);
  };

  const handleRemove = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto space-y-10">
        <motion.header 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold mb-3">📢 Lost & Found – College Campus</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Report for lost items.</p>
        </motion.header>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-all"
          >
            <PlusCircle className="w-5 h-5" />
            {showForm ? 'Close Form' : 'Report a Lost Item'}
          </motion.button>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto w-full border dark:border-gray-700"
          >
            <h2 className="text-2xl font-semibold mb-6">📝 Report a Lost Item</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1">Your Name</label>
                <input
                  type="text"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                  className="w-full bg-transparent border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1">Lost Item Name</label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full bg-transparent border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-transparent border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1">Your Contact</label>
                <input
                  type="number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-transparent border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1">Lost Date</label>
                <input
                  type="date"
                  value={lostDate}
                  onChange={(e) => setLostDate(e.target.value)}
                  className="w-full bg-transparent border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="inStock">Is this item important?</label>
                <input
                
                  id="inStock"
                  type="checkbox"
                  checked={inStock}
                  onChange={() => setInStock(!inStock)}
                />
                
              </div>
              <div className="flex gap-4 justify-end">
                <button type="submit" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md shadow"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border dark:border-gray-700 relative group"
            >
              <h2 className="text-xl font-bold mb-2">{item["lost item name"]}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">🧍My Name: {item["your name"]}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">📝 Description: {item.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">📅 Lost Date: {item["lost date"]}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">📞 Contact: {item["your contact"]}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">✅ Important: {item.inStock ? "Yes" : "No"}</p>
              <button
                onClick={() => handleRemove(item.id)}
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
