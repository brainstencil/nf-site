interface BackgroundVideoProps {
  children?: React.ReactNode;
}

export function BackgroundVideo({ children }: BackgroundVideoProps) {
  const handleError = (e: Event) => {
    const video = e.target as HTMLVideoElement;
    console.error('Video Error:', {
      error: video.error?.code,
      message: video.error?.message,
      networkState: video.networkState,
      readyState: video.readyState,
      currentSrc: video.currentSrc
    });
  };

  const handleStalled = (e: Event) => {
    const video = e.target as HTMLVideoElement;
    console.warn('Video Stalled:', {
      currentTime: video.currentTime,
      networkState: video.networkState,
      readyState: video.readyState
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/jet_engine_animation.00_05_56_29.Still003.png"
        className="absolute inset-0 h-full w-full object-cover"
        onError={handleError}
        onStalled={handleStalled}
        onLoadStart={() => console.log('Video load started')}
        onLoadedData={() => console.log('Video data loaded')}
        onPlay={() => console.log('Video started playing')}
        onCanPlay={() => console.log('Video can start playing')}
      >
        <source
          src="/videos/jet_engine_animation_av1.webm"
          type="video/webm"
        />
        <source
          src="/videos/jet_engine_animation_h264.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient"></div>
      {children}
    </div>
  );
}  