interface BackgroundProps {
    children: React.ReactNode;
  }
  
  export function Background({ children }: BackgroundProps) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-hero bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient"></div>
        </div>
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    );
  }