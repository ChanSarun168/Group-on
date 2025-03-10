// "use client"
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { useState } from "react";
// import { Timer, Share2, Users } from "lucide-react";

// export default function TradeTogetherDeals() {
//   const [buyers, setBuyers] = useState(7);
//   const minBuyers = 10;
//   const maxBuyers = 20;

//   const shareDeal = () => {
//     if (typeof window !== "undefined") {
//       const url = encodeURIComponent(window.location.href);
//       const text = encodeURIComponent("🔥 Join this group buy deal and unlock amazing discounts! 🚀");
      
//       window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, "_blank");
//     }
//   };
  

//   return (
//     <div className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-[#002f6c] to-[#005bac] rounded-2xl shadow-2xl text-white">
//       <h1 className="text-4xl font-bold mb-6 text-[#ffd200] text-center animate-pulse">🔥 Hot Group Purchase Deal! 🔥</h1>
//       <Card className="p-6 border rounded-2xl shadow-lg bg-white text-gray-900">
//         <CardContent>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold">Premium Organic Coffee Beans ☕</h2>
//             <div className="flex items-center text-gray-700 font-semibold">
//               <Timer className="mr-2 text-red-600 animate-bounce" />
//               <span>Ends in: 12h 45m</span>
//             </div>
//           </div>

//           <div className="mb-6 flex justify-center">
//             <div className="w-80 h-40 rounded-lg shadow-lg flex justify-center">
//               <img src="/coffee.png" alt="" className="object-cover w-40"/>
//             </div>
//           </div>

//           <div className="mb-6">
//             <Progress value={(buyers / maxBuyers) * 100} className="h-4 bg-gray-300 rounded-full" />
//             <p className="text-sm text-gray-700 mt-2 flex items-center">
//               <Users className="mr-2 text-blue-500" /> {buyers}/{minBuyers} buyers joined - Unlock next discount at {minBuyers} buyers!
//             </p>
//           </div>

//           <div className="mb-6 text-center">
//             <p className="text-2xl font-bold text-green-700">Current Price: <span className="text-3xl">$18/kg</span></p>
//             <p className="text-lg text-gray-600">Next Discount: <span className="text-green-600">$16/kg at 10 buyers</span></p>
//           </div>

//           <div className="flex space-x-4">
//             <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-3 text-lg font-bold rounded-xl shadow-md transition-transform transform hover:scale-105" onClick={() => setBuyers(buyers + 1)}>
//               🚀 Join Group Buy
//             </Button>
//             <Button className="bg-gray-100 hover:bg-gray-200 text-[#005bac] py-3 px-4 rounded-xl shadow-md flex items-center transition-transform transform hover:scale-105" onClick={shareDeal}>
//               <Share2 className="mr-2" /> 📢 Share
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }