import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className=" lg:ml-10 mx-4 w-20" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a
          href="https://www.linkedin.com/in/anshumansinh-kumpavat-071370283/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Anshumansinh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
                
            </div>
        </nav>
    );
};

export default Navbar;