import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-6 mt-10 items-center border-t bg-blue-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Links Section */}
            <div>
              <h3 className="font-bold text-xl mb-4" id="home">
                GymZy
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="flex">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="flex">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-col justify-items-end">
            <img
              src="/images/contact/appstore-light.svg"
              alt="App Store Badge"
              className="w-50"
            />
            <Link to="https://www.instagram.com/gym.zy/" target="blank">
              <div className="flex space-x-3">
                <p>Follow us on Instagram</p>
                <Instagram className="font-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm space-y-3">
          <p>
            &copy; {new Date().getFullYear()} Aleksandar Drakaliyski. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
