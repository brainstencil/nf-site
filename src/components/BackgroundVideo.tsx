interface BackgroundVideoProps {
  children?: React.ReactNode;
}

export function BackgroundVideo({ children }: BackgroundVideoProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/jet_engine_animation_av1.webm"
          type="video/webm"
        />
      </video>
      <div className="absolute inset-0 bg-gradient"></div>
      {children}
    </div>
  );
} 