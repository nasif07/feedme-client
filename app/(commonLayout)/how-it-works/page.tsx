import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="flex flex-col items-center bg-gray-100/60 px-4 py-10 text-center md:py-16">
        <h1 className="mb-4 text-2xl font-semibold md:text-3xl lg:text-5xl">
          How It Works
        </h1>
        <div className="bg-feed-lime h-1 w-20 rounded-full md:h-2" />
      </section>


      {/* Freshly Baked Section */}
      <section className="my-10 p-3 sm:p-5 md:my-20 md:p-0">
        <div className="relative container">
          {/* Half circle left side */}
          <div className="bg-feed-lime shadow-feed-lime absolute top-[-50px] left-[-50px] z-0 size-25 rounded-full opacity-100 shadow-2xl blur-lg" />
          <div className="bg-feed-lime shadow-feed-lime absolute bottom-[50px] right-1/2 z-0 size-25 rounded-full opacity-100 shadow-2xl blur-lg" />

          <div className="relative z-10 mx-auto grid items-center justify-between gap-5 md:grid-cols-2 lg:gap-10">
            <div className="space-y-3 lg:space-y-7">
              <h2 className="text-feed-jungle mb-4 text-3xl font-medium lg:text-5xl">
                Select Your best
                Preferences
              </h2>
              <p className="opacity-80 lg:text-lg">
                Every week, choose from over 35 meals and 18 Extras. Don’t need
                a box this week? Skipping a delivery is easy.
              </p>
              <Button className="bg-feed-lime hover:text-feed-lime border-feed-jungle text-feed-jungle hover:bg-feed-black h-11 rounded-full border-[1.5px] text-lg">
                Visit Us
              </Button>
            </div>

            <div className="flex justify-end items-end">
            <Image
              src="/howItWorks/mobile-view.jpg"
              alt="fresh food"
              width={400}
              height={400}
              className="hidden rounded-xl md:block"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Freshly Baked Section */}
      <section className="my-10 p-3 sm:p-5 md:my-20 md:p-0">
        <div className="relative container">
          {/* Half circle left side */}
          <div className="bg-feed-lime shadow-feed-lime absolute top-[-50px] right-[-50px] z-0 size-25 rounded-full opacity-100 shadow-2xl blur-lg" />

          <div className="relative z-10 mx-auto grid items-center gap-5 md:grid-cols-2 lg:gap-10">
            <Image
              src="/howItWorks/customize-view.avif"
              alt="fresh food"
              width={600}
              height={400}
              className="hidden rounded-xl md:block"
            />
            <div className="space-y-3 lg:space-y-7">
              <h2 className="text-feed-jungle mb-4 text-3xl font-medium lg:text-5xl">
                Customize Your Order
              </h2>
              <p className="opacity-80 lg:text-lg">
                Let your tastebuds be your guide! Use our Customize It † tool to
                make your meals feel truly yours.
              </p>
              <Button className="bg-feed-lime hover:text-feed-lime border-feed-jungle text-feed-jungle hover:bg-feed-black h-11 rounded-full border-[1.5px] text-lg">
                Visit Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Freshly Baked Section */}
      <section className="my-10 p-3 sm:p-5 md:my-20 md:p-0">
        <div className="relative container">
          {/* Half circle left side */}
          <div className="bg-feed-lime shadow-feed-lime absolute top-[-50px] left-[-50px] z-0 size-25 rounded-full opacity-100 shadow-2xl blur-lg" />

          <div className="relative z-10 mx-auto grid items-center gap-5 md:grid-cols-2 lg:gap-10">
            <div className="space-y-3 lg:space-y-7">
              <h2 className="text-feed-jungle mb-4 text-3xl font-medium lg:text-5xl">
              Enjoy Your Meals!
              </h2>
              <p className="opacity-80 lg:text-lg">
              Cook delicious meals easily with step-by-step recipes that make home cooking simpler than ever.
              </p>
              <Button className="bg-feed-lime hover:text-feed-lime border-feed-jungle text-feed-jungle hover:bg-feed-black h-11 rounded-full border-[1.5px] text-lg">
                Visit Us
              </Button>
            </div>

            <Image
              src="/howItWorks/eat-banner.avif"
              alt="fresh food"
              width={600}
              height={400}
              className="hidden rounded-xl md:block"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
