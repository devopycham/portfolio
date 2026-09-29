/** Card with a cursor-following glow (CSS vars set on pointer move). */
export default function SpotlightCard({ children, className = "", glow = "rgba(47,221,143,0.22)" }) {
  const onMove = (event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };
  return (
    <div onPointerMove={onMove} className={`group relative overflow-hidden ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(360px circle at var(--mx,50%) var(--my,50%), ${glow}, transparent 70%)` }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
