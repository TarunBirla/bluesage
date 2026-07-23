import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { getTargetAmountSIP } from "../service/advisorKhojApi";

const COLORS = ["#E5E5E5", "#9CA3AF"];

export default function SIPCalculator() {
  const [amount, setAmount] = useState(2500000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState("");

  const calculate = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getTargetAmountSIP({
        wealth_amount: amount,
        inflation_rate: 5,
        expected_return: rate,
        period: years,
      });

      console.log("Target Amount SIP API Response:", response);
      setApiData(response);
    } catch (err) {
      console.error("Target SIP API Error:", err);
      setError("Unable to fetch calculator data.");
    } finally {
      setLoading(false);
    }
  };

  // Run initial calculation once on mount only
  useEffect(() => {
    calculate();
  }, []);

  // ================================
  // CALCULATED VALUES FROM API
  // ================================
  let invested = 0;
  let futureValue = 0;
  let growth = 0;
  let sipAmount = 0;

  if (apiData) {
    invested = Number(apiData.invested_amount || 0);
    futureValue = Number(apiData.target_wealth || amount);
    growth = Number(apiData.growth_amount || 0);
    sipAmount = Number(apiData.sip_amount || 0);
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

  if (error) {
    return (
      <div className="bg-black py-10 flex items-center justify-center">
        <div className="text-red-500 text-base">{error}</div>
      </div>
    );
  }

  return (
    <section className="bg-black py-6 px-4 flex justify-center overflow-hidden">
      <div className="max-w-6xl w-full border border-gray-700 rounded-[32px] bg-[#090909] hover:shadow-[0_0_120px_rgba(200,200,200,0.1)] hover:border-gray-600 transition-all p-6 md:p-8">
        <h2 className="text-white text-3xl md:text-4xl font-bold font-[Quicksand] mb-8">
          Target Amount SIP Calculator
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SLIDERS */}
          <div className="border border-gray-800 rounded-2xl p-6 bg-[#0e0e0e] flex flex-col justify-between">
            <div>
              {/* Target Amount */}
              <div className="mb-8">
                <div className="flex justify-between mb-3 text-sm md:text-base">
                  <span className="text-gray-400 font-[Quicksand]">Target Amount (Rs)</span>
                  <span className="text-white font-bold font-[Quicksand]">
                    ₹ {amount.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={10000000}
                  step={50000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="slider w-full"
                />
              </div>

              {/* Investment Period */}
              <div className="mb-8">
                <div className="flex justify-between mb-3 text-sm md:text-base">
                  <span className="text-gray-400 font-[Quicksand]">Investment Period</span>
                  <span className="text-white font-bold font-[Quicksand]">
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

              {/* Return Rate */}
              <div className="mb-8">
                <div className="flex justify-between mb-3 text-sm md:text-base">
                  <span className="text-gray-400 font-[Quicksand]">Expected return rate (p.a)</span>
                  <span className="text-white font-bold font-[Quicksand]">
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

            {/* CALCULATE BUTTON BELOW SLIDERS */}
            <div className="pt-2">
              <button
                onClick={calculate}
                disabled={loading}
                className="w-full bg-[#1c1c1c] border border-gray-600 hover:bg-white hover:text-black text-white py-3.5 rounded-xl font-semibold text-base transition-all duration-300 shadow-md disabled:opacity-50"
              >
                {loading ? "Calculating..." : "Calculate"}
              </button>
            </div>
          </div>

          {/* RIGHT CHART & RESULTS */}
          <div className="flex flex-col items-center justify-center">
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={95}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) =>
                  `₹ ${Number(value).toLocaleString("en-IN")}`
                }
              />
            </PieChart>



            <div className="grid grid-cols-2 gap-6 mt-6 w-full text-center md:text-left">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-[Quicksand]">Amount Invested</p>
                <h3 className="text-white text-lg font-bold mt-1 font-[Quicksand]">
                  ₹ {Math.round(invested).toLocaleString("en-IN")}
                </h3>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-[Quicksand]">Total Returns</p>
                <h3 className="text-white text-lg font-bold mt-1 font-[Quicksand]">
                  ₹ {Math.round(growth).toLocaleString("en-IN")}
                </h3>
              </div>
            </div>

            <div className="w-full mt-5 pt-4 border-t border-gray-800 flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-[Quicksand]">Required Monthly SIP</p>
                <h3 className="text-emerald-400 text-xl font-bold mt-0.5 font-[Quicksand]">
                  ₹ {Math.round(sipAmount).toLocaleString("en-IN")}
                </h3>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs uppercase tracking-wider font-[Quicksand]">Target Wealth</p>
                <h3 className="text-white text-xl font-bold mt-0.5 font-[Quicksand]">
                  ₹ {Math.round(futureValue).toLocaleString("en-IN")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slider {
          -webkit-appearance: none;
          width: 100%;
          height: 4px;
          border-radius: 20px;
          background: #374151;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}