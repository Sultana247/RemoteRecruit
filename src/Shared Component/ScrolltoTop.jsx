import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrolltoTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrolltoTop}
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-12
            h-12
            rounded-full
            bg-orange-500
            text-white
            shadow-lg
            flex
            items-center
            justify-center
            hover:scale-110
            transition-all
            duration-300
          "
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrolltoTop;