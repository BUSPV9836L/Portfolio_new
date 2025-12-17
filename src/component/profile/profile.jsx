import profile from "../../assets/newprofile.avif";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { AnimatedButton } from "../comman";

const socialDetails = [
  { url: "", icon: FaInstagram },
  { url: "", icon: SlSocialLinkedin },
  { url: "", icon: FiGithub },
  { url: "", icon: FiTwitter },
];

const Profile = () => {
  const navigate=useNavigate()
  return (
    <div className="h-full w-full flex items-start justify-center mb-10">
      <div
        className="w-[90%] min-w-85 sm:min-w-100 flex flex-col items-center noise-bg rounded-2xl px-6 py-10"
        style={{ "--bg-base": "#121111" }}
      >
        
        <div className="w-56 h-56 mb-4 rounded-xl overflow-hidden">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-3xl font-semibold text-white tracking-wide">
          Bipin Vishwakarma
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Product Designer & Software Developer
        </p>

        <p className="text-xs text-gray-500 mt-1">Marashtra, India</p>

        <ul className="flex mt-8 gap-8">
          {socialDetails.map(({ url, icon: Icon }, index) => (
            <li key={index} className="text-xl text-gray-300 hover:text-white">
              <Link to={url}>
                <Icon />
              </Link>
            </li>
          ))}
        </ul>

        <AnimatedButton text="Let's Talk" className="mt-8" onClick={()=>{navigate("/contacts")}} />
      </div>
    </div>
  );
};

export default Profile;
