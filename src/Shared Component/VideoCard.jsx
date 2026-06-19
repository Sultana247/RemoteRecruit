import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import swiper from '../assets/videos/swiper3.mp4'
const VideoCard = () => {
    const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setPlaying(true);
  };
    return (
        <div className="relative rounded-md overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={swiper}
        className="w-full h-full object-cover"
        playsInline
        onEnded={() => setPlaying(false)}
      />

      {/* Dark Overlay */}
      {!playing && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <button
            onClick={handlePlay}
            className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center hover:scale-105 transition"
          >
            <FaPlay className="text-white text-lg ml-1" />
          </button>
        </div>
      )}
    </div>
    );
};

export default VideoCard;