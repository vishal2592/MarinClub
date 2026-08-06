import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { 
  FaUser, 
  FaGlobe, 
  FaMobileScreen, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaCheck
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    country: 'India',
    mobile: '',
    password: '',
    referral: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("Please agree to the Terms & Conditions and Privacy Policy");
      return;
    }
    console.log("Registration Data:", formData);
    alert("Registration form submitted successfully! Check console.");
  };

  return (
    <MainLayout>
      <div className="w-full flex flex-col items-center justify-center pt-6 pb-10 px-4">
        
        <div className="w-full max-w-md relative">
          {/* Background Glowing Blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-pink/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Page Title */}
          <h1 className="text-2xl font-bold text-white text-center mb-6">Register Now!</h1>

          {/* Form Card */}
          <div className="relative bg-dark-600 border border-border-glass rounded-2xl p-6 shadow-2xl z-10">
            <h2 className="text-base font-bold text-white mb-5">Create Your Trading Account</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Username */}
              <div>
                <label className="text-[11px] text-dark-muted font-medium mb-1.5 block">Create Username</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-muted/60">
                    <FaUser size={14} />
                  </div>
                  <input 
                    type="text" 
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Choose a username (letters & num)" 
                    className="w-full bg-dark-800 border border-border-glass rounded-xl py-2.5 pl-9 pr-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
                  />
                </div>
                <p className="mt-1.5 text-[9px] text-dark-muted">Only letters (A-z) and numbers (0-9), at least one letter, 3-20 characters</p>
              </div>

              {/* Country */}
              <div>
                <label className="text-[11px] text-dark-muted font-medium mb-1.5 block">Country</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">🇮🇳</span>
                  <input 
                    type="text" 
                    name="country"
                    value={formData.country}
                    readOnly
                    className="w-full bg-dark-800 border border-border-glass rounded-xl py-2.5 pl-9 pr-4 text-sm text-white cursor-default focus:outline-none"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="text-[11px] text-dark-muted font-medium mb-1.5 block">Mobile Number</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-muted/60">
                    <FaMobileScreen size={14} />
                  </div>
                  <input 
                    type="tel" 
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number" 
                    className="w-full bg-dark-800 border border-border-glass rounded-xl py-2.5 pl-9 pr-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
                  />
                </div>
                <p className="mt-1.5 text-[9px] text-dark-muted">Enter 10-digit mobile number (e.g., 9802333456)</p>
              </div>

              {/* Password */}
              <div>
                <label className="text-[11px] text-dark-muted font-medium mb-1.5 block">Password</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-muted/60">
                    <FaLock size={14} />
                  </div>
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password" 
                    className="w-full bg-dark-800 border border-border-glass rounded-xl py-2.5 pl-9 pr-9 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-muted/60 hover:text-white transition-colors"
                  >
                    {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                  </button>
                </div>
              </div>

              {/* Referral Code */}
              <div>
                <label className="text-[11px] text-dark-muted font-medium mb-1.5 block">Referral Code (Optional)</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-muted/60">
                    <FaGlobe size={14} />
                  </div>
                  <input 
                    type="text" 
                    name="referral"
                    value={formData.referral}
                    onChange={handleChange}
                    placeholder="Enter referral code (optional)" 
                    className="w-full bg-dark-800 border border-border-glass rounded-xl py-2.5 pl-9 pr-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2.5 mt-2">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    id="agree"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                    className="peer h-4 w-4 shrink-0 appearance-none rounded border border-border-glass bg-dark-800 checked:bg-accent-purple checked:border-accent-purple transition-all duration-200 cursor-pointer"
                  />
                  <FaCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
                </div>
                <label htmlFor="agree" className="text-[11px] text-dark-muted leading-tight cursor-pointer select-none">
                  I agree to the <span className="text-accent-cyan hover:text-white transition-colors">Terms &amp; Conditions</span> and <span className="text-accent-cyan hover:text-white transition-colors">Privacy Policy</span>
                </label>
              </div>

              {/* Submit Button (Uses Purple/Pink Gradient) */}
              <button 
                type="submit"
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white font-bold text-sm shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <FaCheck size={14} className="text-white/80" /> CREATE ACCOUNT
              </button>

              {/* Sign In Link */}
              <div className="text-center mt-2">
                <p className="text-[12px] text-dark-muted">
                  Already registered? <Link to='/login'><span className="text-white font-medium cursor-pointer hover:text-accent-purple transition-colors">Sign In &rarr;</span></Link>
                </p>
              </div>

            </form>
          </div>

          {/* Bottom Secure Text */}
          <div className="text-center mt-6">
            <p className="text-[9px] text-dark-muted/60 tracking-widest font-medium">
              SECURE &bull; ENCRYPTED &bull; PRIVATE
            </p>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Register;