// import { createContext } from "vm";

// export const tabContex = createContext(tabs);

// export function tabContexProvider({children}: {children: React.ReactNode}){
//     return(
//         <tabContexProvider.Provider value = {tabs}>
//             {children}
//         </tabContexProvider.Provider>
//     )
// }


// import React from "react";
// import { useState } from "react";
// import Image from "next/image";
// import PostTab from "./PostTab";
// import CoverPhoto from "./CoverPhoto";

// interface HostSideBar {
//   EventName: String;
//   Location: String;
//   Time: String;
//   Date: String;
//   activeComponent: string; // Add prop for active component
//   handleComponentChange: (component: string) => void; // Add prop for handling component change
// }

// function buyTckets() {}

// export default function HostSideBar({
//   EventName,
//   Location,
//   Time,
//   Date,
//   activeComponent,
//   handleComponentChange,
// }: HostSideBar) {
//   const [activeButton, setActiveButton] = useState<number | null>(1);

//   const handleClick = (buttonNumber: number) => {setActiveButton(buttonNumber);};

  
//   return (
//     <div className="w-96 h-5/6 bg-white items-end ">
//       <div className=' text-center text-[#454545cc] text-5xl font-normal pt-16 font-["Roboto"] pt-20'>
//         {EventName}
//       </div>

//       <div className="flex w-80 h-14 rounded-3xl bg-[#F9EBE9] items-center mx-8 my-12">
//         <button
//           className={`text-lg font-medium ml-2 w-40 h-12 rounded-3xl  ${
//             activeButton === 1
//               ? "bg-[#D47151] text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
//               : "hover:bg-gray-200 text-[#D47151] bg-[#F9EBE9]"
//           }`}
//           onClick={() => {
//             if (activeComponent !== "CoverPhoto") {
//               handleComponentChange("CoverPhoto");
//             }
//           }}
//         >
//           EVENT HOST
//         </button>
//         <button
//           className={`text-lg font-medium mr-2 w-40 h-12 rounded-3xl  ${
//             activeButton === 2
//               ? "bg-[#D47151] text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
//               : "hover:bg-gray-200 text-[#D47151] bg-[#F9EBE9]"
//           }`}
//           onClick={() => {
            
//             if (activeComponent !== "PostTab") {
//               handleComponentChange("PostTab");
//             }
//           }}
//         >
//           COMMUNITY
//         </button>
//       </div>

//       <div className="text-left ml-12 text-[#455273] text-3xl font-bold mt-16">
//         QUICK FACTS
//       </div>

//       <div className="grid grid-rows-3 gap-6 ml-12 text-left mt-8">
//         <div>
//           <div className="w-8 h-8 ">
//             <Image
//               src="/images/ReusableComponents/Pin_fill.svg"
//               alt="print"
//               width={32}
//               height={32}
//             />
//           </div>
//           <div className="text-[#353C4E] text-2xl  align-top -mt-8 font-['Roboto'] ml-12">
//             {Location}
//           </div>
//         </div>

//         <div>
//           <div className="w-8 h-8 ">
//             <Image
//               src="/images/ReusableComponents/Date_org.svg"
//               alt="print"
//               width={32}
//               height={32}
//             />
//           </div>
//           <div className="text-[#353C4E] text-2xl font-['Roboto'] align-top -mt-8 ml-12">
//             {Date}
//           </div>
//         </div>

//         <div>
//           <div className="w-8 h-8 ">
//             <Image
//               src="/images/ReusableComponents/Clock_fill.svg"
//               alt="print"
//               width={32}
//               height={32}
//             />
//           </div>
//           <div className="text-[#353C4E] text-2xl  font-['Roboto'] align-top -mt-8 ml-12">
//             {Time}
//           </div>
//         </div>

//         <div className="flex pt-24">
//           <button className="flex w-36 h-16 bg-[#D47151] rounded-l-2xl items-center px-4">
//             <div className=" w-10 h-10 mt-2">
//               <Image
//                 src="/images/Event/HostPage/Check_fill.svg"
//                 alt="print"
//                 width={32}
//                 height={32}
//               />
//             </div>
//             <div className="font-medium text-lg text-white text-left leading-tight ml-4">
//               Buy tickets
//             </div>
//           </button>

//           <button className="flex w-36 h-16 bg-[#455273] rounded-r-2xl items-center px-4">
//             <div className=" w-10 h-10 mt-2">
//               <Image
//                 src="/images/Event/HostPage/Paper_fill.svg"
//                 alt="print"
//                 width={32}
//                 height={32}
//               />
//             </div>
//             <div className="font-medium text-lg text-white text-left leading-tight ml-4">
//               Add to Wish List
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
