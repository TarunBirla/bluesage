// import { useState } from "react";
// import { PieChart, Pie, Cell } from "recharts";

// const COLORS = ["#e5e5e5", "#9ca3af"];

// export default function SIPCalculator() {
//   const [sip, setSip] = useState(10000);
//   const [years, setYears] = useState(10);
//   const [rate, setRate] = useState(12);

//   const months = years * 12;
//   const monthlyRate = rate / 12 / 100;

//   const futureValue =
//     sip *
//     ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
//     (1 + monthlyRate);

//   const invested = sip * months;
//   const growth = futureValue - invested;

//   const data = [
//     { name: "Principal", value: invested },
//     { name: "Interest", value: growth },
//   ];

//   return (
//     <section className="bg-black py-24 px-4 flex justify-center overflow-hidden">
//       <div className="max-w-7xl w-full border border-gray-400 rounded-[40px] p-6 md:p-12">
//         <h2 className="text-white text-[18px] font-semibold mb-8">
//           SIP calculator
//         </h2>

//         {/* Toggle */}
//         <div className="flex flex-col md:flex-row gap-10 text-gray-300 mb-10">
//           <label className="flex items-center gap-2">
//             <input type="radio" name="type" defaultChecked />
//             SIP calculator
//           </label>

//           <label className="flex items-center gap-2">
//             <input type="radio" name="type" />
//             Lumpsum
//           </label>
//         </div>

//         <div className="grid md:grid-cols-2 gap-14">
//           {/* LEFT SIDE */}
//           <div className="border border-gray-600 rounded-2xl p-8">
//             {/* SIP */}
//             <div className="mb-10">
//               <p className="text-gray-400 text-[18px] mb-2">monthly SIP Amount</p>

//               <input
//                 type="range"
//                 min="100"
//                 max="10000"
//                 value={sip}
//                 onChange={(e) => setSip(e.target.value)}
//                 className="w-full slider"
//               />
//             </div>

//             {/* Years */}
//             <div className="mb-10">
//               <p className="text-gray-400 text-[18px] mb-2">SIP Period</p>

//               <input
//                 type="range"
//                 min="1"
//                 max="30"
//                 value={years}
//                 onChange={(e) => setYears(e.target.value)}
//                 className="w-full slider"
//               />
//             </div>

//             {/* Rate */}
//             <div>
//               <p className="text-gray-400 text-[18px] mb-2">
//                 Expected return rate (p.a)
//               </p>

//               <input
//                 type="range"
//                 min="1"
//                 max="20"
//                 value={rate}
//                 onChange={(e) => setRate(e.target.value)}
//                 className="w-full slider"
//               />
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex flex-col items-center">
//             {/* Donut Chart */}
//             <PieChart width={220} height={220}>
//               <Pie
//                 data={data}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={70}
//                 outerRadius={90}
//                 dataKey="value"
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={index} fill={COLORS[index]} />
//                 ))}
//               </Pie>
//             </PieChart>

//             {/* Legend */}
//             <div className="flex gap-8 text-gray-400 text-[18px] mt-4">
//               <span>● Principal</span>
//               <span>● Interest</span>
//             </div>

//             {/* Values */}
//             <div className="grid grid-cols-2 gap-8 mt-8 text-gray-300 text-[18px]">
//               <div>
//                 <p>Total SIP Amount invested</p>
//                 <p className="text-white font-semibold">
//                   ₹ {invested.toLocaleString()}
//                 </p>
//               </div>

//               <div>
//                 <p>Total Growth</p>
//                 <p className="text-white font-semibold">
//                   ₹ {Math.round(growth).toLocaleString()}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6 text-center">
//               <p className="text-gray-400">Total Future Value</p>

//               <p className="text-white text-xl font-bold">
//                 ₹ {Math.round(futureValue).toLocaleString()}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
// .slider {
//   -webkit-appearance: none;
//   height: 2px;
//   background: #9ca3af;
// }

// .slider::-webkit-slider-thumb {
//   -webkit-appearance: none;
//   width: 14px;
//   height: 14px;
//   background: white;
//   border-radius: 50%;
//   cursor: pointer;
// }
// `}
//       </style>
//     </section>
//   );
// }

import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#e5e5e5", "#9ca3af"];

export default function SIPCalculator() {
  const [sip, setSip] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const months = years * 12;
  const monthlyRate = rate / 12 / 100;

  const futureValue =
    sip *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);

  const invested = sip * months;
  const growth = futureValue - invested;

  const data = [
    { name: "Principal", value: invested },
    { name: "Interest", value: growth },
  ];

  return (
    <section className="bg-black py-24 px-4 flex justify-center overflow-hidden">
      <div className="max-w-7xl w-full border border-gray-400 rounded-[40px]  hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all p-6 md:p-12">
        <h2 className="text-white text-[18px] font-semibold mb-8">
          SIP Calculator
        </h2>

        <div className="flex flex-col md:flex-row gap-10 text-gray-300 mb-10">
          <label className="flex items-center gap-2">
            <input type="radio" name="type" defaultChecked />
            SIP calculator
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="type" />
            Lumpsum
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* LEFT SIDE */}
          <div className="border border-gray-600 rounded-2xl p-8">
            {/* SIP Amount */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <p className="text-gray-400 text-[18px]">Monthly SIP Amount</p>
                <p className="text-white font-semibold">
                  ₹ {sip.toLocaleString()}
                </p>
              </div>

              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={sip}
                onChange={(e) => setSip(Number(e.target.value))}
                className="w-full slider"
              />
            </div>

            {/* SIP Period */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <p className="text-gray-400 text-[18px]">SIP Period (Years)</p>
                <p className="text-white font-semibold">{years} Years</p>
              </div>

              <input
                type="range"
                min="1"
                max="30"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full slider"
              />
            </div>

            {/* Rate */}
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-400 text-[18px]">
                  Expected return rate (p.a)
                </p>
                <p className="text-white font-semibold">{rate}%</p>
              </div>

              <input
                type="range"
                min="1"
                max="20"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full slider"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center">
            <PieChart width={220} height={220}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => `₹ ${Math.round(value).toLocaleString()}`}
              />
            </PieChart>

            {/* Legend */}
            <div className="flex gap-8 text-gray-400 text-[18px] mt-4">
              <span>● Principal</span>
              <span>● Interest</span>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-8 mt-8 text-gray-300 text-[18px]">
              <div>
                <p>Total SIP Amount invested</p>
                <p className="text-white font-semibold">
                  ₹ {invested.toLocaleString()}
                </p>
              </div>

              <div>
                <p>Total Growth</p>
                <p className="text-white font-semibold">
                  ₹ {Math.round(growth).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400">Total Future Value</p>

              <p className="text-white text-xl font-bold">
                ₹ {Math.round(futureValue).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
.slider {
  -webkit-appearance: none;
  height: 3px;
  background: #6b7280;
  border-radius: 10px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
}
`}
      </style>
    </section>
  );
}
