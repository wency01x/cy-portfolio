import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(() => {
    if (!ref.current || !text || !fontsLoaded) return;

    const el = ref.current;

    // --- MODIFIED: Added yoyo: true to make the animation reverse ---
    const tl = gsap.timeline({ 
      repeat: -1, 
      repeatDelay: 2,
      yoyo: true 
    });

    if (el._rbsplitInstance) {
      try { el._rbsplitInstance.revert(); } catch (_) {}
      el._rbsplitInstance = null;
    }

    let targets;
    const assignTargets = self => {
      if (splitType.includes('chars') && self.chars.length) targets = self.chars;
      if (!targets && splitType.includes('words') && self.words.length) targets = self.words;
      if (!targets && splitType.includes('lines') && self.lines.length) targets = self.lines;
      if (!targets) targets = self.chars || self.words || self.lines;
    };

    const splitInstance = new GSAPSplitText(el, {
      type: splitType,
      smartWrap: true,
      autoSplit: splitType === 'lines',
      onSplit: self => {
        assignTargets(self);
        
        return tl.fromTo(targets, { ...from }, {
          ...to,
          duration,
          ease,
          // --- MODIFIED: Changed stagger to an object with from: "start" ---
          // This ensures that when it yoyos, the letters reverse from the end (O -> W)
          stagger: {
            each: delay / 1000,
            from: "start"
          },
          onComplete: () => {
            onCompleteRef.current?.();
          },
          willChange: 'transform, opacity',
          force3D: true
        });
      }
    });

    el._rbsplitInstance = splitInstance;

    return () => {
      tl.kill(); 
      if (el._rbsplitInstance) {
        try { el._rbsplitInstance.revert(); } catch (_) {}
      }
    };
  }, {
    dependencies: [text, delay, duration, ease, splitType, JSON.stringify(from), JSON.stringify(to), fontsLoaded],
    scope: ref
  });

  const renderTag = () => {
    const style = { textAlign, wordWrap: 'break-word', willChange: 'transform, opacity' };
    const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;
    const Tag = tag || 'p';
    return <Tag ref={ref} style={style} className={classes}>{text}</Tag>;
  };

  return renderTag();
};

export default SplitText;