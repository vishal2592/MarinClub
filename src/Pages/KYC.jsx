import React, { useState, useRef } from 'react';
import MainLayout from '../Layout/MainLayout';
import { 
  FaUser, 
  FaChevronDown, 
  FaCamera, 
  FaIdCard, 
  FaArrowRight, 
  FaShieldHalved,
  FaCircleCheck,
  FaSpinner
} from 'react-icons/fa6';

const KYC = () => {
  // --- State for all form data ---
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    state: '',
  });

  const [selfieFile, setSelfieFile] = useState(null);
  const [idFile, setIdFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // --- Refs for hidden file inputs ---
  const selfieInputRef = useRef(null);
  const idInputRef = useRef(null);

  // --- Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e, setFile) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const triggerFileInput = (ref) => {
    ref.current?.click();
  };

  const handleClear = () => {
    setFormData({ fullName: '', dob: '', state: '' });
    setSelfieFile(null);
    setIdFile(null);
    if (selfieInputRef.current) selfieInputRef.current.value = '';
    if (idInputRef.current) idInputRef.current.value = '';
  };

  // --- BACKEND SUBMIT HANDLER ---
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page refresh

    // 1. Basic Validation
    if (!formData.fullName || !formData.dob || !formData.state || !selfieFile || !idFile) {
      alert("Please fill all fields and upload both documents.");
      return;
    }

    setIsLoading(true);

    try {
      // 2. Prepare FormData for Backend (Supports both text and files)
      const formPayload = new FormData();
      formPayload.append('fullName', formData.fullName);
      formPayload.append('dob', formData.dob);
      formPayload.append('state', formData.state);
      formPayload.append('selfie', selfieFile);
      formPayload.append('idCard', idFile);

      // 3. Send data to your Backend API
      // CHANGE 'http://your-backend-api.com/api/kyc' to your actual backend URL
      const response = await fetch('http://your-backend-api.com/api/kyc', {
        method: 'POST',
        body: formPayload, // Do NOT set 'Content-Type': 'application/json' here, FormData sets it automatically
      });

      if (response.ok) {
        const result = await response.json();
        alert("✅ KYC submitted successfully!");
        handleClear(); // Clear form on success
      } else {
        const errorData = await response.json();
        alert(`❌ Failed: ${errorData.message || 'Something went wrong'}`);
      }

    } catch (error) {
      console.error("Error submitting KYC:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      {/* --- Form Wrapper --- */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-2">
        
        {/* Main KYC Card */}
        <div className="bg-dark-600 border border-border-glass rounded-2xl p-2 overflow-hidden relative">
          
          {/* Current Status Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[10px] text-dark-muted font-medium tracking-wide uppercase">Current Status</span>
            </div>
            <span className="bg-dark-700 border border-border-glass text-white text-[10px] font-semibold px-4 py-1.5 rounded-full">
              Not Submitted
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="mt-6 mb-4">
            <h1 className="text-2xl font-bold tracking-tight">Complete verification</h1>
            <p className="text-dark-muted text-sm mt-1">to withdraw funds</p>
          </div>

          {/* Warning/Required Note */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-accent-gold/10 border-l-4 border-accent-gold mb-6">
            <p className="text-[11px] text-accent-gold/90 leading-relaxed">
              Please provide the details below. All fields are required.
            </p>
          </div>

          {/* --- Personal Details --- */}
          <div className="mt-4 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-4 bg-accent-cyan rounded-full"></span>
              <h3 className="text-sm font-semibold text-white">Personal Details</h3>
            </div>

            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-[11px] text-dark-muted mb-1.5 font-medium">
                Full Name <span className="text-dark-muted/60 font-normal">(as per Government ID)</span>
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-muted/80 text-sm" />
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Rajesh Kumar" 
                  className="w-full bg-dark-800 border border-border-glass rounded-xl py-2.5 pl-9 pr-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label className="block text-[11px] text-dark-muted mb-1.5 font-medium">Date of Birth</label>
              <div className="relative">
                <input 
                  type="date" 
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full bg-dark-800 border border-border-glass rounded-xl py-2.5 px-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-60"
                  required
                />
              </div>
            </div>

            {/* State / UT */}
            <div className="mb-4">
              <label className="block text-[11px] text-dark-muted mb-1.5 font-medium">State / UT</label>
              <div className="relative">
                <select 
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full bg-dark-800 border border-border-glass rounded-xl py-2.5 px-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors appearance-none"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select your State / UT</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-muted/80 text-sm pointer-events-none" />
              </div>
            </div>
          </div>

          {/* --- Documents --- */}
          <div className="mt-4 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-4 bg-accent-cyan rounded-full"></span>
              <h3 className="text-sm font-semibold text-white">Documents</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              
              {/* Selfie Upload */}
              <div 
                onClick={() => triggerFileInput(selfieInputRef)}
                className="aspect-square bg-dark-800 border-2 border-dashed border-border-glass rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-accent-purple/50 transition-all duration-300 group"
              >
                <input 
                  type="file" 
                  accept="image/*" 
                  ref={selfieInputRef} 
                  className="hidden" 
                  onChange={(e) => handleFileUpload(e, setSelfieFile)}
                />
                
                <div className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-dark-muted group-hover:bg-accent-purple/20 group-hover:text-white transition-colors">
                  {selfieFile ? <FaCircleCheck className="text-accent-purple" size={16} /> : <FaCamera size={16} />}
                </div>
                <span className="text-[11px] font-medium text-white text-center leading-tight">
                  {selfieFile ? selfieFile.name.slice(0, 12) + '...' : 'Tap to upload'}
                </span>
              </div>

              {/* Gov ID Upload */}
              <div 
                onClick={() => triggerFileInput(idInputRef)}
                className="aspect-square bg-dark-800 border-2 border-dashed border-border-glass rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-accent-purple/50 transition-all duration-300 group"
              >
                <input 
                  type="file" 
                  accept="image/*" 
                  ref={idInputRef} 
                  className="hidden" 
                  onChange={(e) => handleFileUpload(e, setIdFile)}
                />

                <div className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-dark-muted group-hover:bg-accent-purple/20 group-hover:text-white transition-colors">
                  {idFile ? <FaCircleCheck className="text-accent-pink" size={16} /> : <FaIdCard size={16} />}
                </div>
                <span className="text-[11px] font-medium text-white text-center leading-tight">
                  {idFile ? idFile.name.slice(0, 12) + '...' : 'Tap to upload'}
                </span>
              </div>

            </div>

            <div className="flex justify-between text-[10px] text-dark-muted mt-2 px-1">
              <span>Max 3MB (JPG/PNG)</span>
              <span>Front side only (Aadhaar/PAN)</span>
            </div>
          </div>

          {/* --- Action Buttons --- */}
          <div className="flex items-center justify-end gap-4 mt-2 pt-6 border-t border-border-glass">
            <button 
              type="button"
              onClick={handleClear}
              className="px-8 py-3 rounded-xl text-sm font-semibold text-dark-muted bg-dark-700 border border-border-glass hover:bg-dark-600 hover:text-white transition-colors"
            >
              Clear
            </button>
            
            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className={`px-8 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple shadow-lg shadow-accent-purple/30 transition-all duration-300 flex items-center gap-2 ${isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin text-white/80" />
                  Verifying...
                </>
              ) : (
                <>
                  Verify KYC 
                  <FaArrowRight className="text-white/60 text-xs" />
                </>
              )}
            </button>
          </div>

          {/* --- Security Footer --- */}
          <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-border-glass/50">
            <FaShieldHalved className="text-accent-cyan text-xs" />
            <span className="text-[10px] text-dark-muted font-medium">Your data is encrypted &amp; secure</span>
          </div>

        </div>
      </form>
    </MainLayout>
  );
};

export default KYC;