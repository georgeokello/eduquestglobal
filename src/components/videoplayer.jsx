import { useEffect, useRef } from "react";

export default function VideoPlayer({
  src,
  className = "",
  rounded = "rounded-2xl",
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.6, // plays when 60% visible
      }
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <div
      className={`overflow-hidden shadow-xl bg-black ${rounded} ${className}`}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain scale-90"
        loop
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}