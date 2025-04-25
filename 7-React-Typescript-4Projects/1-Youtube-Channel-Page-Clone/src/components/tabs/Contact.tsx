import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-8 px-5 bg-gray-100 rounded font-semibold">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <br />
      <div className="flex gap-10 flex-wrap">
        <div className="flex gap-2">
          <a
            href="https://web.facebook.com/profile.php?id=100008558268265"
            className="inline-flex justify-center items-center gap-3 hover:text-neutral-500"
          >
            <FaFacebook className="text-blue-600 text-2xl self-end" />
            <span className="self-start">Facebook</span>
          </a>
        </div>
        <div className="flex gap-2">
          <a
            href=""
            className="inline-flex justify-center items-center gap-3 hover:text-neutral-500"
          >
            <FaTwitter className="text-blue-500 text-2xl self-end" />
            <span className="self-start">Twitter</span>
          </a>
        </div>
        <div className="flex gap-2">
          <a
            href="https://www.youtube.com/@abdallah0010"
            className="inline-flex justify-center items-center gap-3 hover:text-neutral-500"
          >
            <FaYoutube className="text-red-600 text-2xl self-end" />
            <span className="self-start">Youtube</span>
          </a>
        </div>
        <div className="flex gap-2">
          <a
            href="https://github.com/AbdallahKhaledAhmed"
            className="inline-flex justify-center items-center gap-3 hover:text-neutral-500"
          >
            <FaGithub className="text-neutral-800 text-2xl self-end" />
            <span className="self-start">GitHub</span>
          </a>
        </div>
        <div className="flex gap-2">
          <a
            href=""
            className="inline-flex justify-center items-center gap-3 hover:text-neutral-500"
          >
            <FaInstagram className="text-purple-500 text-2xl self-end" />
            <span className="self-start">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
