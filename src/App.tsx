import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Sparkles, X } from 'lucide-react';
import { MODAL_IMAGE_CONFIG, PROPOSAL_CONFIG } from './constants';

gsap.registerPlugin(ScrollTrigger);

const HEART_CLIP_PATH =
  'polygon(50% 0%, 61% 8%, 75% 1%, 84% 11%, 91% 25%, 94% 41%, 92% 57%, 85% 72%, 75% 84%, 61% 93%, 50% 100%, 39% 93%, 25% 84%, 15% 72%, 8% 57%, 6% 41%, 9% 25%, 16% 11%, 25% 1%, 39% 8%)';

type HeartMaskedImageProps = {
  src: string;
  alt: string;
  objectPosition?: string;
};

function HeartMaskedImage({ src, alt, objectPosition = 'center center' }: HeartMaskedImageProps) {
  return (
    <div className="relative w-28 h-28 mx-auto mb-4 flex items-center justify-center">
      <div
        className="relative overflow-hidden w-full h-full"
        style={{
          clipPath: HEART_CLIP_PATH,
          boxShadow: '0 10px 40px rgba(244,63,94,0.4)'
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: HEART_CLIP_PATH,
          border: '3px solid rgba(251, 113, 133, 0.9)',
          filter: 'drop-shadow(0 6px 18px rgba(236,72,153,0.35))'
        }}
      />
    </div>
  );
}

