'use client';

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';

type LightboxGalleryProps = {
  images: string[];
  isOpen: boolean;
  isData: String;
  setIsOpen: (open: boolean) => void;
};

export default function LightboxGallery({ images, isOpen, isData, setIsOpen }: LightboxGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const lightboxElement = (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
      onClick={closeLightbox}
    >
      <button
        className="absolute top-6 right-6 text-white text-3xl font-bold"
        onClick={(e) => {
          e.stopPropagation();
          closeLightbox();
        }}
      >
        &times;
      </button>

      <button
        className="absolute left-6 text-white text-4xl font-bold"
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
      >
        &#10094;
      </button>

      <div
        className="relative w-40 h-48 mx-auto my-5 shadow-md rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          fill
          src={`/data/${isData}/${images[currentIndex]}`}
          alt={`Image ${currentIndex + 1}`}
          className="object-cover rounded-2xl"
        />
      </div>

      <button
        className="absolute right-6 text-white text-4xl font-bold"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
      >
        &#10095;
      </button>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
        {images.map((src, index) => (
          <button key={index} onClick={() => openLightbox(index)}>
            <div className="relative w-40 h-48 mx-auto my-5 shadow-md rounded-2xl overflow-hidden">
              <Image
                src={`/data/${isData}/${src}`}
                fill
                alt={`Image ${index + 1}`}
                className="object-cover rounded-2xl"
              />
            </div>
          </button>
        ))}
      </div>

      {mounted && isOpen && typeof window !== 'undefined'
        ? ReactDOM.createPortal(lightboxElement, document.body)
        : null}
    </>
  );
}
