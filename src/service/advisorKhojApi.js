import axios from "axios";

const API_KEY = "2d1b8916-a981-48e2-8aef-e0692bef66a7";

const api = axios.create({
  baseURL: "https://mfapi.advisorkhoj.com",
  timeout: 30000,
});

/**
 * ===========================================
 * SIP WITH ANNUAL INCREASE
 * ===========================================
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
    console.error("SIP API Error :", error);
    throw error;
  }
};

/**
 * ===========================================
 * TARGET AMOUNT SIP CALCULATOR
 * ===========================================
 */
export const getTargetAmountSIP = async ({
  wealth_amount,
  inflation_rate,
  expected_return,
  period,
}) => {
  try {
    const { data } = await api.post(
      "/calc/getTargetAmountSIPCalcResult",
      null,
      {
        params: {
          wealth_amount,
          inflation_rate,
          expected_return,
          period,
          key: API_KEY,
        },
      }
    );

    return data;
  } catch (error) {
    console.error("Target SIP API Error :", error);
    throw error;
  }
};

export default api;