import axios from "axios";

const API_KEY = "2d1b8916-a981-48e2-8aef-e0692bef66a7";

const api = axios.create({
  baseURL: "https://mfapi.advisorkhoj.com",
  timeout: 30000,
});

/**
 * 1) SCHEME CATEGORIES
 */
export const getAllSchemeCategories = async () => {
  try {
    const { data } = await api.post("/getAllSchemeCategories", null, {
      params: { key: API_KEY },
    });
    return data;
  } catch (error) {
    console.error("getAllSchemeCategories Error:", error);
    throw error;
  }
};

/**
 * 2) GET ALL SCHEMES BY CATEGORY
 */
export const getMutualFundSchemesByCategory = async (category) => {
  try {
    const { data } = await api.post(
      "/getAllMutualFundSchemesRegAndDirByCategory",
      null,
      {
        params: { key: API_KEY, category },
      }
    );
    return data;
  } catch (error) {
    console.error("getMutualFundSchemesByCategory Error:", error);
    throw error;
  }
};

/**
 * 3) MF TRAILING RETURNS
 */
export const getSchemePerformanceReturnsNew = async ({ category, period = "1y" }) => {
  try {
    const { data } = await api.post("/getSchemePerformanceReturnsNew", null, {
      params: { key: API_KEY, category, period },
    });
    return data;
  } catch (error) {
    console.error("getSchemePerformanceReturnsNew Error:", error);
    throw error;
  }
};

/**
 * 4) SIP WITH ANNUAL INCREASE
 */
export const getSIPReturnWithAnnualIncrease = async ({
  scheme,
  amount,
  frequency = "Monthly",
  start_date,
  end_date,
  enhancement_percentage = 0,
}) => {
  try {
    const { data } = await api.post(
      "/getSIPReturnWithAnnualIncrease",
      null,
      {
        params: {
          key: API_KEY,
          scheme,
          amount,
          frequency,
          start_date,
          end_date,
          enhancement_percentage,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("getSIPReturnWithAnnualIncrease Error:", error);
    throw error;
  }
};

/**
 * 5) BECOME A CROREPATI CALCULATOR
 */
export const getCrorepatiResult = async ({
  current_age,
  retirement_age,
  wealth_amount,
  inflation_rate,
  expected_return,
  savings_amount,
}) => {
  try {
    const { data } = await api.post("/calc/getCrorepatiResult", null, {
      params: {
        key: API_KEY,
        current_age,
        retirement_age,
        wealth_amount,
        inflation_rate,
        expected_return,
        savings_amount,
      },
    });
    return data;
  } catch (error) {
    console.error("getCrorepatiResult Error:", error);
    throw error;
  }
};

/**
 * 6) TARGET AMOUNT SIP CALCULATOR
 */
export const getTargetAmountSIP = async ({
  wealth_amount,
  inflation_rate,
  expected_return,
  period,
}) => {
  try {
    const { data } = await api.post("/calc/getTargetAmountSIPCalcResult", null, {
      params: {
        key: API_KEY,
        wealth_amount,
        inflation_rate,
        expected_return,
        period,
      },
    });
    return data;
  } catch (error) {
    console.error("getTargetAmountSIP Error:", error);
    throw error;
  }
};

/**
 * 7) COMPOSITE FINANCIAL GOAL PLANNER CALCULATOR
 */
export const getCompositeFinancialGoalPlanner = async (params) => {
  try {
    const { data } = await api.post(
      "/calc/getCompositeFinancialGoalPlannerMFTools",
      null,
      {
        params: {
          key: API_KEY,
          ...params,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("getCompositeFinancialGoalPlanner Error:", error);
    throw error;
  }
};

export default api;