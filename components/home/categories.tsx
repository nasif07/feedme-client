"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Breakfast",
    image:
      "https://res.cloudinary.com/dciqyeuyp/image/upload/v1745576921/q2rd1nopwqgitrovbl6r.jpg",
  },
  {
    id: 2,
    name: "Lunch",
    image:
      "https://res.cloudinary.com/dciqyeuyp/image/upload/v1745527291/ysuqjzgrcng4hboakwzo.jpg",
  },
  {
    id: 3,
    name: "Dinner",
    image:
      "https://res.cloudinary.com/dciqyeuyp/image/upload/v1745582947/btgq1metde1pwbqiafxu.jpg",
  },
  {
    id: 4,
    name: "Snacks",
    image:
      "https://res.cloudinary.com/dciqyeuyp/image/upload/v1745577282/babmeron1vshhvzr8hqb.jpg",
  },
  {
    id: 5,
    name: "Dessert",
    image:
      "https://res.cloudinary.com/dciqyeuyp/image/upload/v1745587900/k7gzygg9dcsncjthzank.jpg",
  },
];

const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <h3 className="text-4xl font-bold text-gray-800">Categories</h3>
        <div className="bg-feed-jungle h-1.5 w-20 rounded-full mx-auto mt-2" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            href={`/find-meals/${category.name}`}
            key={category.id}
            className="group"
          >
            <div className="bg-white border-2 rounded-2xl overflow-hidden transition-transform group-hover:-translate-y-1">
              <div className="relative w-full h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="p-5 text-center">
                <h4 className="text-xl font-semibold text-gray-700 group-hover:text-feed-jungle transition">
                  {category.name}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Explore delicious {category.name.toLowerCase()} meals.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
