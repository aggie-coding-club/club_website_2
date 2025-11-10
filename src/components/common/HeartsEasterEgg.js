import { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";

export default function HeartsEasterEgg({ active }) {
  const [hearts, setHearts] = useState([]);
  const heartIdRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!active) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      // Clear hearts after a delay to let animations finish
      const timeout = setTimeout(() => {
        setHearts([]);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const heartSymbols = ["❤️", "💕", "💖", "💗", "💓", "💝", "💘", "💞"];

    // Create hearts continuously while active
    const createHeart = () => {
      const delay = 0;
      const duration = 3000 + Math.random() * 2000;
      const left = Math.random() * 100;
      const size = 20 + Math.random() * 30;
      const heart =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

      const newHeart = {
        id: heartIdRef.current++,
        delay,
        duration,
        left,
        size,
        heart,
      };

      setHearts((prev) => [...prev, newHeart]);

      // Remove heart after animation completes
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, duration + 100);
    };

    // Create initial burst of hearts
    for (let i = 0; i < 30; i++) {
      setTimeout(() => createHeart(), i * 50);
    }

    // Continue creating hearts periodically
    intervalRef.current = setInterval(() => {
      createHeart();
    }, 200);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [active]);

  if (!active || hearts.length === 0) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {hearts.map((heart) => (
        <Box
          key={heart.id}
          sx={{
            position: "absolute",
            left: `${heart.left}%`,
            bottom: "-50px",
            fontSize: `${heart.size}px`,
            animation: `floatUp ${heart.duration}ms ease-out ${heart.delay}ms forwards`,
            "@keyframes floatUp": {
              "0%": {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1,
              },
              "100%": {
                transform: `translateY(-100vh) rotate(${
                  360 + Math.random() * 360
                }deg)`,
                opacity: 0,
              },
            },
          }}
        >
          {heart.heart}
        </Box>
      ))}
    </Box>
  );
}
