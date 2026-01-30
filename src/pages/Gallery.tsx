import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  // Use the full size for the modal
  fullSrc: string; 
  // Use the optimized size for the grid
  thumbSrc: string; 
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images: GalleryImage[] = [
    // --- Stone Veneer Series ---
    { id: 1, title: 'Stone Veneer Installation', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer0.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer0.JPEG' },
    { id: 2, title: 'Exterior Stone Veneer', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer1.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer1.JPEG' },
    { id: 3, title: 'Luxury Stone Veneer', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer2.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer2.JPEG' },

    // --- New Projects (Inserted here) ---
    { id: 4, title: 'Commercial Paver Installation', category: 'Pavers', fullSrc: '/gallery/ComercialPaver.JPEG', thumbSrc: '/gallery/thumbnails/ComercialPaver.JPEG' },
    { id: 5, title: 'Garden Retaining Wall', category: 'Retaining Walls', fullSrc: '/gallery/GardenRetainingWall.JPEG', thumbSrc: '/gallery/thumbnails/GardenRetainingWall.JPEG' },
    { id: 6, title: 'Interior Stone Veneer', category: 'Stone Work', fullSrc: '/gallery/InteriorStoneVeneer.JPEG', thumbSrc: '/gallery/thumbnails/InteriorStoneVeneer.JPEG' },
    { id: 7, title: 'Custom Paver Driveway', category: 'Pavers', fullSrc: '/gallery/PaverDriveway.JPEG', thumbSrc: '/gallery/thumbnails/PaverDriveway.JPEG' },
    { id: 8, title: 'Residential Block Wall', category: 'Block Fence', fullSrc: '/gallery/ResidentialBlockWall.JPEG', thumbSrc: '/gallery/thumbnails/ResidentialBlockWall.JPEG' },
    { id: 9, title: 'Structural Retaining Wall', category: 'Retaining Walls', fullSrc: '/gallery/RetainingWall.jpeg', thumbSrc: '/gallery/thumbnails/RetainingWall.jpeg' },
    { id: 10, title: 'Stone Fire Pit', category: 'Stone Work', fullSrc: '/gallery/StoneFirePit.jpeg', thumbSrc: '/gallery/thumbnails/StoneFirePit.jpeg' },
    { id: 11, title: 'Natural Stone Walkway', category: 'Stone Work', fullSrc: '/gallery/StoneWalkway.JPEG', thumbSrc: '/gallery/thumbnails/StoneWalkway.JPEG' },
    { id: 12, title: 'Stone Patio Design', category: 'Pavers', fullSrc: '/gallery/StonePatio.JPEG', thumbSrc: '/gallery/thumbnails/StonePatio.JPEG' },

    // --- Pool & Specialty ---
    { id: 13, title: 'Pool Wall Veneer', category: 'Stone Work', fullSrc: '/gallery/PoolWallStoneVeneer.JPEG', thumbSrc: '/gallery/thumbnails/PoolWallStoneVeneer.JPEG' },
    { id: 14, title: 'Pool Wall Veneer Detail', category: 'Stone Work', fullSrc: '/gallery/PoolWallStoneVeneer2.JPEG', thumbSrc: '/gallery/thumbnails/PoolWallStoneVeneer2.JPEG' },
    { id: 15, title: 'Stone Chimney', category: 'Stone Work', fullSrc: '/gallery/StoneChimney.JPEG', thumbSrc: '/gallery/thumbnails/StoneChimney.JPEG' },
    { id: 16, title: 'Patio Paver System', category: 'Pavers', fullSrc: '/gallery/PatioPaver.JPEG', thumbSrc: '/gallery/thumbnails/PatioPaver.JPEG' },

    // --- Remaining Stone Veneer Series ---
    { id: 17, title: 'Stone Veneer 3', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer3.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer3.JPEG' },
    { id: 18, title: 'Stone Veneer 4', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer4.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer4.JPEG' },
    { id: 19, title: 'Stone Veneer 5', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer5.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer5.JPEG' },
    { id: 20, title: 'Stone Veneer 6', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer6.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer6.JPEG' },
    { id: 21, title: 'Stone Veneer 7', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer7.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer7.JPEG' },
];


  // const images: GalleryImage[] = [
  //   { id: 1, title: 'Stone House Wall Veneer Installation', category: 'Stone Work', fullSrc: '/public/gallery/StoneVeneer.jpeg', thumbSrc: 'public/gallery/thumbnails/StoneVeneer.jpeg'},
    // { id: 2, title: 'Pool Wall Stone Veneer', category: 'Stone Work', src: '/gallery/PoolWallStoneVeneer2.JPEG' },
    // { id: 3, title: 'Stone Chimney', category: 'Stone Work', src: '/gallery/StoneChimney.JPEG' },
    // { id: 4, title: 'Patio Paver', category: 'Pavers', src: '/gallery/PatioPaver.JPEG' },
    // // { id: 5, title: 'Pool Wall Stone Veneer 2', category: 'Stone Work', src: '/gallery/PoolWallStoneVeneer2.JPEG' },
    // { id: 5, title: 'Stone Veneer 1', category: 'Stone Work', src: '/gallery/StoneVeneer1.JPEG' },
    // { id: 6, title: 'Stone Veneer 2', category: 'Stone Work', src: '/gallery/StoneVeneer2.JPEG' },
    // { id: 7, title: 'Stone Veneer 3', category: 'Stone Work', src: '/gallery/StoneVeneer3.JPEG' },
    // { id: 8, title: 'Stone Veneer 4', category: 'Stone Work', src: '/gallery/StoneVeneer4.JPEG' },
    // { id: 9, title: 'Stone Veneer 5', category: 'Stone Work', src: '/gallery/StoneVeneer5.JPEG' },
    // { id: 10, title: 'Stone Veneer 6', category: 'Stone Work', src: '/gallery/StoneVeneer6.JPEG' },

    // { id: 2, title: 'Custom Paver Driveway', category: 'Pavers', src: '/gallery/PaverDriveway.jpeg' },
    // { id: 3, title: 'Decorative Retaining Wall', category: 'Retaining Walls', src: '/gallery/RetainingWall.jpeg' },
    // { id: 4, title: 'Block Fence Construction', category: 'Block Fence', src: '/gallery/BlockFence.jpeg' },
    // { id: 5, title: 'Natural Stone Walkway', category: 'Stone Work', src: '/gallery/NaturalStoneWalkway.jpeg' },
    // { id: 6, title: 'Paver Patio Design', category: 'Pavers', src: '/gallery/PaverPatio.jpeg' },
    // { id: 7, title: 'Terraced Retaining Walls', category: 'Retaining Walls', src: '/gallery/TerracedWall.jpeg' },
    // { id: 8, title: 'Stone Fire Pit', category: 'Stone Work', src: '/gallery/StoneFirePit.jpeg' },
    // { id: 9, title: 'Commercial Paver Installation', category: 'Pavers', src: '/gallery/CommercialPaver.jpeg' },
    // { id: 10, title: 'Residential Block Wall', category: 'Block Fence', src: '/gallery/BlockWall.jpeg' },
    // { id: 11, title: 'Garden Retaining Wall', category: 'Retaining Walls', src: '/gallery/GardenWall.jpeg' },
    // { id: 12, title: 'Stone Veneer Installation', category: 'Stone Work', src: '/gallery/StoneVeneer2.jpeg' },
  // ];

  const openModal = (id: number) => setSelectedImage(id);
  const closeModal = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage && selectedImage > 1) setSelectedImage(selectedImage - 1);
  };

  const goToNext = () => {
    if (selectedImage && selectedImage < images.length) setSelectedImage(selectedImage + 1);
  };

  const selectedImageData = images.find((img) => img.id === selectedImage);

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-stone-800 to-stone-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
          <p className="text-xl text-stone-200">
            Browse our portfolio of completed masonry and hardscape projects.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <button
                key={image.id}
                onClick={() => openModal(image.id)}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img
                  src={image.thumbSrc} // <-- Use the THUMBNAIL source here
                  alt={image.title}
                  loading="lazy"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform bg-stone-200"
                />
                {/* ... overlay code ... */}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
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
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            disabled={selectedImage === 1}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            disabled={selectedImage === images.length}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImageData.fullSrc} // <-- Use the FULL source here
              alt={selectedImageData.title}
              className="w-full max-h-[90vh] rounded-lg mb-4 object-contain"
            />
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-xl font-bold text-stone-800">{selectedImageData.title}</h3>
              <p className="text-gray-600">{selectedImageData.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
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
