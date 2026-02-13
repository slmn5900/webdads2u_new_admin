"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useState } from "react";

export const kotaEase = [0.25, 0.1, 0.25, 1];
export const kotaEaseOut = [0.22, 1, 0.36, 1];
export const kotaEaseIn = [0.4, 0, 1, 1];

export const smoothTransition = {
  duration: 0.8,
  ease: kotaEaseOut,
};

export const quickTransition = {
  duration: 0.4,
  ease: kotaEaseOut,
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: kotaEaseOut,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: kotaEaseOut,
    },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: kotaEaseOut,
    },
  },
};

// Scale animations
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: kotaEaseOut,
    },
  },
};

export const scaleInSpring = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    },
  },
};

// Slide animations
export const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: kotaEaseOut,
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: kotaEaseOut,
    },
  },
};

// Stagger containers
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: kotaEaseOut,
    },
  },
};

// Text animations
export const letterAnimation = {
  hidden: { opacity: 0, y: 100, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: kotaEaseOut,
    },
  },
};

export const wordAnimation = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: kotaEaseOut,
    },
  },
};

// Line reveal
export const lineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: kotaEaseOut,
    },
  },
};

// Mask reveal
export const maskReveal = {
  hidden: {
    clipPath: "inset(0% 100% 0% 0%)",
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.8,
      ease: kotaEaseOut,
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.4, ease: kotaEaseOut },
};

export const hoverScaleSmall = {
  scale: 1.02,
  transition: { duration: 0.3, ease: kotaEaseOut },
};

export const tapScale = {
  scale: 0.97,
  transition: { duration: 0.1 },
};

export const hoverLift = {
  y: -8,
  transition: { duration: 0.4, ease: kotaEaseOut },
};

export const hoverSlide = {
  x: 8,
  transition: { duration: 0.3, ease: kotaEaseOut },
};

// Buttons & cards
export const buttonHover = {
  scale: 1.02,
  x: 4,
  transition: { duration: 0.3, ease: kotaEaseOut },
};

export const cardHover = {
  y: -12,
  transition: { duration: 0.4, ease: kotaEaseOut },
};

export const linkUnderlineExpand = {
  scaleX: 1,
  transition: { duration: 0.3, ease: kotaEaseOut },
};

// Viewport settings
export const viewportSettings = {
  once: true,
  amount: 0.15,
  margin: "-80px",
};

export const viewportSettingsEager = {
  once: true,
  amount: 0.05,
  margin: "-50px",
};

// Parallax
export const parallaxSettings = {
  slow: [0, 1],
  slowOutput: ["0%", "20%"],
  medium: [0, 1],
  mediumOutput: ["0%", "40%"],
  fast: [0, 1],
  fastOutput: ["0%", "60%"],
};

// Rotate animations
export const rotateIn = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: kotaEaseOut,
    },
  },
};

// Bounce animation
export const bounceIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

// Counter spring
export const counterSpring = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

// Gradient animation
export const gradientShift = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "linear",
  },
};

// Cursor follow
export const cursorFollow = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.5,
};

// Page transitions
export const pageEnter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: kotaEaseOut,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const pageExit = {
  hidden: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: kotaEaseIn,
    },
  },
};

import { useRef } from "react";

export const CountUp = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numeric = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (isInView) {
      animate(count, numeric, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, numeric]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};
