export default function BackgroundLayers() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-base-layer" />

      <div className="absolute -top-32 left-10 h-72 w-72 rounded-full blur-3xl glow-blue" />
      <div className="absolute top-40 right-[-80px] h-80 w-80 rounded-full blur-3xl glow-purple" />
      <div className="absolute bottom-[-120px] left-1/3 h-96 w-96 rounded-full blur-3xl glow-soft" />

      <div className="absolute inset-0 grid-layer opacity-30" />
      <div className="absolute inset-0 noise-layer opacity-35" />
    </div>
  );
}
