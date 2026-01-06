export const ButtonShootingStarBorder = ({ text }: { text: string }) => {
  return (
    <button className="group relative overflow-hidden rounded-full px-6 py-2 text-sm text-white" style={{ boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}>
      {/* Animated border */}
      <div className="absolute inset-0 rounded-full animate-spin-slow">
        <div className="absolute inset-0 rounded-full bg-gradient-conic"></div>
      </div>
      
      {/* Background */}
      <div 
        className="absolute inset-px rounded-full z-10 bg-linear-to-b from-[#100420] to-[#1b003f]" 
      ></div>
      
      {/* Text */}
      <span className="relative z-20 text-zinc-300 text-sm">{text}</span>
    </button>
  );
};

/* 
tailwind.config.ts

...
extend: {
  animation: {
    flip: "flip 6s infinite steps(2, end)",
    rotate: "rotate 3s linear infinite both",
  },
  keyframes: {
    flip: {
      to: {
        transform: "rotate(360deg)",
      },
    },
    rotate: {
      to: {
        transform: "rotate(90deg)",
      },
    },
  },
}
*/
