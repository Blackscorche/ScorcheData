import React from "react";

function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-3 right-[35px] text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Navigation Links */}
      {["Home", "About", "Services", "Contact"].map((item, index) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`font-semibold text-white my-4 transition-all duration-500 ${
            menuOpen
              ? "opacity-100 translate-y-0 delay-200"
              : "opacity-0 translate-y-5"
          }`}
          tabIndex={menuOpen ? "0" : "-1"}
        >
          {item}
        </a>
      ))}
    </div>
  );
}

export default MobileMenu;
