'use client';

import LostItemForm from '@/components/LostItemForm';

export default function ReportPage() {
  return (
    <main className="p-6">
      <h2 className="text-3xl  font-bold mb-4">Report a Lost Item</h2>
      <LostItemForm />
    </main>
  );
}
