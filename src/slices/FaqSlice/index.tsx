'use client'
import React, { useState } from 'react';
import { SliceComponentProps } from '@prismicio/react';
import type { Content } from '@prismicio/client';

/**
 * Props for `FaqSlice`.
 */
export type FaqSliceProps = SliceComponentProps<Content.FaqSliceSlice>;

/**
 * Component for "FaqSlice" Slices.
 */
const FaqSlice = ({ slice }: FaqSliceProps): JSX.Element => {

  // State to track the currently active FAQ index
  const [activeIndex, setActiveIndex] = useState<number|null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="
          text-center text-3xl font-semibold text-gray-800
          mb-16
          font-sans
        ">
          <>{slice.primary.section_title}</>
        </h1>
        <div className="flex flex-wrap -mx-4 justify-center">
          {slice.items.map((faq, index) => (
            <div key={index} className="
              px-4 w-full sm:w-full md:w-1/2
            ">
              <div className="
                mb-6 rounded-lg border border-[#487b94] p-6
                transition duration-500 ease-in-out transform
                hover:shadow-md
              ">
                <button
                  className="
                    w-full text-left
                    text-lg font-semibold
                    focus:outline-none
                  "
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                </button>
                <div className={`
                  overflow-hidden
                  transition-height duration-500 ease-in-out
                  ${(activeIndex === index ? "max-h-screen" : "max-h-0")}
                  pl-2
                `}>
                  <p className="
                    text-gray-600 mt-2
                    font-sans
                  ">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSlice;