import { Dispatch, SetStateAction } from "react";
import { Blog } from "./MainContent";

const Modal = ({
  modalRef,
  setBlogs,
  type,
  data,
  selectedIndex,
}: {
  modalRef: React.RefObject<HTMLDialogElement | null>;
  setBlogs: Dispatch<SetStateAction<Blog[]>>;
  type: string;
  data?: Blog;
  selectedIndex?: number | null;
}) => {
  function addBlog(formData: FormData) {
    const blogData: Blog = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageURL: formData.get("imageURL") as string,
      date: new Date(formData.get("date") as string),
    };
    setBlogs((prev: Blog[]) => {
      return [...prev, blogData];
    });
  }
  function editBlog(formData: FormData, selectedIndex: number | null) {
    const blogData: Blog = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageURL: formData.get("imageURL") as string,
      date: new Date(formData.get("date") as string),
    };
    setBlogs((prev) => {
      return prev.map((blog, ind) => {
        return ind === selectedIndex ? blogData : blog;
      });
    });
  }
  return (
    <dialog
      className="mx-auto my-auto rounded-xl relative w-120 h-[65vh]"
      ref={modalRef}
    >
      <div className="flex bg-white flex-col flex-wrap p-8 pb-0 w-full">
        <form
          action={
            type == "new"
              ? addBlog
              : (formData) => {
                  editBlog(formData, selectedIndex ?? null);
                }
          }
          className="flex flex-col flex-wrap gap-3"
        >
          <h1 className="text-2xl font-semibold text-neutral-700">Add Blog</h1>
          <input
            type="text"
            placeholder="Title"
            className="mt-4 w-full input-text"
            name="title"
            defaultValue={data?.title || ""}
          />
          <textarea
            placeholder="Description"
            className="input-text"
            name="description"
            defaultValue={data?.description || ""}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="input-text"
            name="imageURL"
            defaultValue={data?.imageURL || ""}
          />
          <input
            type="date"
            className="input-text"
            name="date"
            defaultValue={
              data?.date ? new Date(data.date).toISOString().split("T")[0] : ""
            }
          />
          <div className="mt-5 inline-flex gap-3 w-full justify-end self-end">
            <button
              className="bg-blue-600 text-white rounded-lg px-4 py-2 cursor-pointer"
              type="submit"
              onClick={() => {
                modalRef.current!.close();
              }}
            >
              Add
            </button>
            <button
              className="bg-neutral-500 text-white rounded-lg px-4 py-2 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                modalRef.current!.close();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
        <button
          className="font-bold text-2xl absolute top-4 right-4  rounded-full w-7 h-7 flex justify-center items-center text-neutral-700 cursor-pointer"
          onClick={() => {
            modalRef.current!.close();
          }}
        >
          x
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
