import React from "react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const FloatingButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-md bg-orange-500 text-white shadow-lg
      flex items-center justify-center transition-all duration-300
      hover:bg-orange-600 hover:scale-110 cursor-pointer
      ${
        showButton
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}>
      <FaArrowUp />
    </button>
  );
};

