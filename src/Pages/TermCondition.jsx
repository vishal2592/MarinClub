import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { FaArrowRight } from 'react-icons/fa6';

const sections = [
  {
    id: 1,
    title: 'Registration & Acceptance',
    color: 'accent-cyan',
    items: [
      'By registering on the platform, you accept all the terms, conditions, policies, and guidelines set forth herein.',
      'Any amendments, modifications, or changes in the terms must be acknowledged in writing or through electronic acknowledgment by the user. By using the services and/or registering on the platform, you agree to be bound by these Terms & Conditions.',
    ],
  },
  {
    id: 2,
    title: 'Eligibility & Investment Responsibility',
    color: 'accent-gold',
    items: [
      'Users must be at least 18 years of age or older to use the platform.',
      'All investments, reports, and withdrawal requests are the sole responsibility of the user. The platform shall not be held responsible for any investment and/or any financial loss incurred by the user.',
    ],
  },
  {
    id: 3,
    title: 'KYC Verification',
    color: 'accent-purple',
    items: [
      'KYC documents, such as PAN card, Aadhaar card, etc., must be submitted for all users in order to complete the registration process on the platform.',
      'Applicants must be at least 18 years of age or older to meet these KYC requirements, and those who do not meet this requirement will not be able to register.',
      'All new users are required to complete KYC before they can make their first deposit on the platform.',
      'The Company reserves the right to conduct Client Due Diligence (CDD) for high-risk or high-value clients.',
    ],
  },
  {
    id: 4,
    title: 'Referral, Reward & Coupon Funds',
    color: 'accent-lime',
    items: [
      'Any person who introduces friends, relatives, or acquaintances to the site shall be eligible to receive referral rewards, commissions, or bonuses in accordance with the terms and conditions of the platform.',
      'Rewards earned through a referral program, bonuses, or coupons must be used exclusively for investment purposes and not for direct cash withdrawals.',
      'The original referral reward, referral bonus, or coupon amount itself remains in the user\'s wallet and cannot be withdrawn.',
      'Incentives, promotional rewards, referral benefits, coupons, and bonuses are subject to the terms and conditions of the platform, and they are not guaranteed and may be modified at any time.',
    ],
  },
  {
    id: 5,
    title: 'Withdrawal & Withhold',
    color: 'accent-pink',
    items: [
      'Withdrawals are processed within 24 to 72 hours, unless delayed by KYC, account status, or banking hours. Processing times may vary depending on the payment provider and the user\'s bank.',
      'All transactions on the platform are subject to KYC and compliance checks, and they may be withheld if the user\'s account does not meet the Company\'s criteria.',
    ],
  },
  {
    id: 6,
    title: 'Data Privacy & Security',
    color: 'accent-cyan',
    items: [
      'We take data privacy very seriously. Our platform uses strong encryption to protect user data and other important information.',
      'All user data will be used solely for KYC verification purposes and will be shared with third parties only when required to comply with regulations.',
      'The Company reserves the right to conduct Client Due Diligence (CDD) for high-risk or high-value clients.',
    ],
  },
  {
    id: 7,
    title: 'Risk & Liability Disclaimer',
    color: 'accent-gold',
    items: [
      'All investment plans on the platform are subject to market risks. Investments in the financial markets are inherently risky, and it is the sole responsibility of the user to understand and accept these risks before investing.',
      'Marin Club shall not be held liable for any loss, damage, or financial liability incurred by the user as a result of any investment transaction on the platform.',
      'The platform is not liable for the user\'s failure to comply with any applicable laws, rules, or regulations.',
    ],
  },
  {
    id: 8,
    title: 'Amendments to These Terms',
    color: 'accent-purple',
    items: [
      'Marin Club may update these Terms & Conditions from time to time.',
      'Any updates to these Terms & Conditions will be effective immediately upon being published on the platform.',
      'Users are bound by the updated Terms & Conditions if they continue to use the platform after the publication of the changes.',
    ],
  },
];

const TermCondition = () => {
  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-6 text-white pt-4 pb-6 px-4">
        
        {/* --- Page Title --- */}
        <div className="mb-2">
          <h1 className="text-2xl font-bold tracking-tight">Terms & Conditions</h1>
          <p className="text-dark-muted text-sm mt-1 leading-relaxed">
            These terms apply to your use of our platform. By signing up, you agree to the following conditions and policies.
          </p>
        </div>

        {/* --- Sections Loop --- */}
        <div className="flex flex-col gap-4">
          {sections.map((section) => {
            // Dynamic color classes based on the config
            const accentColor = `border-${section.color} bg-${section.color}/10 text-${section.color}`;
            const dotColor = `bg-${section.color}`;

            return (
              <div 
                key={section.id} 
                className="bg-dark-600 border border-border-glass rounded-2xl p-5 hover:border-accent-purple/20 transition-colors duration-300"
              >
                {/* Section Header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-1 h-5 rounded-full ${dotColor}`}></span>
                  <h3 className="text-sm font-bold text-white">{section.title}</h3>
                </div>

                {/* Section Content (Bullet Points) */}
                <ul className="flex flex-col gap-2.5 text-[13px] text-dark-muted leading-relaxed list-none pl-0">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-1.5 shrink-0`}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* --- Footer Contact CTA --- */}
        <div className="bg-dark-700 border border-border-glass rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-[13px] text-white font-medium">Have any questions?</p>
            <p className="text-[11px] text-dark-muted">
              Contact our support team for assistance regarding our Terms & Conditions.
            </p>
          </div>
          
          <Link 
            to="/helpcenter"
            className="flex items-center gap-2 bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple px-6 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg shadow-accent-purple/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Support <FaArrowRight size={10} className="text-white/70" />
          </Link>
        </div>

      </div>
    </MainLayout>
  );
};

export default TermCondition;