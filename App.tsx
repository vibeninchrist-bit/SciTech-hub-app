
import React, { useState } from 'react';
import { AppTab } from './types';
import ChatInterface from './components/ChatInterface';
import ScienceLab from './components/ScienceLab';
import DiscoveryFeed from './components/DiscoveryFeed';
import VoiceAssistant from './components/VoiceAssistant';
import { 
  BeakerIcon, 
  ChatBubbleLeftRightIcon, 
  GlobeAltIcon, 
  MicrophoneIcon, 
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.CHAT);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.CHAT: return <ChatInterface />;
      case AppTab.LAB: return <ScienceLab />;
      case AppTab.DISCOVERY: return <DiscoveryFeed />;
      case AppTab.VOICE: return <VoiceAssistant />;
      default: return <ChatInterface />;
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFeedbackText('');
      setTimeout(() => {
        setIsFeedbackOpen(false);
        setSubmitted(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="flex h-[100dvh] bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-blue-500/30">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-72 bg-slate-900 border-r border-slate-800 shadow-2xl z-20">
        <div className="p-8">
          <h1 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
            SciTech Hub
          </h1>
          <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-[0.3em] font-black opacity-80">Scientific Core v3.0</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto no-scrollbar">
          <NavItem 
            active={activeTab === AppTab.CHAT} 
            onClick={() => setActiveTab(AppTab.CHAT)}
            icon={<ChatBubbleLeftRightIcon className="w-5 h-5" />}
            label="Sci Chat"
          />
          <NavItem 
            active={activeTab === AppTab.LAB} 
            onClick={() => setActiveTab(AppTab.LAB)}
            icon={<BeakerIcon className="w-5 h-5" />}
            label="The Lab"
          />
          <NavItem 
            active={activeTab === AppTab.DISCOVERY} 
            onClick={() => setActiveTab(AppTab.DISCOVERY)}
            icon={<GlobeAltIcon className="w-5 h-5" />}
            label="Discovery"
          />
          <NavItem 
            active={activeTab === AppTab.VOICE} 
            onClick={() => setActiveTab(AppTab.VOICE)}
            icon={<MicrophoneIcon className="w-5 h-5" />}
            label="Voice Lab"
          />
        </nav>

        <div className="p-6 space-y-4 border-t border-slate-800/50">
          <button
            onClick={() => setIsFeedbackOpen(true)}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-all duration-300 group"
          >
            <ChatBubbleBottomCenterTextIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-sm">Feedback</span>
          </button>
          
          <div className="flex items-center space-x-4 p-3 bg-slate-800/30 rounded-2xl border border-slate-800/50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20">
              S
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">Explorer</p>
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest truncate">Verified Node</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative h-full min-w-0">
        <div className="flex-1 pb-[80px] md:pb-0 overflow-hidden relative">
          {renderContent()}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-2xl border-t border-slate-800/50 flex justify-around items-center px-4 pt-3 pb-8 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <MobileNavItem 
            active={activeTab === AppTab.CHAT} 
            onClick={() => setActiveTab(AppTab.CHAT)}
            icon={<ChatBubbleLeftRightIcon className="w-6 h-6" />}
            label="Chat"
          />
          <MobileNavItem 
            active={activeTab === AppTab.LAB} 
            onClick={() => setActiveTab(AppTab.LAB)}
            icon={<BeakerIcon className="w-6 h-6" />}
            label="Lab"
          />
          <MobileNavItem 
            active={activeTab === AppTab.DISCOVERY} 
            onClick={() => setActiveTab(AppTab.DISCOVERY)}
            icon={<GlobeAltIcon className="w-6 h-6" />}
            label="Feed"
          />
          <MobileNavItem 
            active={activeTab === AppTab.VOICE} 
            onClick={() => setActiveTab(AppTab.VOICE)}
            icon={<MicrophoneIcon className="w-6 h-6" />}
            label="Voice"
          />
          <button 
            onClick={() => setIsFeedbackOpen(true)} 
            className="flex flex-col items-center gap-1 p-3 text-slate-400 hover:text-white transition-colors active:scale-90"
          >
             <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
             <span className="text-[9px] font-black uppercase tracking-tighter">Info</span>
          </button>
        </div>
      </main>

      {/* Feedback Modal */}
      {isFeedbackOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 border-b border-slate-800/50 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-black text-slate-100 flex items-center gap-3">
                  <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-blue-500" />
                  Telemetry
                </h3>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mt-1">Submit User Feedback</p>
              </div>
              <button onClick={() => setIsFeedbackOpen(false)} className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition-all">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center space-y-6">
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center animate-bounce">
                    <PaperAirplaneIcon className="w-10 h-10 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-100">Transmitted</h4>
                    <p className="text-sm text-slate-400 mt-2">Your feedback has been received and indexed by the core system.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Help us refine the SciTech experience. Every bit of data helps us build a better scientific platform.
                  </p>
                  <textarea
                    autoFocus
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Describe your thoughts..."
                    className="w-full h-40 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                    disabled={isSubmitting}
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setIsFeedbackOpen(false)}
                      className="flex-1 py-4 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-500 hover:bg-slate-800 transition-all"
                      disabled={isSubmitting}
                    >
                      Abort
                    </button>
                    <button
                      type="submit"
                      disabled={!feedbackText.trim() || isSubmitting}
                      className="flex-[2] py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white rounded-2xl text-sm font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>Transmit <PaperAirplaneIcon className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavItem: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick} 
    className={`flex flex-col items-center gap-1 p-4 relative transition-all active:scale-90 ${active ? 'text-blue-400' : 'text-slate-500'}`}
  >
    {icon}
    <span className={`text-[9px] font-black uppercase tracking-tighter ${active ? 'opacity-100' : 'opacity-60'}`}>{label}</span>
    {active && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
    )}
  </button>
);

interface NavItemProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
      active 
        ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
    }`}
  >
    <div className={`${active ? 'scale-110' : ''} transition-transform`}>{icon}</div>
    <span className="font-bold text-sm">{label}</span>
  </button>
);

export default App;
