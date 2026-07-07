import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

import {
  getSIPReturnWithAnnualIncrease,
  getTargetAmountSIP,
} from "../service/advisorKhojApi";

const COLORS = ["#E5E5E5", "#9CA3AF"];

export default function SIPCalculator() {
  const [mode, setMode] = useState("sip");

  const [amount, setAmount] = useState(5000);

  const [years, setYears] = useState(10);

  const [rate, setRate] = useState(12);

  const [loading, setLoading] = useState(false);

  const [apiData, setApiData] = useState(null);

  const [error, setError] = useState("");

  // SIP Scheme
  const [scheme] = useState(
    "Aditya Birla Sun Life Equity Savings Fund - Regular Plan - Growth"
  );

  const [frequency] = useState("Monthly");

  const [enhancement] = useState(0);

  // today's date
  const today = new Date();

  // start date (10 years back)
  const start = new Date();

  start.setFullYear(today.getFullYear() - years);

  const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();

    return `${dd}-${mm}-${yyyy}`;
  };

  const start_date = formatDate(start);

  const end_date = formatDate(today);

  const calculate = async () => {
  try {
    setLoading(true);
    setError("");

    if (mode === "sip") {
      const response = await getSIPReturnWithAnnualIncrease({
        scheme,
        amount,
        frequency,
        start_date,
        end_date,
        enhancement_percentage: enhancement,
      });

      console.log("SIP API Response", response);

      setApiData(response);
    } else {
      const response = await getTargetAmountSIP({
        wealth_amount: amount,
        inflation_rate: 5,
        expected_return: rate,
        period: years,
      });

      console.log("Lumpsum API Response", response);

      setApiData(response);
    }
  } catch (err) {
    console.log(err);

    setError("Unable to fetch calculator.");
  } finally {
    setLoading(false);
  }
};
useEffect(() => {
  calculate();
}, [mode, amount, years, rate]);

// ================================
// CALCULATED VALUES FROM API
// ================================

let invested = 0;
let futureValue = 0;
let growth = 0;

if (mode === "sip") {
  if (
    apiData &&
    apiData.sipYearlyEnhancementResponse &&
    apiData.sipYearlyEnhancementResponse.length > 0
  ) {
    // 0% yearly enhancement result
    const sip = apiData.sipYearlyEnhancementResponse[0];

    invested = Number(sip.investmentAmount || 0);

    futureValue = Number(sip.investmentValue || 0);

    growth = Number(sip.sipGrowth || 0);
  }
} else {
  if (apiData) {
    invested = Number(apiData.invested_amount || 0);

    futureValue = Number(apiData.target_wealth || 0);

    growth = Number(apiData.growth_amount || 0);
  }
}

// ================================
// PIE CHART DATA
// ================================

const data = [
  {
    name: "Principal",
    value: invested,
  },
  {
    name: "Returns",
    value: growth,
  },
];
if (loading) {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="text-white text-xl">
        Calculating...
      </div>
    </div>
  );
}
if (error) {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="text-red-500 text-lg">
        {error}
      </div>
    </div>
  );
}
return (
  <section className="bg-black py-5 px-4 flex justify-center overflow-hidden">
    <div className="max-w-6xl w-full border border-gray-600 rounded-[32px]  hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all p-6 md:p-12">

      <h2 className="text-white text-3xl md:text-4xl font-semibold mb-8">
        SIP Calculator
      </h2>

      {/* Toggle */}
      <div className="flex gap-8 mb-10 text-white">

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={mode === "sip"}
            onChange={() => setMode("sip")}
          />
          SIP Calculator
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={mode === "lumpsum"}
            onChange={() => setMode("lumpsum")}
          />
          Lumpsum
        </label>

      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT */}

        <div className="border border-gray-700 rounded-2xl p-8">

          {/* Amount */}

          <div className="mb-8">

            <div className="flex justify-between mb-3">

              <span className="text-gray-400">
                {mode === "sip"
                  ? "Monthly SIP Amount"
                  : "Target Amount"}
              </span>

              <span className="text-white font-semibold">
                ₹ {amount.toLocaleString()}
              </span>

            </div>

            <input
              type="range"
              min={5000}
              max={5000000}
              step={500}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="slider w-full"
            />

          </div>

          {/* Years */}

          <div className="mb-8">

            <div className="flex justify-between mb-3">

              <span className="text-gray-400">
                Investment Period
              </span>

              <span className="text-white font-semibold">
                {years} Years
              </span>

            </div>

            <input
              type="range"
              min={1}
              max={40}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="slider w-full"
            />

          </div>

          {/* Return */}

          <div>

            <div className="flex justify-between mb-3">

              <span className="text-gray-400">
                Expected Return
              </span>

              <span className="text-white font-semibold">
                {rate}%
              </span>

            </div>

            <input
              type="range"
              min={1}
              max={30}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="slider w-full"
            />

          </div>

        </div>
                {/* RIGHT SIDE */}

        <div className="flex flex-col items-center justify-center">

          <PieChart width={260} height={260}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) =>
                `₹ ${Number(value).toLocaleString("en-IN")}`
              }
            />
          </PieChart>

          <div className="flex gap-8 mt-5">

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <span className="text-gray-300">
                Principal
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-500"></div>
              <span className="text-gray-300">
                Returns
              </span>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-8 mt-10 w-full">

            <div>

              <p className="text-gray-400 text-sm">
                Amount Invested
              </p>

              <h3 className="text-white text-xl font-bold mt-1">
                ₹ {Math.round(invested).toLocaleString("en-IN")}
              </h3>

            </div>

            <div>

              <p className="text-gray-400 text-sm">
                Total Returns
              </p>

              <h3 className="text-white text-xl font-bold mt-1">
                ₹ {Math.round(growth).toLocaleString("en-IN")}
              </h3>

            </div>

          </div>

          <div className="w-full mt-8 border-t border-gray-700 pt-6">

            <p className="text-gray-400 text-center">
              Total Future Value
            </p>

            <h2 className="text-center text-white text-3xl font-bold mt-2">
              ₹ {Math.round(futureValue).toLocaleString("en-IN")}
            </h2>

          </div>

        </div>

      </div>

    </div>

    <style>{`

      .slider{
        -webkit-appearance:none;
        width:100%;
        height:4px;
        border-radius:20px;
        background:#4b5563;
      }

      .slider::-webkit-slider-thumb{
        -webkit-appearance:none;
        width:18px;
        height:18px;
        border-radius:50%;
        background:#ffffff;
        cursor:pointer;
      }

      .slider::-moz-range-thumb{
        width:18px;
        height:18px;
        border-radius:50%;
        background:#ffffff;
        cursor:pointer;
      }

    `}</style>

  </section>
);
}