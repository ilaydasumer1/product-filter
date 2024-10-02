import React from "react";
import ChooseCategory from "./ChooseCategory";
import DropDown from "./DropDown";
import FiltreleButton from "./FiltreleButton";

function FilterTop() {
  return (
    <div className="gap-y-2 py-2 my-1 sm:py-3 sm:my-1 flex flex-col sm:flex-row justify-around items-center bg-white rounded-lg mx-4 sm:mx-6 ">
      <div>
        <ChooseCategory />
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <div className="sm:hidden">
          <FiltreleButton />
        </div>
        <div>
          <DropDown />
        </div>
      </div>
    </div>
  );
}

export default FilterTop;

// import React from "react";
// import ChooseCategory from "./ChooseCategory";
// import DropDown from "./DropDown";
// import FiltreleButton from "./FiltreleButton";

// function FilterTop() {
//   return (
//     <div className="gap-y-2 py-4 my-2 sm:py-6 flex flex-col sm:flex-row justify-around items-center bg-white rounded-lg mx-4 sm:mx-6 ">
//       <div>
//         <ChooseCategory />
//       </div>
//       <div className="flex flex-row gap-x-4 items-center">
//         <div className="sm:hidden">
//           <FiltreleButton />
//         </div>
//         <div>
//           <DropDown />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FilterTop;
