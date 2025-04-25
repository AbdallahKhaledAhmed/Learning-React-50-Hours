import { IoPersonCircle } from "react-icons/io5";

const Person = ({ name, follow }: { name: string; follow: boolean }) => {
  return (
    <div className="inline-flex items-center w-full justify-between">
      <div className="inline-flex items-center justify-center gap-4">
        <IoPersonCircle className="text-gray-600 text-4xl" />
        {name}
      </div>
      <button
        className={`px-4 py-1 rounded-2xl cursor-pointer   ${
          follow
            ? "text-white bg-black hover:bg-neutral-700"
            : "text-neutral-700 bg-neutral-200 hover:bg-neutral-300"
        } `}
      >
        {follow ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default Person;
