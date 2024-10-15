// export default function GalleryView({ images }) {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
//         Beautiful Gallery
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="
//               relative overflow-hidden bg-gray-200 rounded-lg shadow-md
//               transform transition duration-300 hover:scale-105
//             "
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-64 object-cover transition duration-300 hover:opacity-75"
//             />
//             <div
//               className="
//                 absolute inset-0 bg-gradient-to-t
//                 from-black via-transparent to-transparent
//                 opacity-0 hover:opacity-80 transition-opacity duration-300
//               "
//             >
//               <div className="absolute bottom-4 left-4 text-white">
//                 <h3 className="text-lg font-semibold">{image.title}</h3>
//                 <p className="text-sm">{image.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useInView } from "react-intersection-observer";

// const images = [
//   {
//     src: "https://images.unsplash.com/photo-1587502537745-50e66c88c63c",
//     alt: "Beautiful Nature",
//     title: "Nature Landscape",
//     description: "A stunning view of nature.",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1511376778420-8a64e2d8a041",
//     alt: "Mountain View",
//     title: "Majestic Mountains",
//     description: "Mountains reaching the sky.",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
//     alt: "Ocean",
//     title: "Serene Ocean",
//     description: "A peaceful view of the ocean.",
//   },
//   // Add more images as needed
// ];

// const LazyLoadImage = ({ src, alt, title, description }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//   });

//   return (
//     <div ref={ref} className="relative group mb-6">
//       <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
//         {inView && (
//           <img
//             src={src}
//             alt={alt}
//             className="w-full h-full object-cover transition-opacity duration-300 rounded-lg"
//           />
//         )}
//       </div>
//       <div className="mt-2">
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//         <p className="text-sm text-gray-600">{description}</p>
//       </div>
//     </div>
//   );
// };

// const GalleryView = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {images.map((image, index) => (
//           <LazyLoadImage
//             key={index}
//             src={image.src}
//             alt={image.alt}
//             title={image.title}
//             description={image.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryView;

import React from "react";
import { useInView } from "react-intersection-observer";

// Image data with working Unsplash URLs
const images = [
  {
    src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    alt: "Ocean",
    title: "Serene Ocean",
    description: "A peaceful view of the ocean.",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    alt: "Natural Landscape",
    title: "Rolling Hills",
    description: "Beautiful rolling hills under a clear sky.",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    alt: "Mountain View",
    title: "Majestic Mountain",
    description: "Snow-capped mountains with a cloudy sky.",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    alt: "Sunset Beach",
    title: "Sunset Beach",
    description: "A tranquil beach with a stunning sunset.",
  },
  {
    src: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    alt: "Desert",
    title: "Sandy Desert",
    description: "A vast desert with rolling sand dunes.",
  },
  {
    src: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    alt: "Waterfall",
    title: "Gushing Waterfall",
    description: "A powerful waterfall cascading through rocks.",
  },
];

const LazyLoadImage = ({ src, alt, title, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Images load when 20% of them are in view
  });

  return (
    <div
      ref={ref}
      className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
    >
      <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
        {inView && (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-opacity duration-300 rounded-lg"
          />
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const GalleryView = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <LazyLoadImage
            key={index}
            src={image.src}
            alt={image.alt}
            title={image.title}
            description={image.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryView;
