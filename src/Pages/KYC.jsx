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
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    state: '',
  });

  const [selfieFile, setSelfieFile] = useState(null);
  const [idFile, setIdFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // --- NEW STATE FOR SUCCESS SCREEN ---
  const [isSuccess, setIsSuccess] = useState(false);

  const selfieInputRef = useRef(null);
  const idInputRef = useRef(null);

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
    setIsSuccess(false); // Go back to form if cleared
    if (selfieInputRef.current) selfieInputRef.current.value = '';
    if (idInputRef.current) idInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.dob || !formData.state || !selfieFile || !idFile) {
      alert("Please fill all fields and upload both documents.");
      return;
    }

    setIsLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append('fullName', formData.fullName);
      formPayload.append('dob', formData.dob);
      formPayload.append('state', formData.state);
      formPayload.append('selfie', selfieFile);
      formPayload.append('idCard', idFile);

      const response = await fetch('http://your-backend-api.com/api/kyc', {
        method: 'POST',
        body: formPayload,
      });

      if (response.ok) {
        // ✅ SUCCESS! Switch to the success screen instead of alert()
        setIsSuccess(true);
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
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-2">
        
        {/* ============================================== */}
        {/* --- SCENARIO 1: KYC FORM (NOT SUBMITTED) --- */}
        {/* ============================================== */}
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
            <div className="bg-dark-600 border border-border-glass rounded-2xl p-6 overflow-hidden relative">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-[10px] text-dark-muted font-medium tracking-wide uppercase">Current Status</span>
                </div>
                <span className="bg-dark-700 border border-border-glass text-white text-[10px] font-semibold px-4 py-1.5 rounded-full">
                  Not Submitted
                </span>
              </div>

              <div className="mt-6 mb-4">
                <h1 className="text-2xl font-bold tracking-tight">Complete verification</h1>
                <p className="text-dark-muted text-sm mt-1">to withdraw funds</p>
              </div>

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
                  <div 
                    onClick={() => triggerFileInput(selfieInputRef)}
                    className="relative aspect-square bg-dark-800 border-2 border-dashed border-border-glass rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-accent-purple/50 transition-all duration-300 group overflow-hidden"
                  >
                    <input 
                      type="file" 
                      accept="image/*" 
                      ref={selfieInputRef} 
                      className="hidden" 
                      onChange={(e) => handleFileUpload(e, setSelfieFile)}
                    />
                    {selfieFile ? (
                      <div className="w-full h-full relative">
                        <img src={URL.createObjectURL(selfieFile)} alt="Selfie Preview" className="w-full h-full object-cover rounded-xl" />
                        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-between px-3 py-1 bg-black/60 rounded-b-xl text-[10px]">
                          <div className="flex items-center gap-1.5 text-accent-pink">
                            <FaCircleCheck size={14} /> Uploaded
                          </div>
                          <span className="text-dark-muted truncate max-w-[80px]">{selfieFile.name.slice(0, 12)}...</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-dark-muted group-hover:bg-accent-purple/20 group-hover:text-white transition-colors z-10">
                          <FaCamera size={16} />
                        </div>
                        <span className="text-[11px] font-medium text-white text-center leading-tight relative z-10">
                          Tap to upload
                        </span>
                      </>
                    )}
                  </div>

                  <div 
                    onClick={() => triggerFileInput(idInputRef)}
                    className="relative aspect-square bg-dark-800 border-2 border-dashed border-border-glass rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-accent-purple/50 transition-all duration-300 group overflow-hidden"
                  >
                    <input 
                      type="file" 
                      accept="image/*" 
                      ref={idInputRef} 
                      className="hidden" 
                      onChange={(e) => handleFileUpload(e, setIdFile)}
                    />
                    {idFile ? (
                      <div className="w-full h-full relative">
                        <img src={URL.createObjectURL(idFile)} alt="ID Preview" className="w-full h-full object-cover rounded-xl" />
                        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-between px-3 py-1 bg-black/60 rounded-b-xl text-[10px]">
                          <div className="flex items-center gap-1.5 text-accent-pink">
                            <FaCircleCheck size={14} /> Uploaded
                          </div>
                          <span className="text-dark-muted truncate max-w-[80px]">{idFile.name.slice(0, 12)}...</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-dark-muted group-hover:bg-accent-purple/20 group-hover:text-white transition-colors z-10">
                          <FaIdCard size={16} />
                        </div>
                        <span className="text-[11px] font-medium text-white text-center leading-tight relative z-10">
                          Tap to upload
                        </span>
                      </>
                    )}
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
                <button 
                  type="submit"
                  disabled={isLoading}
                  className={`px-8 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple shadow-lg shadow-accent-purple/30 transition-all duration-300 flex items-center gap-2 ${isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
                >
                  {isLoading ? (
                    <><FaSpinner className="animate-spin text-white/80" /> Verifying...</>
                  ) : (
                    <>Verify KYC <FaArrowRight className="text-white/60 text-xs" /></>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-border-glass/50">
                <FaShieldHalved className="text-accent-cyan text-xs" />
                <span className="text-[10px] text-dark-muted font-medium">Your data is encrypted &amp; secure</span>
              </div>

            </div>
          </form>
        ) : (
          /* ============================================== */
          /* --- SCENARIO 2: KYC APPROVED (SUCCESS VIEW) --- */
          /* ============================================== */
          <div className="bg-dark-600 border border-border-glass rounded-2xl p-8 relative overflow-hidden flex flex-col items-center text-center">
            
            {/* Glowing background blur behind the icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent-purple/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-sm">
              
              {/* Success Icon */}
              <div className="w-20 h-20 rounded-full bg-dark-700 border-4 border-accent-purple/30 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <FaCircleCheck className="text-accent-purple text-4xl drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              </div>

              {/* Success Heading */}
              <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent mb-2">
                KYC Approved ✅
              </h2>

              {/* Success Subtitle */}
              <p className="text-dark-muted text-sm leading-relaxed mb-6">
                Your KYC has been verified successfully. You can now access all features.
              </p>

              {/* User Details Card */}
              <div className="w-full bg-dark-800 border border-border-glass rounded-xl p-4 text-left space-y-2.5 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-dark-muted font-semibold w-16 shrink-0">Name:</span>
                  <span className="text-white font-medium break-all">{formData.fullName}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-dark-muted font-semibold w-16 shrink-0">DOB:</span>
                  <span className="text-white font-medium">{formData.dob}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-dark-muted font-semibold w-16 shrink-0">State:</span>
                  <span className="text-white font-medium">{formData.state}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-dark-muted font-semibold w-16 shrink-0">Submitted:</span>
                  <span className="text-white font-medium">{new Date().toLocaleDateString('en-GB')}</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </MainLayout>
  );
};

export default KYC;