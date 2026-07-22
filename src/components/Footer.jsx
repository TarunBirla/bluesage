import { Link } from "react-router-dom";
import footerBg from "/ftr.png"; // apne path ke hisab se change kar lo
const Footer = () => {
  return (
    <footer className=" text-white ">
      <div
        className="pt-20 pb-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        <div className=" pt-20 pb-20">
          {/* FOOTER LINKS */}
          {/* <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10"> */}
            <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.3fr_1.2fr_1.2fr] gap-14">
            {/* Company */}
            <div>
              <h3 className="font-[Quicksand] font-weight-500 mb-4 text-[24px]">
                Company
              </h3>
              <ul className="space-y-3  text-[16px]">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>Service</li>
                <li>Research</li>
                <li>Partner with us</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="font-[Quicksand] font-weight-500 mb-4 text-[24px]">
                Service
              </h3>
              <ul className="space-y-3  line-height-[40px] text-[16px]">
                 <li>Mutual Fund Investment Solutions</li>
  <li>Tax-Efficient Investment Support</li>
  <li>Retirement Investment Solutions</li>
  <li>Legacy & Succession Support</li>
  <li>Business & Investment Insights</li>
  <li>NRI Investment Solutions</li>
  <li>Family Investment Solutions</li>
  
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-[Quicksand] font-weight-500 mb-4 text-[24px]">
                Latest News
              </h3>
              {/* <ul className="space-y-3 text-[16px]">
                <li>
                  Understanding the Australia DTAA: A Lifesaver for Indian
                  Investors
                </li>
                <li>
                  SIP vs. Lump Sum: Choosing the Right Investment Strategy for
                  Your Goals
                </li>
                <li>
                  Saving Made Easy: Simple and Smart Ways to Save Income Tax in
                  India
                </li>
              </ul> */}
              <ul className="space-y-8">
  <li>
    <h4 className="text-white text-[16px] leading-7">
      Understanding the Australia DTAA: A Lifesaver for Indian Investors
    </h4>

    <p className="text-[#7F7F7F] text-xs mt-2">
      July 31, 2025
    </p>
  </li>

  <li>
    <h4 className="text-white text-[16px] leading-7">
      SIP vs. Lump Sum: Choosing the Right Investment Strategy for Your Goals
    </h4>

    <p className="text-[#7F7F7F] text-xs mt-2">
      July 31, 2025
    </p>
  </li>

  <li>
    <h4 className="text-white text-[16px] leading-7">
      Saving Made Easy: Simple and Smart Ways to Save Income Tax in India
    </h4>

    <p className="text-[#7F7F7F] text-xs mt-2">
      July 31, 2025
    </p>
  </li>
</ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-[Quicksand] font-weight-500 mb-4 text-[24px]">
                <Link to="/">
                  <img
                    src="/Logo.png"
                    alt="logo"
                    className="h-18 -mt-2 -ml-2 w-auto"
                  />
                </Link>
              </h3>
              <ul className="space-y-3  text-[16px] mb-8">
                <li>
                  At Blue Sage Wealth, we bring focus and simplicity to your
                  finances. Every plan is personalized to your needs, lifestyle,
                  and risk appetite. Our focus is on building, protecting, and
                  preserving wealth today and for the future.
                </li>
              </ul>
              <img src="/app.png" alt="logo" className=" mt-2 w-auto" />
            </div>
          </div>
        </div>
      </div>

<div className="bg-[#232323] border-t border-[#2f2f2f] py-3">
  <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">

    {/* Top Line */}
    <p className="text-[12px] md:text-[13px] text-[#9B9B9B] mb-2">
      AMFI Registered Mutual Fund Distributor | ARN-152121 | ARN valid from:
      14 Aug 2018 | Current Validity of ARN: 13 Aug 2027
    </p>

    {/* Bottom Line */}
    <div className="flex flex-wrap justify-center items-center gap-2 text-[15px] md:text-[15px] text-[#9B9B9B]">

      <span>© 2025 Blue Sage Wealth. All Rights Reserved.</span>

      <span>|</span>
      <a href="#" className="hover:text-white transition">Disclaimer</a>

      <span>|</span>
      <a href="#" className="hover:text-white transition">Disclosure</a>

      <span>|</span>
      <a href="#" className="hover:text-white transition">Privacy Policy</a>

      <span>|</span>
      <a href="#" className="hover:text-white transition">SID/SAI/KIM</a>

      <span>|</span>
      <a href="#" className="hover:text-white transition">Code of Conduct</a>

      <span>|</span>
      <a href="#" className="hover:text-white transition">AMFI Risk Factors</a>

      <span>|</span>
      <a href="#" className="hover:text-white transition">SEBI Circulars</a>

    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;
