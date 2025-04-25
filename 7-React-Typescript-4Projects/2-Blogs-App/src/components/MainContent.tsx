import { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";

const MainContent = () => {
  const modal = useRef<HTMLDialogElement>(null);
  return (
    <div className="w-17/24 flex flex-col h-full justify-center items-center mt-4 ">
      <dialog
        className="mx-auto my-auto rounded-xl relative w-120 h-[65vh]"
        ref={modal}
      >
        <div className="flex bg-white flex-col flex-wrap p-8 pb-0 w-full gap-3">
          <h1 className="text-2xl font-semibold text-neutral-700 absolute top-10">
            Add Blog
          </h1>
          <input
            type="text"
            placeholder="Title"
            className="mt-15 w-full input-text"
          />
          <textarea placeholder="Description" className="input-text" />
          <input type="text" placeholder="Image URL" className="input-text" />
          <input type="date" className="input-text" />

          <div className="mt-5 inline-flex gap-3 w-full justify-end self-end">
            <button className="bg-blue-600 text-white rounded-lg px-4 py-2 cursor-pointer">
              Add
            </button>
            <button
              className="bg-neutral-500 text-white rounded-lg px-4 py-2 cursor-pointer"
              onClick={() => {
                modal.current!.close();
              }}
            >
              Cancel
            </button>
          </div>
          <button
            className="font-bold absolute top-4 right-4  rounded-full w-7 h-7 flex justify-center items-center text-neutral-700 cursor-pointer"
            onClick={() => {
              modal.current!.close();
            }}
          >
            X
          </button>
        </div>
      </dialog>
      <button
        className="bg-black rounded text-white flex justify-center items-center gap-2 px-4 py-2 cursor-pointer w-fit"
        onClick={() => {
          modal.current!.showModal();
        }}
      >
        Add New Blog <IoMdAddCircle />
      </button>
    </div>
  );
};

export default MainContent;
