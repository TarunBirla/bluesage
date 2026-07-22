import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {
  ChevronDown,
  ArrowLeft,
  Search,
  Download,
  Loader2,
  AlertCircle
} from "lucide-react";
import {
  getAllSchemeCategories,
  getMutualFundSchemesByCategory,
  getSchemePerformanceReturnsNew,
  getSIPReturnWithAnnualIncrease,
  getCrorepatiResult,
  getTargetAmountSIP,
  getCompositeFinancialGoalPlanner
} from "../service/advisorKhojApi";

export default function Calculators() {
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [type]);

  return (
    <>
      <Header />
      <div className="bg-black min-h-screen text-white font-[Quicksand]">
        {!type ? (
          <CalculatorsLanding navigate={navigate} />
        ) : (
          <CalculatorDetail type={type} navigate={navigate} />
        )}
      </div>
      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────────
   1. LANDING PAGE GRID VIEW
───────────────────────────────────────────── */
function CalculatorsLanding({ navigate }) {
  const calculatorCards = [
    {
      id: "scheme-categories",
      title: "Scheme Categories",
      icon: (
        <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h4" />
        </svg>
      )
    },
    {
      id: "mf-trailing",
      title: "MF Trailing Returns",
      icon: (
        <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      )
    },
    {
      id: "sip-annual",
      title: "SIP with Annual Increase",
      icon: (
        <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a8.38 8.38 0 0113 0" />
          <path d="M18 11l3-3m0 0l-3-3m3 3h-6" />
        </svg>
      )
    },
    {
      id: "crorepati",
      title: "Become A Crorepati Calculator",
      icon: (
        <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: "composite-goal",
      title: "Composite Financial Goal Planner Calculator",
      icon: (
        <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <section className="relative w-full h-[65vh] md:h-[75vh] overflow-hidden flex items-center justify-center">
        <img
          src="/partner.png"
          alt="Calculators Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

        <div className="relative z-10 text-center px-6 pt-16">
          <h1 className="text-[44px] sm:text-[60px] md:text-[80px] font-bold tracking-[-0.03em] bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-6">
            Calculators
          </h1>

          <div className="relative inline-block mt-2">
            <select
              className="appearance-none px-8 py-3 pr-12 rounded-full border border-gray-400 text-white bg-[#252525] text-center outline-none cursor-pointer hover:bg-white hover:text-black transition duration-300 font-medium"
            >
              <option className="text-black">Book a free call</option>
              <option className="text-black">Investment Planning</option>
              <option className="text-black">Portfolio Review</option>
              <option className="text-black">Financial Consultation</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none">
              <ChevronDown size={18} />
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {calculatorCards.map((card) => (
              <div
                key={card.id}
                onClick={() => navigate(`/calculators/${card.id}`)}
                className="bg-[#0c0c0c] border border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.08)] hover:scale-[1.03] transition-all duration-300 min-h-[240px] group"
              >
                <div className="mb-6 p-4 rounded-2xl bg-[#141414] group-hover:bg-[#1f1f1f] transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-white text-lg md:text-xl font-semibold leading-snug">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   2. CALCULATOR DETAIL ROUTER & VIEWS
───────────────────────────────────────────── */
function CalculatorDetail({ type, navigate }) {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <button
            onClick={() => navigate("/calculators")}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition duration-200 text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Calculators
          </button>
        </div>

        {type === "crorepati" && <CrorepatiCalculator />}
        {type === "mf-trailing" && <MFTrailingReturns />}
        {type === "sip-annual" && <TargetAmountSIPCalculator title="SIP with Annual Increase" />}
        {type === "scheme-categories" && <SchemeCategoriesCalculator />}
        {type === "composite-goal" && <CompositeGoalCalculator />}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5) CROREPATI CALCULATOR (INTEGRATED WITH API)
───────────────────────────────────────────── */
function CrorepatiCalculator() {
  const [wealthAmount, setWealthAmount] = useState("50000000");
  const [currentAge, setCurrentAge] = useState("25");
  const [retirementAge, setRetirementAge] = useState("75");
  const [inflationRate, setInflationRate] = useState("5");
  const [expectedReturn, setExpectedReturn] = useState("12.5");
  const [savingsAmount, setSavingsAmount] = useState("500000");

  const [loading, setLoading] = useState(false);
  const [apiResult, setApiResult] = useState(null);
  const [error, setError] = useState("");

  const calculateCrorepati = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getCrorepatiResult({
        current_age: currentAge,
        retirement_age: retirementAge,
        wealth_amount: wealthAmount,
        inflation_rate: inflationRate,
        expected_return: expectedReturn,
        savings_amount: savingsAmount
      });

      setApiResult(data);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch calculation result from API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    calculateCrorepati();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-4">
          Become A Crorepati Calculator
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Wish to invest periodically? Calculate the amount of wealth that you can generate using our SIP Calculator.
        </p>
      </div>

      <div className="bg-[#080808] border border-gray-800 rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl">
        <div className="space-y-6">
          <InputRow
            label="How many Crores (at current value) you would need to consider yourself wealthy (Rs)"
            value={wealthAmount}
            onChange={(e) => setWealthAmount(e.target.value)}
          />
          <InputRow
            label="Your current age (in years)"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
          />
          <InputRow
            label="The age when you want to become a Crorepati (in years)"
            value={retirementAge}
            onChange={(e) => setRetirementAge(e.target.value)}
          />
          <InputRow
            label="The expected rate of inflation over the years (% per annum)"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
          />
          <InputRow
            label="What rate of return would you expect your SIP investment to generate (% per annum)"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
          />
          <InputRow
            label="How much savings you have now (Rs)"
            value={savingsAmount}
            onChange={(e) => setSavingsAmount(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-950/40 border border-red-800 rounded-xl text-red-400 text-sm flex items-center gap-3">
          <AlertCircle size={18} /> {error}
        </div>
      )}

      {/* Calculation Output Section */}
      <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 mb-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-white text-xl md:text-2xl font-bold">Calculation</span>
        <div className="bg-[#141414] border border-gray-700 rounded-xl px-6 py-4 w-full md:w-auto text-left min-w-[320px]">
          {loading ? (
            <div className="flex items-center gap-3 text-gray-400 py-2">
              <Loader2 size={18} className="animate-spin text-white" /> Calculating via AdvisorKhoj API...
            </div>
          ) : apiResult ? (
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Required Monthly SIP</div>
              <div className="text-2xl font-bold text-emerald-400">
                ₹ {Number(apiResult.monthly_savings || apiResult.sip_amount || 0).toLocaleString("en-IN")}
              </div>
              <div className="text-xs text-gray-400 mt-2 space-y-0.5">
                <div>Target Inflated Wealth: ₹ {Number(apiResult.target_wealth || 0).toLocaleString("en-IN")}</div>
                {apiResult.invested_amount && (
                  <div>Total Invested Amount: ₹ {Number(apiResult.invested_amount).toLocaleString("en-IN")}</div>
                )}
                {apiResult.total_earnings && (
                  <div>Total Earnings: ₹ {Number(apiResult.total_earnings).toLocaleString("en-IN")}</div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-sm">Click Calculate to run simulation</div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={calculateCrorepati}
          disabled={loading}
          className="bg-[#1a1a1a] border border-gray-600 hover:bg-white hover:text-black text-white px-12 py-3.5 rounded-xl font-semibold text-lg transition duration-300 shadow-lg disabled:opacity-50"
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   3) MF TRAILING RETURNS (INTEGRATED WITH API)
───────────────────────────────────────────── */
function MFTrailingReturns() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("Hybrid: Aggressive");
  const [period, setPeriod] = useState("1m");
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);
  const [schemesList, setSchemesList] = useState([]);
  const [error, setError] = useState("");

  // Load Categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllSchemeCategories();
        if (res && res.list) {
          setCategories(res.list);
          if (res.list.length > 0 && !res.list.includes(category)) {
            setCategory(res.list[0]);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch Returns when Category / Period changes
  const fetchReturns = async () => {
    try {
      setLoading(true);
      setError("");

      const periodCodeMap = {
        "1 Month": "1m",
        "3 Months": "3m",
        "6 Months": "6m",
        "1 Year": "1y",
        "3 Years": "3y",
        "5 Years": "5y",
        "10 Years": "10y",
        "Since Inception": "Since Inception"
      };

      const pCode = periodCodeMap[period] || period.toLowerCase();

      const data = await getSchemePerformanceReturnsNew({
        category,
        period: pCode
      });

      if (data && data.list) {
        setSchemesList(data.list);
      } else {
        setSchemesList([]);
      }
    } catch (err) {
      console.error(err);
      setError("Unable to load performance data from AdvisorKhoj API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReturns();
  }, [category, period]);

  const filteredSchemes = schemesList.filter((s) =>
    (s.scheme_amfi || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-4">
          MF Trailing Returns
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Wish to invest periodically? Calculate the amount of wealth that you can generate using our SIP Calculator.
        </p>
      </div>

      <div className="bg-[#090909] border border-gray-800 rounded-3xl p-6 md:p-8 mb-10 shadow-2xl">
        <h2 className="text-xl md:text-2xl font-bold text-center text-white mb-8 pb-4 border-b border-gray-800">
          Mutual Fund Trailing Returns
        </h2>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Select Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#141414] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gray-600"
            >
              {categories.length > 0 ? (
                categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))
              ) : (
                <option value="Hybrid: Aggressive">Hybrid: Aggressive</option>
              )}
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">Select Period</label>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full bg-[#141414] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gray-600"
            >
              <option value="1m">1 Month</option>
              <option value="3m">3 Months</option>
              <option value="6m">6 Months</option>
              <option value="1y">1 Year</option>
              <option value="3y">3 Years</option>
              <option value="5y">5 Years</option>
              <option value="10y">10 Years</option>
              <option value="Since Inception">Since Inception</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={fetchReturns}
              disabled={loading}
              className="w-full bg-[#1c1c1c] border border-gray-700 hover:bg-white hover:text-black text-white py-2.5 rounded-xl text-sm font-semibold transition"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>

        {/* Secondary Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pt-4 border-t border-gray-800/60 text-xs">
          <div className="text-gray-400">
            Live AdvisorKhoj Data for <span className="text-white font-medium">{category}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-60">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search scheme..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#141414] border border-gray-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-gray-600"
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-950/40 border border-red-800 rounded-xl text-red-400 text-xs">
            {error}
          </div>
        )}

        {/* Data Table */}
        <div className="overflow-x-auto border border-gray-800 rounded-xl min-h-[250px]">
          {loading ? (
            <div className="flex items-center justify-center py-20 text-gray-400 gap-3">
              <Loader2 size={24} className="animate-spin text-white" /> Fetching Mutual Fund Returns...
            </div>
          ) : (
            <table className="w-full text-left text-xs">
              <thead className="bg-[#121212] text-gray-400 border-b border-gray-800 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-3 px-4">Scheme Name</th>
                  <th className="py-3 px-3">Inception Date</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-2 text-right">1M</th>
                  <th className="py-3 px-2 text-right">3M</th>
                  <th className="py-3 px-2 text-right">6M</th>
                  <th className="py-3 px-2 text-right">1Y</th>
                  <th className="py-3 px-2 text-right">3Y</th>
                  <th className="py-3 px-2 text-right">5Y</th>
                  <th className="py-3 px-3 text-right">Inception</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60 bg-[#0a0a0a]">
                {filteredSchemes.length > 0 ? (
                  filteredSchemes.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#141414] transition">
                      <td className="py-3 px-4 font-medium text-white max-w-xs truncate" title={row.scheme_amfi}>
                        {row.scheme_amfi}
                      </td>
                      <td className="py-3 px-3 text-gray-400">
                        {row.inception_date ? new Date(row.inception_date).toLocaleDateString() : "-"}
                      </td>
                      <td className="py-3 px-3 text-gray-400">{row.scheme_category || category}</td>
                      <td className="py-3 px-2 text-right text-gray-300">{row.returns_abs_1month ? `${row.returns_abs_1month}%` : "-"}</td>
                      <td className="py-3 px-2 text-right text-gray-300">{row.returns_abs_3month ? `${row.returns_abs_3month}%` : "-"}</td>
                      <td className="py-3 px-2 text-right text-gray-300">{row.returns_abs_6month ? `${row.returns_abs_6month}%` : "-"}</td>
                      <td className="py-3 px-2 text-right font-medium text-emerald-400">{row.returns_abs_1year ? `${row.returns_abs_1year}%` : "-"}</td>
                      <td className="py-3 px-2 text-right text-gray-300">{row.returns_cmp_3year ? `${row.returns_cmp_3year}%` : "-"}</td>
                      <td className="py-3 px-2 text-right text-gray-300">{row.returns_cmp_5year ? `${row.returns_cmp_5year}%` : "-"}</td>
                      <td className="py-3 px-3 text-right font-medium text-emerald-400">{row.returns_cmp_inception ? `${row.returns_cmp_inception}%` : "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="text-center py-12 text-gray-500">
                      No schemes found for the selected category.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   6) TARGET AMOUNT SIP CALCULATOR (INTEGRATED WITH API)
───────────────────────────────────────────── */
function TargetAmountSIPCalculator({ title = "Target Amount SIP Calculator" }) {
  const [targetAmount, setTargetAmount] = useState("2500000");
  const [period, setPeriod] = useState("30");
  const [inflationRate, setInflationRate] = useState("5");
  const [expectedReturn, setExpectedReturn] = useState("12");

  const [loading, setLoading] = useState(false);
  const [apiResult, setApiResult] = useState(null);
  const [error, setError] = useState("");

  const calculateTarget = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getTargetAmountSIP({
        wealth_amount: targetAmount,
        inflation_rate: inflationRate,
        expected_return: expectedReturn,
        period: period
      });

      setApiResult(data);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch target SIP result from API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    calculateTarget();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-4">
          {title}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Wish to invest periodically? Calculate the amount of wealth that you can generate using our SIP Calculator.
        </p>
      </div>

      <div className="bg-[#080808] border border-gray-800 rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl">
        <div className="space-y-6">
          <InputRow
            label="Target Amount (Rs)"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
          />
          <InputRow
            label="Investment Period (in years)"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />
          <InputRow
            label="The expected rate of inflation over the years (% per annum)"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
          />
          <InputRow
            label="What rate of return would you expect your SIP investment to generate (% per annum)"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-950/40 border border-red-800 rounded-xl text-red-400 text-sm flex items-center gap-3">
          <AlertCircle size={18} /> {error}
        </div>
      )}

      <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 mb-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-white text-xl md:text-2xl font-bold">Calculation</span>
        <div className="bg-[#141414] border border-gray-700 rounded-xl px-6 py-4 w-full md:w-auto text-left min-w-[300px]">
          {loading ? (
            <div className="flex items-center gap-3 text-gray-400 py-2">
              <Loader2 size={18} className="animate-spin text-white" /> Calculating...
            </div>
          ) : apiResult ? (
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Required Monthly SIP</div>
              <div className="text-2xl font-bold text-emerald-400">
                ₹ {Number(apiResult.sip_amount || 0).toLocaleString("en-IN")}
              </div>
              <div className="text-xs text-gray-400 mt-2 space-y-0.5">
                <div>Target Wealth: ₹ {Number(apiResult.target_wealth || 0).toLocaleString("en-IN")}</div>
                <div>Invested Amount: ₹ {Number(apiResult.invested_amount || 0).toLocaleString("en-IN")}</div>
                <div>Growth Amount: ₹ {Number(apiResult.growth_amount || 0).toLocaleString("en-IN")}</div>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-sm">Click Calculate to see results</div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={calculateTarget}
          disabled={loading}
          className="bg-[#1a1a1a] border border-gray-600 hover:bg-white hover:text-black text-white px-12 py-3.5 rounded-xl font-semibold text-lg transition duration-300 shadow-lg disabled:opacity-50"
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   1 & 2) SCHEME CATEGORIES & SCHEMES BY CATEGORY (INTEGRATED WITH API)
───────────────────────────────────────────── */
function SchemeCategoriesCalculator() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [schemes, setSchemes] = useState([]);
  const [loadingCats, setLoadingCats] = useState(false);
  const [loadingSchemes, setLoadingSchemes] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoadingCats(true);
        const data = await getAllSchemeCategories();
        if (data && data.list) {
          setCategories(data.list);
          if (data.list.length > 0) {
            setSelectedCategory(data.list[0]);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingCats(false);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;
    const fetchSchemes = async () => {
      try {
        setLoadingSchemes(true);
        const data = await getMutualFundSchemesByCategory(selectedCategory);
        if (data && data.scheme_list) {
          setSchemes(data.scheme_list);
        } else {
          setSchemes([]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingSchemes(false);
      }
    };
    fetchSchemes();
  }, [selectedCategory]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-4">
          Scheme Categories
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Explore mutual fund scheme categories and active funds powered by AdvisorKhoj API.
        </p>
      </div>

      <div className="mb-8">
        <label className="text-sm text-gray-400 mb-2 block">Select Scheme Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full bg-[#111] border border-gray-800 rounded-xl px-5 py-3 text-white text-base outline-none focus:border-gray-600"
        >
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-[#090909] border border-gray-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-800 flex items-center justify-between">
          <span>Schemes in {selectedCategory}</span>
          <span className="text-xs font-normal text-gray-400">{schemes.length} Schemes</span>
        </h3>

        {loadingSchemes ? (
          <div className="flex items-center justify-center py-16 text-gray-400 gap-3">
            <Loader2 size={22} className="animate-spin text-white" /> Loading schemes...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {schemes.slice(0, 12).map((s, idx) => (
              <div key={idx} className="bg-[#121212] border border-gray-800/80 rounded-xl p-4 hover:border-gray-700 transition">
                <div className="text-white font-medium text-sm mb-1">{s.scheme_amfi}</div>
                <div className="text-xs text-gray-400">{s.scheme_company}</div>
                <div className="text-[11px] text-gray-500 mt-2 flex items-center justify-between">
                  <span>AMFI Code: {s.scheme_amfi_code}</span>
                  <span>ISIN: {s.scheme_isin}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   7) COMPOSITE GOAL PLANNER (INTEGRATED WITH API)
───────────────────────────────────────────── */
function CompositeGoalCalculator() {
  const [eduAmount, setEduAmount] = useState("2500000");
  const [childCurrentAge, setChildCurrentAge] = useState("5");
  const [childEduAge, setChildEduAge] = useState("25");
  const [eduRateReturn, setEduRateReturn] = useState("12.5");

  const [marriageAmount, setMarriageAmount] = useState("500000");
  const [marriageAge, setMarriageAge] = useState("25");

  const [homeAmount, setHomeAmount] = useState("500000");
  const [homeYears, setHomeYears] = useState("20");

  const [currentAge, setCurrentAge] = useState("25");
  const [inflationRate, setInflationRate] = useState("7.5");
  const [savingsAmount, setSavingsAmount] = useState("5000000");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateComposite = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getCompositeFinancialGoalPlanner({
        education_amount: eduAmount,
        child_current_age: childCurrentAge,
        child_education_age: childEduAge,
        edu_rateOfReturn: eduRateReturn,
        child_marriage_amount: marriageAmount,
        child_marriage_current_age: childCurrentAge,
        child_marriage_age: marriageAge,
        child_marriage_expected_return: "12.5",
        dream_home_amount: homeAmount,
        dream_home_years: homeYears,
        dream_home_expected_return: "12.5",
        expense_amount: "1500000",
        expense_year: "30",
        dream_rateOfReturn: "12.5",
        retire_amount: "50000000",
        retire_year: "50",
        retirement_rateOfReturn: "12.5",
        wealth_amount: "50000000",
        wealth_age: "60",
        wealth_rateOfReturn: "12.5",
        current_age: currentAge,
        inflation_rate: inflationRate,
        savings_amount: savingsAmount
      });

      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Unable to calculate composite goals.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    calculateComposite();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-4">
          Composite Goal Planner
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Plan multiple financial goals together seamlessly with our composite planner.
        </p>
      </div>

      <div className="bg-[#080808] border border-gray-800 rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl">
        <div className="space-y-6">
          <InputRow
            label="Children Education Goal Amount (Rs)"
            value={eduAmount}
            onChange={(e) => setEduAmount(e.target.value)}
          />
          <InputRow
            label="Child Current Age"
            value={childCurrentAge}
            onChange={(e) => setChildCurrentAge(e.target.value)}
          />
          <InputRow
            label="Education Target Age"
            value={childEduAge}
            onChange={(e) => setChildEduAge(e.target.value)}
          />
          <InputRow
            label="Children Marriage Goal Amount (Rs)"
            value={marriageAmount}
            onChange={(e) => setMarriageAmount(e.target.value)}
          />
          <InputRow
            label="Dream Home Goal Amount (Rs)"
            value={homeAmount}
            onChange={(e) => setHomeAmount(e.target.value)}
          />
          <InputRow
            label="Dream Home Target Years"
            value={homeYears}
            onChange={(e) => setHomeYears(e.target.value)}
          />
          <InputRow
            label="Your Current Age"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
          />
          <InputRow
            label="Inflation Rate (% per annum)"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
          />
          <InputRow
            label="Current Savings to meet goals (Rs)"
            value={savingsAmount}
            onChange={(e) => setSavingsAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 mb-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-white text-xl md:text-2xl font-bold">Calculation</span>
        <div className="bg-[#141414] border border-gray-700 rounded-xl px-6 py-4 w-full md:w-auto text-left min-w-[300px]">
          {loading ? (
            <div className="flex items-center gap-3 text-gray-400 py-2">
              <Loader2 size={18} className="animate-spin text-white" /> Calculating composite goals...
            </div>
          ) : result ? (
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Monthly Savings Needed</div>
              <div className="text-2xl font-bold text-emerald-400">
                ₹ {Number(result.total_monthly_savings || 0).toLocaleString("en-IN")}
              </div>
              <div className="text-xs text-gray-400 mt-2">
                Total Inflation Adjusted Value: ₹ {Number(result.total_inflation_adjust_value || 0).toLocaleString("en-IN")}
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-sm">Click Calculate to see results</div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={calculateComposite}
          disabled={loading}
          className="bg-[#1a1a1a] border border-gray-600 hover:bg-white hover:text-black text-white px-12 py-3.5 rounded-xl font-semibold text-lg transition duration-300 shadow-lg disabled:opacity-50"
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   REUSABLE INPUT ROW COMPONENT
───────────────────────────────────────────── */
function InputRow({ label, value, onChange }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-sm md:text-base border-b border-gray-800/80 pb-4 last:border-b-0 last:pb-0">
      <label className="text-gray-300 font-medium flex-1 pr-4">{label}</label>
      <div className="w-full md:w-64">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full bg-black border border-gray-800 focus:border-gray-500 rounded-xl px-4 py-2.5 text-right text-white font-semibold outline-none transition"
        />
      </div>
    </div>
  );
}
