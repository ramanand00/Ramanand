import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const NotFound = () => {
  const warningRef = useRef(null);
  const glitchLayer1Ref = useRef(null);
  const glitchLayer2Ref = useRef(null);
  const scanlineRef = useRef(null);
  const alertMsgRef = useRef(null);
  const buttonRef = useRef(null);
  const error404Ref = useRef(null);
  const error404Layer1Ref = useRef(null);
  const error404Layer2Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // WARNING glitch shake & flicker
    const glitchTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    glitchTimeline
      .to(warningRef.current, { x: 6, duration: 0.08, ease: "rough({ strength: 3, points: 25 })" })
      .to(warningRef.current, { x: -6, duration: 0.08, ease: "rough({ strength: 3, points: 25 })" })
      .to(warningRef.current, { x: 0, duration: 0.08 });

    // WARNING glitch layers flicker (more intense)
    gsap.to(glitchLayer1Ref.current, {
      x: -5,
      opacity: 0.8,
      duration: 0.06,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
    gsap.to(glitchLayer2Ref.current, {
      x: 5,
      opacity: 0.7,
      duration: 0.07,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 0.03,
    });

    // 404 glitch flicker & jitter (more intense)
    const glitch404Tl = gsap.timeline({ repeat: -1, yoyo: true });
    glitch404Tl
      .to(error404Ref.current, { x: 6, duration: 0.06, ease: "rough({ strength: 4, points: 30 })" })
      .to(error404Ref.current, { x: -6, duration: 0.06, ease: "rough({ strength: 4, points: 30 })" })
      .to(error404Ref.current, { x: 0, duration: 0.06 });
    gsap.to(error404Layer1Ref.current, {
      x: -6,
      opacity: 0.85,
      duration: 0.07,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
    gsap.to(error404Layer2Ref.current, {
      x: 6,
      opacity: 0.7,
      duration: 0.08,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 0.03,
    });

    // Scanline vertical movement flicker
    gsap.to(scanlineRef.current, {
      backgroundPositionY: '+=60',
      duration: 2.5,
      repeat: -1,
      ease: "linear"
    });

    // Alert message flicker
    gsap.to(alertMsgRef.current, {
      opacity: 0.5,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Button pulse effect + color flash
    gsap.to(buttonRef.current, {
      boxShadow: "0 0 30px 10px rgba(255,0,0,0.9)",
      scale: 1.1,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      onRepeat: () => {
        gsap.to(buttonRef.current, { backgroundColor: '#ff1a1a', duration: 0.2 });
        gsap.to(buttonRef.current, { backgroundColor: 'transparent', duration: 0.8 });
      },
    });

    // Shake entire container slightly for alarm
    gsap.to(containerRef.current, {
      x: '+=4',
      duration: 0.05,
      repeat: -1,
      yoyo: true,
      ease: "rough({ strength: 2, points: 20 })"
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black font-mono overflow-hidden flex flex-col items-center justify-center px-6">
      {/* Danger red pulsating glow behind container */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-xl"
        style={{
          boxShadow: '0 0 150px 60px rgba(255, 0, 0, 0.6), inset 0 0 150px 40px rgba(255, 0, 0, 0.5)',
          animation: 'pulseRedGlow 3s ease-in-out infinite alternate',
          filter: 'blur(20px)'
        }}
      />

      {/* Flickering red scanline overlay */}
      <div
        ref={scanlineRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 bg-[repeating-linear-gradient(0deg,#ff0000, #ff0000 1px, transparent 2px, transparent 3px)]"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Main container */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-4xl text-center bg-black bg-opacity-95 rounded-xl p-14 shadow-lg"
      >
        {/* WARNING with glitch */}
        <h1
          ref={warningRef}
          className="relative text-7xl md:text-9xl font-black uppercase tracking-widest text-red-600 select-none mb-8"
          style={{ textShadow: '0 0 15px #ff0000, 0 0 40px #ff0000' }}
        >
          WARNING
          <span
            ref={glitchLayer1Ref}
            aria-hidden="true"
            className="absolute top-0 left-0 w-full h-full pointer-events-none select-none text-red-400"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', userSelect: 'none', textShadow: '0 0 10px #ff4444, 0 0 30px #ff4444' }}
          >
            WARNING
          </span>
          <span
            ref={glitchLayer2Ref}
            aria-hidden="true"
            className="absolute top-0 left-0 w-full h-full pointer-events-none select-none text-red-700"
            style={{ clipPath: 'polygon(0 55%, 100% 50%, 100% 100%, 0 100%)', userSelect: 'none', textShadow: '0 0 20px #ff2222, 0 0 40px #ff2222' }}
          >
            WARNING
          </span>
        </h1>

        {/* 404 with glitch and scanline */}
        <h2
          ref={error404Ref}
          className="relative text-[10rem] font-extrabold tracking-widest mb-10 text-red-700 select-none"
          style={{ textShadow: '0 0 15px #ff0000, 0 0 50px #ff0000' }}
        >
          4☠4
          <span
            ref={error404Layer1Ref}
            aria-hidden="true"
            className="absolute top-0 left-0 w-full h-full pointer-events-none select-none text-red-500"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', userSelect: 'none', textShadow: '0 0 20px #ff4444, 0 0 50px #ff4444' }}
          >
          4☠4
          </span>
          <span
            ref={error404Layer2Ref}
            aria-hidden="true"
            className="absolute top-0 left-0 w-full h-full pointer-events-none select-none text-red-900"
            style={{ clipPath: 'polygon(0 55%, 100% 50%, 100% 100%, 0 100%)', userSelect: 'none', textShadow: '0 0 30px #ff2222, 0 0 60px #ff2222' }}
          >
            4☠4
          </span>
          <span
            aria-hidden="true"
            className="scanline-overlay absolute top-0 left-0 w-full h-full pointer-events-none rounded-xl"
            style={{
              background: 'repeating-linear-gradient(to bottom, rgba(255,0,0,0.2) 0px, rgba(255,0,0,0.2) 2px, transparent 2px, transparent 4px)',
              animation: 'scanlineMove 3s linear infinite',
              mixBlendMode: 'screen',
              borderRadius: '1rem',
            }}
          />
        </h2>

        {/* Alert message */}
        <p
          ref={alertMsgRef}
          className="text-xl max-w-xl mx-auto text-red-400 mb-12 leading-relaxed font-bold"
          style={{ textShadow: '0 0 6px #ff0000' }}
        >
          Potential breach detected. The page you requested may be compromised or does not exist.
          Proceed with extreme caution. All actions are monitored and logged.
        </p>

        {/* Back button */}
        <Link
          ref={buttonRef}
          to="/"
          className="inline-block px-12 py-5 rounded-xl text-red-600 font-extrabold uppercase tracking-widest shadow-lg hover:text-black hover:bg-red-700 transition transform hover:scale-110"
          style={{ border: 'none', backgroundColor: 'transparent' }}
        >
          Go Back Safely
        </Link>

        {/* Terminal style log */}
        <pre
          className="mt-14 text-left max-w-xl mx-auto bg-black bg-opacity-90 p-6 rounded-xl text-sm text-red-500 font-mono overflow-x-auto select-none shadow-inner"
          style={{ boxShadow: 'inset 0 0 40px 8px rgba(255, 0, 0, 0.3)' }}
        >
{`[ALERT] Unauthorized access attempt logged at 2025-07-20 15:47:23
[ERROR] Page not found: /requested-path
[SECURITY] Monitoring initiated. All actions recorded.`}
        </pre>
      </div>

      <style>{`
        @keyframes pulseRedGlow {
          0% {
            box-shadow: 0 0 120px 40px rgba(255, 0, 0, 0.7), inset 0 0 120px 30px rgba(255, 0, 0, 0.5);
          }
          100% {
            box-shadow: 0 0 200px 70px rgba(255, 0, 0, 1), inset 0 0 180px 50px rgba(255, 0, 0, 0.8);
          }
        }
        @keyframes scanlineMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