export default function App() {
  const [showProposal, setShowProposal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const memoriesRef = useRef<HTMLDivElement>(null);
  const memoriesTitleRef = useRef<HTMLHeadingElement>(null);
  const reasonsRef = useRef<HTMLDivElement>(null);
  const reasonsTitleRef = useRef<HTMLHeadingElement>(null);
  const finalMessageRef = useRef<HTMLDivElement>(null);
  const finalMessageTitleRef = useRef<HTMLHeadingElement>(null);
  const proposalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations
    const ctx = gsap.context(() => {
      // Animate floating hearts in background
      gsap.to('.floating-heart', {
        y: -20,
        x: 10,
        rotation: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.5
      });

      // Hero text animations
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out'
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.5,
        delay: 0.5,
        ease: 'power3.out'
      });

      gsap.from(heartRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'back.out(1.7)'
      });

      // Continuous heart pulse
      gsap.to(heartRef.current, {
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 2
      });

      // Scroll hint fade animation
      gsap.from(scrollHintRef.current, {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 1.5,
        ease: 'power2.out'
      });

      // Parallax effect on hero
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: 300,
        opacity: 0,
        ease: 'none'
      });

      // Memories title scroll animation
      gsap.from(memoriesTitleRef.current, {
        scrollTrigger: {
          trigger: memoriesTitleRef.current,
          start: 'top 85%',
          end: 'top 50%',
          scrub: 1
        },
        opacity: 0,
        y: 100,
        scale: 0.8,
        ease: 'power2.out'
      });

      // Memories section scroll animation
      if (memoriesRef.current) {
        const memoryCards = memoriesRef.current.querySelectorAll('.memory-card');
        memoryCards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1
            },
            opacity: 0,
            y: 150,
            rotation: index % 2 === 0 ? -10 : 10,
            scale: 0.8,
            ease: 'power2.out'
          });
        });
      }

      // Reasons title scroll animation
      gsap.from(reasonsTitleRef.current, {
        scrollTrigger: {
          trigger: reasonsTitleRef.current,
          start: 'top 85%',
          end: 'top 50%',
          scrub: 1
        },
        opacity: 0,
        y: 100,
        scale: 0.8,
        ease: 'power2.out'
      });

      // Reasons section scroll animation
      if (reasonsRef.current) {
        const reasonItems = reasonsRef.current.querySelectorAll('.reason-item');
        reasonItems.forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              end: 'top 50%',
              scrub: 1
            },
            opacity: 0,
            x: -100,
            scale: 0.9,
            ease: 'power2.out'
          });
        });
      }

      // Final message title scroll animation
      gsap.from(finalMessageTitleRef.current, {
        scrollTrigger: {
          trigger: finalMessageTitleRef.current,
          start: 'top 85%',
          end: 'top 50%',
          scrub: 1
        },
        opacity: 0,
        scale: 0.5,
        ease: 'power2.out'
      });

      // Final message content scroll animation
      gsap.from(finalMessageRef.current, {
        scrollTrigger: {
          trigger: finalMessageRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1
        },
        opacity: 0,
        y: 100,
        scale: 0.8,
        ease: 'power2.out'
      });

      // Proposal section animation
      if (proposalRef.current) {
        ScrollTrigger.create({
          trigger: proposalRef.current,
          start: 'top 60%',
          onEnter: () => {
            setShowProposal(true);
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // Animate proposal content when it appears
  useEffect(() => {
    if (showProposal) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        tl.from('.proposal-content', {
          scale: 0.3,
          opacity: 0,
          duration: 1.2,
          ease: 'elastic.out(1, 0.6)'
        })
        .from('.proposal-question', {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(2)'
        }, '-=0.5')
        .from('.proposal-button', {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(2)'
        }, '-=0.3');

        // Sparkle animation
        gsap.to('.sparkle', {
          rotation: 360,
          duration: 3,
          repeat: -1,
          ease: 'linear',
          stagger: 0.2
        });

        // Sparkle scale pulse
        gsap.to('.sparkle', {
          scale: 1.2,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          stagger: 0.15
        });
      });

      return () => ctx.revert();
    }
  }, [showProposal]);

  useEffect(() => {
    if (showModal) {
      gsap.from('.modal-overlay', {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.from('.modal-content', {
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.6)',
        delay: 0.1
      });

      // Animate floating hearts in modal
      gsap.from('.modal-heart', {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(2)',
        delay: 0.3
      });

      gsap.to('.modal-heart', {
        y: -30,
        x: 'random(-20, 20)',
        rotation: 'random(-15, 15)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.1
      });
    }
  }, [showModal]);

  const handleYesClick = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 overflow-x-hidden font-['Caveat']">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-heart absolute text-rose-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative px-6 bg-gradient-to-br from-pink-200 via-rose-200 to-purple-300">
        <div className="text-center z-10">
          <h1
            ref={titleRef}
            className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent font-['Pacifico'] drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]"
          >
            {PROPOSAL_CONFIG.partnerName}
          </h1>
          <p
            ref={subtitleRef}
            className="text-3xl md:text-5xl text-rose-900/80 font-semibold mb-12 px-4 font-['Caveat'] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
          >
            {PROPOSAL_CONFIG.openingQuote}
          </p>
          <div ref={heartRef} className="inline-block">
            <Heart className="w-20 h-20 text-rose-500 fill-rose-500 drop-shadow-[0_0_30px_rgba(244,63,94,0.6)]" />
          </div>
        </div>

        {/* Glass morphism card */}
        <div 
          ref={scrollHintRef}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-2xl rounded-3xl p-8 border border-rose-200/50 shadow-[0_8px_32px_0_rgba(244,63,94,0.2)] before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-b before:from-white/60 before:to-rose-200/30 before:-z-10"
        >
          <p className="text-rose-900 text-2xl italic font-['Caveat'] font-bold">Scroll to see our journey...</p>
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-32 px-6 relative bg-gradient-to-br from-purple-200 via-pink-100 to-rose-100">
        <div className="max-w-7xl mx-auto">
          <h2 
            ref={memoriesTitleRef}
            className="text-5xl md:text-7xl font-bold text-center mb-20 text-purple-800 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] font-['Pacifico']"
          >
            Our Beautiful Journey
          </h2>
          <div ref={memoriesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROPOSAL_CONFIG.memories.map((memory, index) => (
              <div
                key={index}
                className="memory-card relative bg-white/60 backdrop-blur-2xl rounded-[2rem] p-8 border border-rose-200/60 shadow-[0_8px_32px_0_rgba(244,63,94,0.15),inset_0_1px_0_0_rgba(255,255,255,0.6)] hover:bg-white/75 hover:border-rose-300 transition-all duration-500 before:absolute before:inset-0 before:rounded-[2rem] before:p-[1px] before:bg-gradient-to-br before:from-rose-300/40 before:via-pink-200/30 before:to-transparent before:-z-10 hover:shadow-[0_8px_48px_0_rgba(244,63,94,0.25),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-bold text-rose-600 drop-shadow-[0_1px_3px_rgba(255,255,255,0.5)] font-['Pacifico']">{memory.title}</h3>
                  <span className="text-lg text-rose-700 bg-rose-100/80 backdrop-blur-xl px-4 py-2 rounded-full border border-rose-200 font-['Caveat'] font-semibold">
                    {memory.date}
                  </span>
                </div>
                <p className="text-purple-900/80 text-2xl leading-relaxed font-['Caveat'] font-medium">{memory.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-32 px-6 relative bg-gradient-to-br from-rose-100 via-pink-200 to-purple-200">
        <div className="max-w-5xl mx-auto">
          <h2 
            ref={reasonsTitleRef}
            className="text-5xl md:text-7xl font-bold text-center mb-20 text-rose-800 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] font-['Pacifico']"
          >
            Why I Love You
          </h2>
          <div ref={reasonsRef} className="space-y-6">
            {PROPOSAL_CONFIG.reasons.map((reason, index) => (
              <div
                key={index}
                className="reason-item relative bg-white/50 backdrop-blur-2xl rounded-2xl p-6 border border-pink-200/60 shadow-[0_8px_32px_0_rgba(236,72,153,0.15),inset_0_1px_0_0_rgba(255,255,255,0.6)] flex items-center gap-4 hover:bg-white/70 hover:border-pink-300 transition-all duration-500 before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-rose-300/40 before:to-purple-300/40 before:-z-10 hover:shadow-[0_8px_48px_0_rgba(236,72,153,0.25)] hover:scale-[1.01]"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-[0_4px_20px_rgba(244,63,94,0.4)] font-['Pacifico']">
                  {index + 1}
                </div>
                <p className="text-purple-900 text-2xl font-['Caveat'] font-semibold">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="py-32 px-6 relative bg-gradient-to-br from-purple-200 via-pink-100 to-rose-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            ref={finalMessageTitleRef}
            className="text-4xl md:text-6xl font-bold mb-12 text-purple-800 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] font-['Pacifico']"
          >
            A Promise
          </h2>
          <div 
            ref={finalMessageRef}
            className="relative bg-white/50 backdrop-blur-2xl rounded-[2.5rem] p-12 border border-rose-200/60 shadow-[0_8px_32px_0_rgba(244,63,94,0.2),inset_0_1px_0_0_rgba(255,255,255,0.6)] before:absolute before:inset-0 before:rounded-[2.5rem] before:p-[1px] before:bg-gradient-to-b before:from-rose-300/50 before:via-pink-200/30 before:to-transparent before:-z-10"
          >
            <p className="text-3xl md:text-4xl text-purple-900/90 leading-relaxed italic font-['Caveat'] font-semibold">
              "{PROPOSAL_CONFIG.finalMessage}"
            </p>
            <p className="text-3xl text-rose-600 mt-8 drop-shadow-[0_1px_3px_rgba(255,255,255,0.5)] font-['Pacifico']">- {PROPOSAL_CONFIG.yourName}</p>
          </div>
        </div>
      </section>

      {/* Proposal Section */}
      <section ref={proposalRef} className="min-h-screen flex items-center justify-center px-6 py-20 relative bg-gradient-to-br from-pink-300 via-rose-300 to-purple-400">
        <div className="proposal-content text-center z-50 w-full max-w-4xl mx-auto">
          <div className="relative inline-block w-full">
            <Sparkles className="sparkle absolute -top-12 -left-4 md:-left-12 w-12 md:w-16 h-12 md:h-16 text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.9)]" />
            <Sparkles className="sparkle absolute -top-12 -right-4 md:-right-12 w-12 md:w-16 h-12 md:h-16 text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.9)]" />
            <Sparkles className="sparkle absolute -bottom-12 -left-4 md:-left-12 w-12 md:w-16 h-12 md:h-16 text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.9)]" />
            <Sparkles className="sparkle absolute -bottom-12 -right-4 md:-right-12 w-12 md:w-16 h-12 md:h-16 text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.9)]" />
            
            <div className="relative bg-white/50 backdrop-blur-3xl rounded-[3rem] p-8 md:p-16 border-4 border-white/60 shadow-[0_8px_64px_0_rgba(244,63,94,0.3),inset_0_2px_0_0_rgba(255,255,255,0.8),0_0_100px_rgba(255,255,255,0.4)] before:absolute before:inset-0 before:rounded-[3rem] before:p-[2px] before:bg-gradient-to-br before:from-rose-300/60 before:via-pink-300/40 before:to-purple-300/50 before:-z-10">
              <h2 className="proposal-question text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(255,255,255,0.8)] font-['Pacifico'] leading-tight">
                {PROPOSAL_CONFIG.proposalQuestion}
              </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12 relative z-[9999]">
                <button 
                  onClick={handleYesClick}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.15,
                      rotate: 5,
                      duration: 0.3,
                      ease: 'back.out(2)'
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      rotate: 0,
                      duration: 0.3,
                      ease: 'power2.out'
                    });
                  }}
                  className="proposal-button"
                  style={{
                    background: 'linear-gradient(to right, #fb7185, #ec4899)',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    padding: '1.5rem 4rem',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 40px rgba(244,63,94,0.5)',
                    zIndex: 9999,
                    position: 'relative',
                    transition: 'box-shadow 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 60px rgba(244,63,94,0.8), 0 0 40px rgba(244,63,94,0.6)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(244,63,94,0.5)';
                  }}
                >
                  Yes! 💍
                </button>
                <button 
                  onClick={handleYesClick}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.15,
                      rotate: -5,
                      duration: 0.3,
                      ease: 'back.out(2)'
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      rotate: 0,
                      duration: 0.3,
                      ease: 'power2.out'
                    });
                  }}
                  className="proposal-button"
                  style={{
                    background: 'linear-gradient(to right, #c084fc, #ec4899)',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    padding: '1.5rem 4rem',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 40px rgba(192,132,252,0.5)',
                    zIndex: 9999,
                    position: 'relative',
                    transition: 'box-shadow 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 60px rgba(192,132,252,0.8), 0 0 40px rgba(192,132,252,0.6)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(192,132,252,0.5)';
                  }}
                >
                  Absolutely! 💖
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          {/* Floating hearts animation */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="modal-heart absolute text-rose-400 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 40 + 20}px`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              ♥
            </div>
          ))}

          <div className="modal-content relative bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200 rounded-2xl p-3 w-[300px] h-[360px] overflow-y-auto border-4 border-white/80 shadow-[0_20px_60px_0_rgba(0,0,0,0.4)]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-3 -right-3 w-12 h-12 bg-rose-500 hover:bg-rose-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-rose-600 mb-3 font-['Pacifico'] drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
                I Love You! 💕
              </h2>

              <HeartMaskedImage
                src={MODAL_IMAGE_CONFIG.src}
                alt={MODAL_IMAGE_CONFIG.alt}
                objectPosition={MODAL_IMAGE_CONFIG.objectPosition}
              />

              <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-3 border-2 border-rose-300">
                <p className="text-base md:text-lg text-purple-900 font-['Caveat'] font-bold leading-snug">
                  Thank you for making me the happiest person alive! 💖✨
                </p>
              </div>

              <div className="mt-3">
                <Heart className="w-8 h-8 mx-auto text-rose-500 fill-rose-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
