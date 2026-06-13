import { useRef, useEffect } from "react";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 35 }: MarqueeProps) {
  const track = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee ${speed}s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-track" ref={track}>
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-10 py-6 shrink-0"
          >
            <span className="text-sm font-semibold text-white/30 whitespace-nowrap hover:text-white/60 transition-colors">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
