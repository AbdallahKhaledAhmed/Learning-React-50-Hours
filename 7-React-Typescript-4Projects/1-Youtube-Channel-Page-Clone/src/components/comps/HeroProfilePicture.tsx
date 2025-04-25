import { useState } from "react";
import { FaCamera } from "react-icons/fa";

const HeroProfilePicture = () => {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/100");
  return (
    <div>
      <div className="border overflow-hidden rounded-full w-40 h-40 relative flex">
        <img src={avatar} className="w-full h-full object-cover" />
        <input
          type="file"
          accept="image/*"
          id="ProfilePhoto"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const avatarurl = URL.createObjectURL(e.target.files[0]);
              setAvatar(avatarurl);
            }
          }}
        />
        <label
          htmlFor="ProfilePhoto"
          className="p-2 rounded-full bg-neutral-700 text-white text-2xl absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer hover:bg-neutral-500"
        >
          <FaCamera />
        </label>
      </div>
    </div>
  );
};

export default HeroProfilePicture;
