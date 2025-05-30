import { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setIsVisible(scrollY > docHeight * 0.7);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 ml-3 bg-[#8B5CF6] hover:bg-[#6E59A5] rounded-full transition-all duration-300 ${
        isVisible ? 'text-xs px-3 py-1 h-8' : 'hidden'
      } text-white font-semibold shadow-md`}
    >
      Back to Top
    </button>
  );
};

export default BackToTop;
