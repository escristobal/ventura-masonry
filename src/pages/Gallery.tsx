import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images: GalleryImage[] = [
    { id: 1, title: 'Stone Patio Installation', category: 'Stone Work' },
    { id: 2, title: 'Custom Paver Driveway', category: 'Pavers' },
    { id: 3, title: 'Decorative Retaining Wall', category: 'Retaining Walls' },
    { id: 4, title: 'Block Fence Construction', category: 'Block Fence' },
    { id: 5, title: 'Natural Stone Walkway', category: 'Stone Work' },
    { id: 6, title: 'Paver Patio Design', category: 'Pavers' },
    { id: 7, title: 'Terraced Retaining Walls', category: 'Retaining Walls' },
    { id: 8, title: 'Stone Fire Pit', category: 'Stone Work' },
    { id: 9, title: 'Commercial Paver Installation', category: 'Pavers' },
    { id: 10, title: 'Residential Block Wall', category: 'Block Fence' },
    { id: 11, title: 'Garden Retaining Wall', category: 'Retaining Walls' },
    { id: 12, title: 'Stone Veneer Installation', category: 'Stone Work' },
  ];

  const openModal = (id: number) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage && selectedImage > 1) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage && selectedImage < images.length) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const selectedImageData = images.find((img) => img.id === selectedImage);

  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-stone-800 to-stone-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
          <p className="text-xl text-stone-200">
            Browse our portfolio of completed masonry and hardscape projects.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <button
                key={image.id}
                onClick={() => openModal(image.id)}
                className="group relative bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-stone-400 to-stone-600 flex items-center justify-center">
                  <p className="text-white text-sm font-semibold">Project {image.id}</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-semibold">
                    View Image
                  </span>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-sm font-semibold text-stone-800">{image.title}</h3>
                  <p className="text-xs text-gray-600">{image.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && selectedImageData && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            disabled={selectedImage === 1}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            disabled={selectedImage === images.length}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-stone-400 to-stone-600 rounded-lg aspect-video flex items-center justify-center mb-4">
              <p className="text-white text-2xl font-semibold">
                Project {selectedImage}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-xl font-bold text-stone-800">{selectedImageData.title}</h3>
              <p className="text-gray-600">{selectedImageData.category}</p>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free estimate on your masonry or hardscape project.
          </p>
          <a
            href="tel:509-792-9059"
            className="inline-flex items-center gap-2 bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors"
          >
            <Phone size={20} />
            Call 509-792-9059
          </a>
        </div>
      </section>
    </div>
  );
}
