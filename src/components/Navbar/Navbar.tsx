import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const downloadApp = () => {
    window.open(
      "https://apps.apple.com/gb/app/gymzy-workout-tracker-notes/id6744414533",
      "_blank"
    );
  };

  return (
    <header
      className={`mb-5 px-5 py-3 sticky top-0 w-full z-10 transition-all  ${
        scrolled ? "bg-opacity-20 " : "bg-blue-300 bg-opacity-20"
      }  backdrop-blur-lg`}
    >
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link className="hover-animation-2" to="/">
          <img src="/gymzy.png" alt="GymZy logo" className="w-16" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>

          <Button
            className="hover:cursor-pointer hover:bg-blue-400  bg-blue-500 rounded-3xl"
            onClick={downloadApp}
          >
            Get
          </Button>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden p-2 "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <Menu />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-2 mt-3  p-4 rounded shadow">
          <Link to="/">Home</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Button
            className="hover:cursor-pointer hover:bg-blue-400  bg-blue-500 rounded-3xl"
            onClick={downloadApp}
          >
            Get
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
