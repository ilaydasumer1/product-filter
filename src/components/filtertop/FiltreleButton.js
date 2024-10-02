import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductType from "../category/ProductType";
import ProductPrice from "../category/ProductPrice";
import ProductBody from "../category/ProductBody";
import ProductGender from "../category/ProductGender";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const FiltreleButton = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsFilterOpen(false);
      } else {
        setIsFilterOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div>
      {window.innerWidth < 768 && (
        <button
          className="font-muslih text-sm font-semibold bg-white text-gray-600 py-2 px-4 gap-x-2 rounded-lg inline-flex items-center border border-gray-300"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <CiMenuBurger
            className={`font-extrabold text-orange-600 ${
              isFilterOpen ? "rotate-180" : ""
            }`}
          />
          Filtrele
        </button>
      )}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            className="p-4 fixed left-0 top-0 bottom-0 bg-white shadow-lg z-50 overflow-y-auto"
          >
          <button className="closeButton"
              onClick={() => setIsFilterOpen(false)}>
            <IoClose />
             </button>
            <ProductType className="py-2" />
            <ProductBody className="py-2" />
            <ProductPrice className="py-2" />
            <ProductGender className="py-2" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FiltreleButton;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { IoClose } from "react-icons/io5"; // Çarpı ikonu için
// import ProductType from "../category/ProductType";
// import ProductPrice from "../category/ProductPrice";
// import ProductBody from "../category/ProductBody";
// import ProductGender from "../category/ProductGender";
// import { CiMenuBurger } from "react-icons/ci";

// const FiltreleButton = () => {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setIsFilterOpen(false);
//       } else {
//         setIsFilterOpen(true);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const sidebarVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { type: "spring", stiffness: 120 } },
//     exit: { opacity: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <div>
//       {window.innerWidth < 768 && (
//         <button
//           className="font-muslih text-sm font-semibold bg-white text-gray-600 py-2 px-4 gap-x-2 rounded-lg inline-flex items-center border border-gray-300"
//           onClick={() => setIsFilterOpen(!isFilterOpen)}
//         >
//           <CiMenuBurger
//             className={`font-extrabold text-orange-600 ${
//               isFilterOpen ? "" : "rotate-180"
//             }`}
//           />
//           Filtrele
//         </button>
//       )}
//       <AnimatePresence>
//         {isFilterOpen && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={sidebarVariants}
//             className="filtrePanel"
//           >
//             <button
//               className="closeButton"
//               onClick={() => setIsFilterOpen(false)}
//             >
//               <IoClose />
//             </button>
//             <ProductType className="py-2" />
//             <ProductBody className="py-2" />
//             <ProductPrice className="py-2" />
//             <ProductGender className="py-2" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default FiltreleButton;

// import React, { useState, useEffect } from "react";
// import ProductType from "../category/ProductType";
// import ProductPrice from "../category/ProductPrice";
// import ProductBody from "../category/ProductBody";
// import ProductGender from "../category/ProductGender";
// import { CiMenuBurger } from "react-icons/ci";

// const FiltreleButton = () => {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       // 768px altında filtreyi kapalı tut, üstünde açık
//       if (window.innerWidth < 768) {
//         setIsFilterOpen(false);
//       } else {
//         setIsFilterOpen(true);
//       }
//     };

//     // İlk yükleme ve her pencere boyutu değişikliğinde çalıştır
//     handleResize();
//     window.addEventListener("resize", handleResize);

//     // Cleanup fonksiyonu
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div>
//       {/* Küçük ekranlarda Filtrele butonunu göster */}
//       {window.innerWidth < 768 && (
//         <button
//           className=" font-muslih text-sm font-semibold bg-white text-gray-600 py-2 px-4 gap-x-2 rounded-lg inline-flex items-center border border-gray-300"
//           onClick={() => setIsFilterOpen(!isFilterOpen)}
//         >
//           <span className="text-sm">
//             {isOpen ? (
//               <CiMenuBurger className="font-extrabold text-orange-600" />
//             ) : (
//               <CiMenuBurger className="font-extrabold text-orange-600 rotate-180" />
//             )}
//           </span>
//           Filtrele
//         </button>
//       )}
//       {isFilterOpen && (
//         <div className="flex flex-col overflow-y-auto overflow-x-hidden max-h-screen">
//           <ProductType className="py-2" />
//           <ProductBody className="py-2" />
//           <ProductPrice className="py-2" />
//           <ProductGender className="py-2" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FiltreleButton;
