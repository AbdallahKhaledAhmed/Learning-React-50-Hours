import { useEffect, useState } from "react";
import { data } from "../utils/data";

type data = {
  client: string;
  country: string;
  email: string;
  project: string;
  progress: string;
  status: string;
  date: string;
  image: string;
};

const Table = () => {
  const [showCount, setShowCount] = useState<number>(0);
  const [dataToShow, setDataToShow] = useState<data[]>([]);
  useEffect(() => {
    setDataToShow(
      data.filter((_, ind) => {
        return ind >= showCount && ind < showCount + 5;
      })
    );
  }, [showCount]);
  return (
    <>
      <table className="border-2 bg-gray-900 mr-5 border-gray-700 w-full">
        <thead>
          <th>Image</th>
          <th>Name</th>
          <th>Country</th>
          <th>Email</th>
          <th>Project Name</th>
          <th>Task Progress</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {dataToShow.map((obj, ind) => {
            return (
              <tr key={ind}>
                <td>
                  <img
                    src={obj.image}
                    className="object-cover rounded-full w-12 h-12"
                  />
                </td>
                <td>{obj.client}</td>
                <td>{obj.country}</td>
                <td>{obj.email}</td>
                <td>{obj.project}</td>
                <td>{obj.progress}</td>
                <td>
                  <span
                    className={obj.status === "Completed" ? "completed" : ""}
                  >
                    {obj.status}
                  </span>
                </td>
                <td>{obj.date}</td>
                <td>...</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center gap-5 flex-row-reverse m-5">
        <button
          className="bg-gray-600 rounded h-10 px-5 disabled:opacity-50"
          disabled={showCount + 5 >= data.length}
          onClick={() => {
            setShowCount((prev) => prev + 5);
          }}
        >
          Next
        </button>
        <p>
          Page <strong>{showCount / 5 + 1}</strong> of{" "}
          <strong>{Math.ceil(data.length / 5)}</strong>
        </p>
        <button
          className="bg-gray-600 rounded h-10 px-5 disabled:opacity-50"
          disabled={showCount <= 0}
          onClick={() => {
            setShowCount((prev) => prev - 5);
          }}
        >
          Previous
        </button>
      </div>
    </>
  );
};

export default Table;
