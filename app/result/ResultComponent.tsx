'use client';

import { useSearchParams } from 'next/navigation';
import laptops from '../data/Laptops.json';
import Image from 'next/image';

export default function ResultComponent() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name') || 'N/A';
  const university = searchParams.get('university') || 'N/A';
  const budget = Number(searchParams.get('budget')) || 0;
  const size = searchParams.get('size') || '';
  const company = searchParams.get('company')?.toLowerCase() || '';
  const purpose = searchParams.get('purpose')?.toLowerCase() || '';
  const duration = searchParams.get('duration')?.toLowerCase() || '';

  const matchedLaptops = laptops.filter((laptop) => {
    return (
      budget >= laptop.minBudget &&
      budget <= laptop.maxBudget &&
      laptop.purpose.toLowerCase() === purpose &&
      laptop.duration.toLowerCase() === duration &&
      (company ? laptop.name.toLowerCase().includes(company) : true)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">🎯 Your Recommended Laptop</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>University:</strong> {university}</p>
        <p><strong>Budget:</strong> {budget} PKR</p>
        <p><strong>Preferred Company:</strong> {company || 'N/A'}</p>
        <p><strong>Purpose:</strong> {purpose}</p>
        <p><strong>Usage Duration:</strong> {duration}</p>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">📦 Recommendation:</h2>

          {matchedLaptops.length > 0 ? (
            matchedLaptops.map((laptop, index) => (
              <div key={index} className="border p-4 rounded mb-4 bg-gray-50">
                <h3 className="text-xl font-bold">{laptop.name}</h3>
                <p><strong>Processor:</strong> {laptop.processor}</p>
                <p><strong>Generation:</strong> {laptop.generation}</p>
                <p><strong>Year:</strong> {laptop.yearMade}</p>
                <p><strong>Specs:</strong> {laptop.specs}</p>
                <p><strong>Price Range:</strong> {laptop.minBudget} - {laptop.maxBudget} PKR</p>
                {laptop.image && (
                  <Image
                    src={laptop.image}
                    alt={laptop.name}
                    width={400}
                    height={250}
                    className="mt-3 rounded"
                  />
                )}
              </div>
            ))
          ) : (
            <p className="text-red-500">❌ No laptops matched your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}
