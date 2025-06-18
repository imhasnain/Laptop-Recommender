'use client';
import { useSearchParams } from 'next/navigation';

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
    <div className="p-6">
      <h1>Your Recommended Laptop</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Field:</strong> {field}</p>
      <p><strong>Usage Duration:</strong> {duration}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Specs:</strong> {specs}</p>
      <p><strong>Recommendation:</strong> {recommendation}</p>
      {image && <img src={image} alt="Laptop" width={300} />}
    </div>
  );
}
