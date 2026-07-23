import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {
  ChevronDown,
  Search,
  Loader2,
  AlertCircle,
  TrendingUp,
  Calculator,
  Award,
  Target
} from "lucide-react";
import {
  getAllSchemeCategories,
  getMutualFundSchemesByCategory,
  getSchemePerformanceReturnsNew,
  getCrorepatiResult,
  getTargetAmountSIP,
  getCompositeFinancialGoalPlanner
} from "../service/advisorKhojApi";

export default function Calculators() {
  const { type } = useParams();
  const [activeTab, setActiveTab] = useState(type || "sip-annual");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const tabs = [
    {
      id: "sip-annual",
      title: "SIP with Annual Increase",
      subtitle: "Step-up SIP Calculator",
      icon: Calculator
    },
    {
      id: "crorepati",
      title: "Become A Crorepati",
      subtitle: "Retirement & Wealth Goal",
      icon: Award
    },
    {
      id: "target-amount",
      title: "Target Amount Calculator",
      subtitle: "Goal Wealth Calculator",
      icon: TrendingUp
    },
    {
      id: "composite-goal",
      title: "Composite Goal Planner",
      subtitle: "Multi-Goal Portfolio Plan",
      icon: Target
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, "", `/calculators/${tabId}`);
  };

  return (
    <>
      <Header />
      <div className="bg-black min-h-screen text-white font-[Quicksand]">
        {/* HERO BANNER */}
        <section className="relative w-full h-[32vh] sm:h-[40vh] md:h-[45vh] overflow-hidden flex items-center justify-center">
          <img
            src="/partner.png"
            alt="partner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-12">
            <h1
              className="text-center font-bold font-[Quicksand]
              text-[36px] sm:text-[50px] md:text-[68px] leading-tight tracking-[-0.02em]
              bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent"
            >
              Wealth Calculators
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-[Quicksand] mt-2 max-w-2xl">
              Estimate and track your financial goals using our easy-to-use wealth calculators.
            </p>
          </div>
        </section>

        {/* MAIN SIDEBAR + CALCULATOR PANEL CONTAINER */}
        <section className="py-10 md:py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* MOBILE HORIZONTAL SCROLLABLE TABS */}
            <div className="flex md:hidden overflow-x-auto gap-2.5 pb-4 mb-8 border-b border-gray-800 scrollbar-none">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`shrink-0 px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-200 ${
                      isActive
                        ? "bg-white text-black shadow-lg"
                        : "bg-[#141414] text-gray-400 border border-[#262626] hover:bg-[#202020]"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{tab.title}</span>
                  </button>
                );
              })}
            </div>

            {/* DESKTOP LAYOUT (SIDEBAR LEFT + CONTENT RIGHT) */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-start">
              
              {/* LEFT SIDEBAR TABS */}
              <div className="hidden md:block w-72 lg:w-80 shrink-0 space-y-3 sticky top-28">
                <h3 className="text-xs uppercase tracking-wider font-bold text-gray-500 px-3 mb-2">
                  Select Calculator
                </h3>
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-200 flex items-center gap-4 cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-xl scale-[1.02]"
                          : "bg-[#121212] text-gray-300 border border-[#242424] hover:bg-[#1a1a1a] hover:text-white"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? "bg-black text-white"
                            : "bg-[#1a1a1a] border border-gray-700 text-gray-300"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-base leading-snug">{tab.title}</div>
                        <div
                          className={`text-xs mt-0.5 ${
                            isActive ? "text-gray-700" : "text-gray-500"
                          }`}
                        >
                          {tab.subtitle}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* RIGHT MAIN PANEL CALCULATOR DISPLAY WITH FADE ANIMATION */}
              <div className="flex-1 w-full min-w-0 transition-opacity duration-300">
                {activeTab === "sip-annual" && (
                  <TargetAmountSIPCalculator title="SIP with Annual Increase" />
                )}
                {activeTab === "crorepati" && <CrorepatiCalculator />}
                {activeTab === "target-amount" && (
                  <TargetAmountSIPCalculator title="Target Amount Calculator" />
                )}
                {activeTab === "composite-goal" && <CompositeGoalCalculator />}
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────────
   1) CROREPATI CALCULATOR
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
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-2 font-[Quicksand]">
          Become A Crorepati Calculator
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-[Quicksand]">
          Simulate the target savings &amp; monthly SIP needed to build your wealth target over time.
        </p>
      </div>

      <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 sm:p-10 mb-8 shadow-2xl">
        <div className="space-y-6">
          <InputRow
            label="How many Crores (at current value) you would need to consider yourself wealthy (₹)"
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
            label="Expected return rate on SIP investment (% per annum)"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
          />
          <InputRow
            label="How much savings you have now (₹)"
            value={savingsAmount}
            onChange={(e) => setSavingsAmount(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-950/40 border border-red-800 rounded-xl text-red-400 text-base flex items-center gap-3">
          <AlertCircle size={20} /> {error}
        </div>
      )}

      {/* Output Display Card */}
      <div className="bg-[#121212] border border-gray-800 rounded-3xl p-6 sm:p-8 mb-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-white text-2xl sm:text-3xl font-bold font-[Quicksand]">Calculation Result</span>
        <div className="bg-[#1c1c1c] border border-gray-700 rounded-2xl p-6 w-full md:w-auto text-left min-w-[340px]">
          {loading ? (
            <div className="flex items-center gap-3 text-gray-400 py-3 text-base">
              <Loader2 size={22} className="animate-spin text-white" /> Calculating via AdvisorKhoj API...
            </div>
          ) : apiResult ? (
            <div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Required Monthly SIP</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
                ₹ {Number(apiResult.monthly_savings || apiResult.sip_amount || 0).toLocaleString("en-IN")}
              </div>
              <div className="text-sm sm:text-base text-gray-300 mt-3 space-y-1 border-t border-gray-700/80 pt-3">
                <div>Target Inflated Wealth: <span className="font-bold text-white">₹ {Number(apiResult.target_wealth || 0).toLocaleString("en-IN")}</span></div>
                {apiResult.invested_amount && (
                  <div>Total Invested Amount: <span className="font-bold text-white">₹ {Number(apiResult.invested_amount).toLocaleString("en-IN")}</span></div>
                )}
                {apiResult.total_earnings && (
                  <div>Total Earnings: <span className="font-bold text-white">₹ {Number(apiResult.total_earnings).toLocaleString("en-IN")}</span></div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-gray-400 text-base">Click Calculate to run simulation</div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={calculateCrorepati}
          disabled={loading}
          className="bg-white text-black hover:bg-gray-200 px-12 py-4 rounded-xl font-bold text-lg md:text-xl transition duration-300 shadow-xl disabled:opacity-50"
        >
          {loading ? "Calculating..." : "Calculate Goal"}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   2) MF TRAILING RETURNS
───────────────────────────────────────────── */
export function MFTrailingReturns() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("Hybrid: Aggressive");
  const [period, setPeriod] = useState("1m");
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);
  const [schemesList, setSchemesList] = useState([]);
  const [error, setError] = useState("");

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
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-3 font-[Quicksand]">
          Mutual Fund Trailing Returns
        </h2>
        <p className="text-gray-300 text-base sm:text-lg font-[Quicksand]">
          Explore real-time trailing performance across fund categories powered by AdvisorKhoj.
        </p>
      </div>

      <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl">
        {/* Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
          <div>
            <label className="text-base font-semibold text-gray-200 mb-2 block">Select Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#1c1c1c] border border-gray-700 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-white font-medium"
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
            <label className="text-base font-semibold text-gray-200 mb-2 block">Select Period</label>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full bg-[#1c1c1c] border border-gray-700 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-white font-medium"
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
              className="w-full bg-white text-black hover:bg-gray-200 py-3.5 rounded-xl text-base font-bold transition shadow-lg"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>

        {/* Secondary Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pt-4 border-t border-gray-800 text-sm">
          <div className="text-gray-300 text-base">
            Live Data for <span className="text-white font-bold">{category}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search scheme..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#1c1c1c] border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-base text-white focus:outline-none focus:border-white"
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-950/40 border border-red-800 rounded-xl text-red-400 text-base">
            {error}
          </div>
        )}

        {/* Data Table */}
        <div className="overflow-x-auto border border-gray-800 rounded-2xl min-h-[300px]">
          {loading ? (
            <div className="flex items-center justify-center py-24 text-gray-300 text-lg gap-3">
              <Loader2 size={26} className="animate-spin text-white" /> Fetching Mutual Fund Returns...
            </div>
          ) : (
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-[#1a1a1a] text-gray-300 border-b border-gray-700 uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-4 px-5">Scheme Name</th>
                  <th className="py-4 px-4">Inception Date</th>
                  <th className="py-4 px-4">Category</th>
                  <th className="py-4 px-3 text-right">1M</th>
                  <th className="py-4 px-3 text-right">3M</th>
                  <th className="py-4 px-3 text-right">6M</th>
                  <th className="py-4 px-3 text-right">1Y</th>
                  <th className="py-4 px-3 text-right">3Y</th>
                  <th className="py-4 px-3 text-right">5Y</th>
                  <th className="py-4 px-4 text-right">Inception</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/80 bg-[#0d0d0d]">
                {filteredSchemes.length > 0 ? (
                  filteredSchemes.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#181818] transition">
                      <td className="py-4 px-5 font-semibold text-white max-w-xs truncate" title={row.scheme_amfi}>
                        {row.scheme_amfi}
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        {row.inception_date ? new Date(row.inception_date).toLocaleDateString() : "-"}
                      </td>
                      <td className="py-4 px-4 text-gray-300">{row.scheme_category || category}</td>
                      <td className="py-4 px-3 text-right text-gray-300">{row.returns_abs_1month ? `${row.returns_abs_1month}%` : "-"}</td>
                      <td className="py-4 px-3 text-right text-gray-300">{row.returns_abs_3month ? `${row.returns_abs_3month}%` : "-"}</td>
                      <td className="py-4 px-3 text-right text-gray-300">{row.returns_abs_6month ? `${row.returns_abs_6month}%` : "-"}</td>
                      <td className="py-4 px-3 text-right font-bold text-emerald-400">{row.returns_abs_1year ? `${row.returns_abs_1year}%` : "-"}</td>
                      <td className="py-4 px-3 text-right text-gray-300">{row.returns_cmp_3year ? `${row.returns_cmp_3year}%` : "-"}</td>
                      <td className="py-4 px-3 text-right text-gray-300">{row.returns_cmp_5year ? `${row.returns_cmp_5year}%` : "-"}</td>
                      <td className="py-4 px-4 text-right font-bold text-emerald-400">{row.returns_cmp_inception ? `${row.returns_cmp_inception}%` : "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="text-center py-16 text-gray-400 text-base">
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
   3) TARGET AMOUNT SIP CALCULATOR
───────────────────────────────────────────── */
function TargetAmountSIPCalculator({ title = "SIP with Annual Increase" }) {
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
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-2 font-[Quicksand]">
          {title}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-[Quicksand]">
          Calculate periodic SIP growth with step-up annual increases over your investment timeframe.
        </p>
      </div>

      <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 sm:p-10 mb-8 shadow-2xl">
        <div className="space-y-6">
          <InputRow
            label="Target Amount (₹)"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
          />
          <InputRow
            label="Investment Period (in years)"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />
          <InputRow
            label="Expected rate of inflation (% per annum)"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
          />
          <InputRow
            label="Expected return rate on SIP investment (% per annum)"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-950/40 border border-red-800 rounded-xl text-red-400 text-base flex items-center gap-3">
          <AlertCircle size={20} /> {error}
        </div>
      )}

      <div className="bg-[#121212] border border-gray-800 rounded-3xl p-6 sm:p-8 mb-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-white text-2xl sm:text-3xl font-bold font-[Quicksand]">Calculation Result</span>
        <div className="bg-[#1c1c1c] border border-gray-700 rounded-2xl p-6 w-full md:w-auto text-left min-w-[340px]">
          {loading ? (
            <div className="flex items-center gap-3 text-gray-400 py-3 text-base">
              <Loader2 size={22} className="animate-spin text-white" /> Calculating...
            </div>
          ) : apiResult ? (
            <div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Required Monthly SIP</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
                ₹ {Number(apiResult.sip_amount || 0).toLocaleString("en-IN")}
              </div>
              <div className="text-sm sm:text-base text-gray-300 mt-3 space-y-1 border-t border-gray-700/80 pt-3">
                <div>Target Wealth: <span className="font-bold text-white">₹ {Number(apiResult.target_wealth || 0).toLocaleString("en-IN")}</span></div>
                <div>Invested Amount: <span className="font-bold text-white">₹ {Number(apiResult.invested_amount || 0).toLocaleString("en-IN")}</span></div>
                <div>Growth Amount: <span className="font-bold text-white">₹ {Number(apiResult.growth_amount || 0).toLocaleString("en-IN")}</span></div>
              </div>
            </div>
          ) : (
            <div className="text-gray-400 text-base">Click Calculate to see results</div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={calculateTarget}
          disabled={loading}
          className="bg-white text-black hover:bg-gray-200 px-12 py-4 rounded-xl font-bold text-lg md:text-xl transition duration-300 shadow-xl disabled:opacity-50"
        >
          {loading ? "Calculating..." : "Calculate SIP"}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   4) COMPOSITE GOAL PLANNER
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
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent mb-2 font-[Quicksand]">
          Composite Goal Planner
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-[Quicksand]">
          Plan multiple financial goals together seamlessly with our composite planner.
        </p>
      </div>

      <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 sm:p-10 mb-8 shadow-2xl">
        <div className="space-y-6">
          <InputRow
            label="Children Education Goal Amount (₹)"
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
            label="Children Marriage Goal Amount (₹)"
            value={marriageAmount}
            onChange={(e) => setMarriageAmount(e.target.value)}
          />
          <InputRow
            label="Dream Home Goal Amount (₹)"
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
            label="Current Savings to meet goals (₹)"
            value={savingsAmount}
            onChange={(e) => setSavingsAmount(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-950/40 border border-red-800 rounded-xl text-red-400 text-base flex items-center gap-3">
          <AlertCircle size={20} /> {error}
        </div>
      )}

      <div className="bg-[#121212] border border-gray-800 rounded-3xl p-6 sm:p-8 mb-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-white text-xl md:text-2xl font-bold font-[Quicksand]">Calculation Result</span>
        <div className="bg-[#1c1c1c] border border-gray-700 rounded-2xl p-6 w-full md:w-auto text-left min-w-[340px]">
          {loading ? (
            <div className="flex items-center gap-3 text-gray-400 py-3 text-base">
              <Loader2 size={22} className="animate-spin text-white" /> Calculating composite goals...
            </div>
          ) : result ? (
            <div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Total Monthly Savings Needed</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
                ₹ {Number(result.total_monthly_savings || 0).toLocaleString("en-IN")}
              </div>
              <div className="text-sm sm:text-base text-gray-300 mt-3 border-t border-gray-700/80 pt-3">
                Total Inflation Adjusted Value: <span className="font-bold text-white">₹ {Number(result.total_inflation_adjust_value || 0).toLocaleString("en-IN")}</span>
              </div>
            </div>
          ) : (
            <div className="text-gray-400 text-base">Click Calculate to see results</div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={calculateComposite}
          disabled={loading}
          className="bg-white text-black hover:bg-gray-200 px-12 py-4 rounded-xl font-bold text-lg md:text-xl transition duration-300 shadow-xl disabled:opacity-50"
        >
          {loading ? "Calculating..." : "Calculate Composite Goals"}
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
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-sm md:text-base border-b border-gray-800/90 pb-3.5 last:border-b-0 last:pb-0 font-[Quicksand]">
      <label className="text-gray-300 font-medium flex-1 pr-4 leading-relaxed">{label}</label>
      <div className="w-full md:w-64">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full bg-black border border-gray-700 focus:border-white rounded-xl px-3.5 py-2.5 text-right text-white font-semibold text-sm md:text-base outline-none transition"
        />
      </div>
    </div>
  );
}
