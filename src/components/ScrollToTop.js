import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const checkScrollPosition = () => {
    if (window.pageYOffset > 1200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScrollButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:right-12 p-2 bg-white text-gray-800 rounded-full focus:outline-none hover:bg-gray-300 transition-colors duration-300"
        aria-label="Scroll to the top"
      >
        ↑
      </button>
    )
  );
}

export default ScrollToTop;
