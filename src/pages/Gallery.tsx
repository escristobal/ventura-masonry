import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { useParams, useNavigate } from "react-router-dom";

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
  const { imageId } = useParams();
  const navigate = useNavigate();
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
    { id: 17, title: 'Residential Block Wall', category: 'Block Fence', fullSrc: '/gallery/BlockWall.JPEG', thumbSrc: '/gallery/thumbnails/BlockWall.JPEG' },
    { id: 18, title: 'Stone Veneer 4', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer4.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer4.JPEG' },
    { id: 19, title: 'Stone Veneer 5', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer5.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer5.JPEG' },
    { id: 20, title: 'Stone Veneer 6', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer6.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer6.JPEG' },
    { id: 21, title: 'Stone Veneer 7', category: 'Stone Work', fullSrc: '/gallery/StoneVeneer7.JPEG', thumbSrc: '/gallery/thumbnails/StoneVeneer7.JPEG' },
];

  // 🔥 Open modal automatically if URL has :imageId
    useEffect(() => {
      if (imageId) {
        const id = Number(imageId);
        if (!isNaN(id)) {
          setSelectedImage(id);
        }
      } else {
        setSelectedImage(null);
      }
    }, [imageId]);

    const openModal = (id: number) => {
      navigate(`/gallery/${id}`);
    };

    const closeModal = () => {
      navigate('/gallery');
    };

    const goToPrevious = () => {
      if (selectedImage && selectedImage > 1) {
        navigate(`/gallery/${selectedImage - 1}`);
      }
    };

    const goToNext = () => {
      if (selectedImage && selectedImage < images.length) {
        navigate(`/gallery/${selectedImage + 1}`);
      }
    };

    const selectedImageData = images.find(img => img.id === selectedImage);

    return (
      <div className="bg-gray-50">

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map(image => (
                <button
                  key={image.id}
                  onClick={() => openModal(image.id)}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={image.thumbSrc}
                    alt={image.title}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform"
                  />
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
              className="absolute top-4 right-4 text-white"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 text-white"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 text-white"
            >
              <ChevronRight size={48} />
            </button>

            <div onClick={(e) => e.stopPropagation()} className="text-center">
              <img
                src={selectedImageData.fullSrc}
                alt={selectedImageData.title}
                className="max-h-[90vh] rounded-lg mx-auto"
              />

              <div className="bg-white rounded-lg p-4 mt-4 max-w-xl mx-auto">
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
