'use client';
import { getItems } from '@/lib/data';
import LostItemCard from '@/components/LostItemCard';

export default function ItemsPage() {
  const items = getItems();

  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-4">Founded Items List</h2>      
          <LostItemCard />
    </main>
  );
}
