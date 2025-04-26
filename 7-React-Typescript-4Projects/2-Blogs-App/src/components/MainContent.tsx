import { useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit, FaTrash, FaBookmark } from "react-icons/fa";
import Modal from "./Modal";

export type Blog = {
  title: string;
  description: string;
  imageURL: string;
  date: Date;
};

const MainContent = () => {
  const modal = useRef<HTMLDialogElement>(null);
  const editModal = useRef<HTMLDialogElement>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function deleteBlog(index: number) {
    setBlogs((prev) => {
      return prev.filter((_, ind) => ind !== index);
    });
  }
  return (
    <div className="w-17/24 flex flex-col h-full justify-center items-center mt-4 ">
      <Modal modalRef={modal} setBlogs={setBlogs} type="new" />
      <Modal
        modalRef={editModal}
        setBlogs={setBlogs}
        type="edit"
        selectedIndex={selectedIndex}
        data={selectedIndex !== null ? blogs[selectedIndex] : undefined}
      />
      <button
        className="bg-black rounded text-white flex justify-center items-center gap-2 px-4 py-2 cursor-pointer w-fit"
        onClick={() => {
          modal.current!.showModal();
        }}
      >
        Add New Blog <IoMdAddCircle />
      </button>
      <div className="w-full h-fit px-10 lg:px-50 md:px-20 pt-10 flex flex-col gap-4">
        {blogs.map((blog, ind) => {
          return (
            <div
              key={ind}
              className="shadow-lg flex px-10 py-3 rounded-xl w-full"
            >
              <img
                src={blog.imageURL || undefined}
                className="w-36 h-24 object-cover rounded shadow-md mr-5"
              />
              <div className="flex flex-col  w-full">
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                <div className="flex justify-between mt-auto h-fit">
                  <p className="small-text">
                    {blog.date.toString() === "Invalid Date"
                      ? ""
                      : blog.date.toLocaleDateString()}
                  </p>
                  <div className="flex gap-2">
                    <FaBookmark className="text-gray-500 cursor-pointer" />
                    <FaEdit
                      onClick={() => {
                        setSelectedIndex(ind);
                        editModal.current!.showModal();
                      }}
                      className="text-blue-500 cursor-pointer"
                    />
                    <FaTrash
                      className="text-red-500 cursor-pointer"
                      onClick={() => {
                        deleteBlog(ind);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainContent;
