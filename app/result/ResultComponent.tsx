'use client';

import { useSearchParams } from 'next/navigation';

export default function ResultComponent() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name') || 'N/A';
  const university = searchParams.get('university') || 'N/A';
  const budget = searchParams.get('budget') || 'N/A';
  const size = searchParams.get('size') || 'N/A';
  const company = searchParams.get('company') || 'N/A';
  const purpose = searchParams.get('purpose') || 'N/A';
  const duration = searchParams.get('duration') || 'N/A';

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">🎯 Your Recommended Laptop</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>University:</strong> {university}</p>
        <p><strong>Budget:</strong> {budget} PKR</p>
        <p><strong>Laptop Size:</strong> {size}</p>
        <p><strong>Preferred Company:</strong> {company}</p>
        <p><strong>Purpose:</strong> {purpose}</p>
        <p><strong>Usage Duration:</strong> {duration}</p>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">📦 Recommendation:</h2>
          <p>Based on your input, we will show the best laptop here soon.</p>
        </div>
      </div>
    </div>
  );
}
