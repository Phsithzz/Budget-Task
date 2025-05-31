// icon
import { FaUserCircle } from "react-icons/fa";

const Profile = ({onUserClick}) => {

  return (
    <div className="w-fit bg-white rounded-xl px-4 py-2 shadow-md transition-all ease-in duration-200 hover:bg-black hover:text-white hover:shadow-lg">
      <button
      onClick={onUserClick}  
      type="button" className="flex items-center gap-2 cursor-pointer">
        <FaUserCircle className="text-2xl" />
        <span className="text-xl font-bold">My Profile</span>
      </button>
    </div>
  );
};

export default Profile;
