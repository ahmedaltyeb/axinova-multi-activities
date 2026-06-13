interface Partner {
  name: string;
  logo?: string;
}

interface MarqueeProps {
  items: Partner[];
  speed?: number;
}

function getInitials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const ACCENT_COLORS = [
  "hsl(220,80%,45%)",
  "hsl(199,80%,38%)",
  "hsl(256,60%,48%)",
  "hsl(160,60%,35%)",
  "hsl(30,80%,45%)",
  "hsl(340,70%,42%)",
  "hsl(220,60%,30%)",
  "hsl(170,65%,32%)",
];

export default function Marquee({ items, speed = 38 }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee-scroll ${speed}s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 start-0 w-16 z-10"
        style={{ background: "linear-gradient(to right, hsl(220,20%,97%), transparent)" }}
      />
      <div className="pointer-events-none absolute inset-y-0 end-0 w-16 z-10"
        style={{ background: "linear-gradient(to left, hsl(220,20%,97%), transparent)" }}
      />
      <div className="dark:block hidden pointer-events-none absolute inset-y-0 start-0 w-16 z-10"
        style={{ background: "linear-gradient(to right, hsl(220,60%,7%), transparent)" }}
      />
      <div className="dark:block hidden pointer-events-none absolute inset-y-0 end-0 w-16 z-10"
        style={{ background: "linear-gradient(to left, hsl(220,60%,7%), transparent)" }}
      />

      <div className="marquee-track">
        {doubled.map((partner, i) => {
          const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
          const initials = getInitials(partner.name);
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 mx-8 shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              {/* Initials badge */}
              <span
                className="flex items-center justify-center w-8 h-8 rounded-md text-white text-[10px] font-bold shrink-0"
                style={{ backgroundColor: color }}
              >
                {initials}
              </span>
              {/* Company name */}
              <span className="text-sm font-semibold text-foreground whitespace-nowrap tracking-tight">
                {partner.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
