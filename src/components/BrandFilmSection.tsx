import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, Subtitles, RotateCcw } from 'lucide-react';

export const BrandFilmSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(98.6);
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const [showCaptions, setShowCaptions] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch((err) => console.log('Autoplay blocked:', err));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const newTime = parseFloat(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleCinema = () => {
    setIsCinemaMode(prev => !prev);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="brand-film" className="relative bg-[#070707] py-16 sm:py-24 border-b border-[#292929] overflow-hidden">
      
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Editorial Styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#292929] pb-6 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C92127] uppercase mb-2">
              <span className="w-2 h-2 bg-[#C92127]"></span>
              <span>CINEMATIC BRAND FILM • 98 SECONDS • B&W 24FPS</span>
            </div>
            <h2 className="font-display section-title text-[#E9E6DC] uppercase tracking-wide">
              COFFEE IS A <span className="font-serif italic text-stroke">RITUAL.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono text-[#E9E6DC]/70 leading-relaxed">
            <p>
              [ CALICUT REGIONAL WINNER // INDIAN AEROPRESS CHAMPIONSHIP 2026 ]
            </p>
            <p className="mt-1 text-[#E9E6DC]/50">
              Shot on location in Calicut, Kerala. Capturing the tension, inverted AeroPress craft, and the community celebrating the win.
            </p>
          </div>
        </div>

        {/* Video Player Container */}
        <div
          className={`relative w-full mx-auto transition-all duration-500 ease-out ${
            isCinemaMode
              ? 'fixed inset-0 z-50 bg-black/95 flex flex-col justify-center items-center p-4 sm:p-10'
              : 'max-w-5xl aspect-video bg-[#000000] border border-[#292929] shadow-2xl'
          }`}
        >
          {isCinemaMode && (
            <div className="w-full max-w-6xl flex justify-between items-center mb-4 text-xs font-mono text-white/80">
              <span className="text-[#C92127] font-bold">CINEMA MODE // KAAPPITALISM BRAND FILM</span>
              <button
                onClick={toggleCinema}
                className="hover:text-[#C92127] border border-[#292929] px-3 py-1 uppercase"
              >
                EXIT CINEMA MODE [ESC]
              </button>
            </div>
          )}

          <div className={`relative w-full overflow-hidden bg-black ${isCinemaMode ? 'max-w-6xl aspect-video border border-[#292929]' : 'h-full'}`}>
            <video
              ref={videoRef}
              src="/assets/a4ruio.mp4"
              poster="/assets/video_poster.jpg"
              preload="metadata"
              playsInline
              muted={isMuted}
              onClick={togglePlay}
              className="w-full h-full object-cover filter contrast-110 cursor-pointer"
            />

            {/* Subtle Watermark Branding in top corner */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none opacity-60 flex items-center space-x-2">
              <span className="font-serif text-sm tracking-widest font-bold text-white uppercase">KAAPPITALISM</span>
              <span className="text-[10px] font-mono text-white/50">| 01:38</span>
            </div>

            {/* Center Big Play Button when paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer group transition-all"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/30 bg-black/60 flex items-center justify-center group-hover:scale-110 group-hover:border-[#C92127] transition-all duration-300 shadow-2xl">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#E9E6DC] fill-[#E9E6DC] translate-x-0.5 group-hover:text-[#C92127] group-hover:fill-[#C92127] transition-colors" />
                </div>
                <div className="mt-4 text-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#E9E6DC] bg-black/80 px-3 py-1 border border-[#292929]">
                    START FILM [ 1 MIN 38 SEC ]
                  </span>
                  <p className="font-serif italic text-sm text-[#E9E6DC]/70 mt-1">
                    “Crafted, Never Rushed”
                  </p>
                </div>
              </div>
            )}

            {/* Video Controls Overlay Bar */}
            <div className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black via-black/80 to-transparent p-3 sm:p-5 flex flex-col gap-2">
              
              {/* Scrub Progress Bar */}
              <div className="w-full flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max={duration || 98.6}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/20 rounded-none appearance-none cursor-pointer accent-[#C92127]"
                  aria-label="Video scrubber"
                />
              </div>

              {/* Bottom Button Row */}
              <div className="flex items-center justify-between text-xs font-mono text-[#E9E6DC]">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlay}
                    className="hover:text-[#C92127] transition-colors focus:outline-none"
                    aria-label={isPlaying ? 'Pause film' : 'Play film'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="hover:text-[#C92127] transition-colors focus:outline-none flex items-center gap-1.5"
                    aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5 text-[#C92127]" /> : <Volume2 className="w-5 h-5" />}
                    <span className="text-[10px] hidden sm:inline uppercase">
                      {isMuted ? 'MUTED' : 'AUDIO ON'}
                    </span>
                  </button>

                  <div className="text-[11px] text-[#E9E6DC]/70">
                    <span>{formatTime(currentTime)}</span>
                    <span className="mx-1 text-white/30">/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowCaptions(!showCaptions)}
                    className={`p-1 transition-colors flex items-center gap-1 text-[11px] ${
                      showCaptions ? 'text-[#C92127]' : 'text-[#E9E6DC]/70 hover:text-white'
                    }`}
                    aria-label="Toggle field notes"
                  >
                    <Subtitles className="w-4 h-4" />
                    <span className="hidden sm:inline uppercase">RITUAL NOTES</span>
                  </button>

                  <button
                    onClick={toggleCinema}
                    className="hover:text-[#C92127] transition-colors p-1"
                    aria-label={isCinemaMode ? 'Exit cinema mode' : 'Expand cinema mode'}
                  >
                    {isCinemaMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Captions / Ritual Field Notes Drawer */}
        {showCaptions && (
          <div className="max-w-5xl mx-auto mt-4 p-5 bg-[#121212] border border-[#292929] text-xs font-mono text-[#E9E6DC]/85 animate-fadeIn">
            <div className="flex justify-between items-center border-b border-[#292929] pb-2 mb-3">
              <span className="text-[#C92127] font-bold uppercase tracking-wider">
                FIELD CHRONICLE // INDIAN AEROPRESS CHAMPIONSHIP 2026
              </span>
              <span className="text-[10px] text-white/50">CALICUT QUALIFIERS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px] leading-relaxed">
              <div>
                <p className="text-white font-bold mb-1">00:00 – 00:25: THE PREP</p>
                <p className="text-[#E9E6DC]/70">
                  Weighing 18.5g of Terra Vagamon shade-grown beans. Fine-tuned manual burr grinding. Water heated in Fellow gooseneck kettle to 88°C.
                </p>
              </div>
              <div>
                <p className="text-white font-bold mb-1">00:25 – 00:55: THE INVERSION</p>
                <p className="text-[#E9E6DC]/70">
                  Inverted AeroPress chamber. 45-second bloom with turbulent swirl to unlock sweet cocoa and sugarcane volatiles. Stainless mesh lock.
                </p>
              </div>
              <div>
                <p className="text-white font-bold mb-1">00:55 – 01:38: THE TRIUMPH</p>
                <p className="text-[#E9E6DC]/70">
                  Judges blind-taste the extraction. Announcement: Fardhan Sabir crowned Calicut Regional Champion. The underground Malabar coffee circle erupts.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
