import React from 'react';
import Image from 'next/image';

interface GalleryProps {
  imageFilenames: string[];
}

const Gallery: React.FC<GalleryProps> = ({ imageFilenames }) => {
  return (
    <section id="gallery" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageFilenames.map((filename) => (
            <div key={filename} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={`/images/gallery/${filename}`}
                alt={`Gallery image ${filename}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {/* Optional: Add an icon or text on hover */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;