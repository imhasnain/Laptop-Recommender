'use client';
import { Suspense } from 'react';
import ResultComponent from './ResultComponent';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultComponent />
    </Suspense>
  );
}
