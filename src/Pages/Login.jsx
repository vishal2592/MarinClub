import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { 
  FaUser, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaArrowRight, 
  FaCheck,
  FaCrown
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", { mobile, password, rememberMe });
    alert("Login submitted successfully! Check console.");
  };

  return (
    <MainLayout>
      <div className="w-full flex flex-col items-center justify-center pt-6 pb-10 px-4">
        
        <div className="w-full max-w-md relative">
          {/* Background Glowing Blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-pink/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* --- Logo & Slogan --- */}
          <div className="flex flex-col items-center mb-8 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-dark-700 border border-border-glass flex items-center justify-center mb-2 shadow-sm">
              {/* Using your purple/gold brand colors for the logo icon inside */}
              <FaCrown className="text-accent-gold" size={24} />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              Marin Club
            </h2>
            <p className="text-[10px] text-dark-muted uppercase tracking-[0.2em] font-semibold mt-1">
              Secure &bull; Invest &bull; Grow
            </p>
          </div>

          {/* --- Form Card --- */}
          <div className="relative bg-dark-600 border border-border-glass rounded-2xl p-6 shadow-2xl z-10">
            <h2 className="text-base font-bold text-white mb-5 text-center">Login to Your Trading Account</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Mobile Number */}
              <div>
                <label className="text-[11px] text-dark-muted font-medium mb-1.5 block">Mobile Number</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-muted/60">
                    <FaUser size={14} />
                  </div>
                  <input 
                    type="tel" 
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter 10-digit mobile number" 
                    className="w-full bg-dark-800 border border-border-glass rounded-xl py-2.5 pl-9 pr-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
                    required
                  />
                </div>
                <p className="mt-1.5 text-[9px] text-dark-muted">Enter 10-digit mobile number (e.g., 9876543210)</p>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password" 
                    className="w-full bg-dark-800 border border-border-glass rounded-xl py-2.5 pl-9 pr-9 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
                    required
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="peer h-4 w-4 shrink-0 appearance-none rounded border border-border-glass bg-dark-800 checked:bg-accent-purple checked:border-accent-purple transition-all duration-200 cursor-pointer"
                    />
                    <FaCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
                  </div>
                  <label htmlFor="rememberMe" className="text-[11px] text-dark-muted cursor-pointer select-none hover:text-white transition-colors">
                    Remember me
                  </label>
                </div>
                <span className="text-[11px] text-accent-cyan cursor-pointer hover:text-white transition-colors">
                  Forgot Password?
                </span>
              </div>

              {/* Login Button (Uses Purple/Pink Gradient) */}
              <button 
                type="submit"
                className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white font-bold text-sm shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <FaArrowRight className="text-white/70 text-xs" /> LOGIN NOW
              </button>

              {/* Sign Up Link */}
              <div className="text-center mt-2">
                <p className="text-[12px] text-dark-muted">
                  Don't have an account yet? <Link to='/register'> <span className="text-accent-lime font-semibold cursor-pointer hover:text-white transition-colors">Create New Account &rarr;</span></Link>
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

export default Login;