import { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Banner = () => {
  const [url, setUrl] = useState<string>(
    "https://via.placeholder.com/1500x400"
  );
  return (
    <div className="w-full h-[240px] overflow-hidden">
      <img src={url} className="w-full h-full object-cover" />
      <input
        type="file"
        accept="image/*"
        id="BannerPhoto"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            setUrl(imageUrl);
          }
        }}
      />
      <label
        className="p-2 rounded-full bg-neutral-700 text-white absolute text-2xl top-2 right-2 cursor-pointer hover:bg-neutral-500"
        htmlFor="BannerPhoto"
      >
        <FaCamera />
      </label>
    </div>
  );
};

export default Banner;
