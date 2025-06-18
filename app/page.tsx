"use client";
import laptops from "./data/Laptops.json";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import Link from "next/link"; // ✅ added for Vercel route discovery
import { FaUniversity, FaMoneyBill, FaLaptopCode, FaClock, FaUser } from "react-icons/fa";

export default function HomePage() {
  const [form, setForm] = useState({
    name: "",
    university: "",
    budget: "",
    size: "",
    company: "",
    purpose: "",
    duration: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.budget) newErrors.budget = "Budget is required";
    if (!form.purpose) newErrors.purpose = "Purpose is required";
    if (!form.duration) newErrors.duration = "Duration is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    const params = new URLSearchParams(form as any).toString();
    window.open(`/result?${params}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎓 Find Your Ideal Laptop</h1>

      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardContent className="p-6 space-y-6">
          {/* 👤 Basic Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">👤 Personal Information</h2>
            <div>
              <Label className="flex items-center gap-2">
                <FaUser /> Name *
              </Label>
              <Input name="name" value={form.name} onChange={handleChange} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <Label className="flex items-center gap-2">
                <FaUniversity /> University (Optional)
              </Label>
              <Input name="university" value={form.university} onChange={handleChange} />
            </div>
          </div>

          {/* 💻 Laptop Preferences */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">💻 Laptop Preferences</h2>
            <div>
              <Label className="flex items-center gap-2">
                <FaMoneyBill /> Budget (PKR) *
              </Label>
              <Input name="budget" type="number" value={form.budget} onChange={handleChange} />
              {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
            </div>

            <div>
              <Label>Laptop Size (optional)</Label>
              <Input name="size" value={form.size} onChange={handleChange} />
            </div>

            <div>
              <Label>Preferred Company (optional)</Label>
              <Input name="company" value={form.company} onChange={handleChange} />
            </div>
          </div>

          {/* 🎯 Academic Use */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">🎯 Academic Needs</h2>
            <div>
              <Label className="flex items-center gap-2">
                <FaLaptopCode /> Purpose *
              </Label>
              <select
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
                className="w-full border rounded p-2"
              >
                <option value="">Select purpose</option>
                <option value="Programming">Programming</option>
                <option value="Office Work">Office Work</option>
                <option value="Gaming">Gaming</option>
                <option value="General">General Use</option>
              </select>
              {errors.purpose && <p className="text-red-500 text-sm">{errors.purpose}</p>}
            </div>

            <div>
              <Label className="flex items-center gap-2">
                <FaClock /> Usage Duration *
              </Label>
              <select
                name="duration"
                value={form.duration}
                onChange={handleChange}
                className="w-full border rounded p-2"
              >
                <option value="">Select duration</option>
                <option value="short">Short Term</option>
                <option value="long">Long Term</option>
              </select>
              {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>}
            </div>
          </div>

          {/* 🚀 Submit */}
          <Button
            onClick={handleSubmit}
            className="w-full transition-all duration-300 hover:scale-105"
          >
            🔍 Get Laptop Recommendations
          </Button>

          {/* ✅ Dummy Link to force /result route inclusion in Vercel */}
          <div className="text-center mt-4">
            <Link href="/result" className="text-blue-500 underline">
              Test Result Page
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
