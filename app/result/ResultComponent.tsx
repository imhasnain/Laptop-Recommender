// app/result/ResultComponent.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function ResultComponent() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const field = searchParams.get('field');
  const duration = searchParams.get('duration');
  const category = searchParams.get('category');
  const recommendation = searchParams.get('recommendation');
  const image = searchParams.get('image');
  const specs = searchParams.get('specs');

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Recommended Laptop</h1>

      <Card className="p-4 shadow-lg">
        {image && (
          <div className="mb-4">
            <Image src={image} alt="Laptop" width={300} height={200} />
          </div>
        )}
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Field:</strong> {field}</p>
        <p><strong>Usage Duration:</strong> {duration}</p>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Specs:</strong> {specs}</p>
        <p><strong>Recommendation:</strong> {recommendation}</p>
      </Card>
    </main>
  );
}
