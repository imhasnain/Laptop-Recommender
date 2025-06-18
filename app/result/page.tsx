"use client";
import laptops from "../data/Laptops.json";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    const budget = parseInt(searchParams.get("budget") || "0");
    const purpose = (searchParams.get("purpose") || "").toLowerCase();
    const duration = searchParams.get("duration");

    const filtered = laptops.filter((laptop) => {
      const isPurposeMatch =
        purpose.includes(laptop.purpose.toLowerCase()) || laptop.purpose === "General";

      const isDurationMatch = laptop.duration === duration;
      const isBudgetMatch = budget >= laptop.minBudget && budget <= laptop.maxBudget;

      return isPurposeMatch && isDurationMatch && isBudgetMatch;
    });

    setMatches(filtered);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">💻 Recommended Laptops</h1>

      {matches.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {matches.map((laptop, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4">
              <img
                src={laptop.image}
                alt={laptop.name}
                className="w-full h-48 object-contain bg-gray-50 rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{laptop.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Processor:</strong> {laptop.processor}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Generation:</strong> {laptop.generation}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Year Made:</strong> {laptop.yearMade}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Specs:</strong> {laptop.specs}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Price:</strong> {laptop.minBudget} – {laptop.maxBudget} PKR
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No laptops found for the given criteria.</p>
      )}
    </div>
  );
}
