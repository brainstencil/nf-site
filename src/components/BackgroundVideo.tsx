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
        preload="auto"
        loading="eager"
        fetchpriority="high"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          console.error('Video error:', e.currentTarget.error);
        }}
        onLoadedData={() => {
          console.log('Video loaded successfully');
        }}
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