import { use, useEffect, useState } from "react";
import { data } from "../utils/data";
import { filterContext } from "../utils/FilterProvider";

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
const itemsPerPage = 5;
const Table = () => {
  const [showCount, setShowCount] = useState<number>(0);
  const [dataFiltered, setDataFiltered] = useState<data[]>([]);
  const [dataToShow, setDataToShow] = useState<data[]>([]);
  const { sort, textFilter } = use(filterContext);
  useEffect(() => {
    setDataFiltered(
      data.filter((obj) => {
        return (
          obj.client.toLowerCase().startsWith(textFilter.name.toLowerCase()) &&
          obj.country
            .toLowerCase()
            .startsWith(textFilter.country.toLowerCase()) &&
          obj.email.toLowerCase().startsWith(textFilter.email.toLowerCase()) &&
          obj.project
            .toLowerCase()
            .startsWith(textFilter.project.toLowerCase()) &&
          obj.status.toLowerCase().startsWith(textFilter.status.toLowerCase())
        );
      })
    );
    setDataToShow(
      dataFiltered
        .sort((a: data, b: data) => {
          if (sort === "date") {
            // Convert DD/MM/YYYY to proper Date objects
            const [dayA, monthA, yearA] = a.date.split("/");
            const [dayB, monthB, yearB] = b.date.split("/");

            const dateA = new Date(+yearA, +monthA - 1, +dayA);
            const dateB = new Date(+yearB, +monthB - 1, +dayB);

            return dateA.getTime() - dateB.getTime();
          } else {
            if (a[sort as keyof data] < b[sort as keyof data]) return -1;
            if (a[sort as keyof data] > b[sort as keyof data]) return 1;
          }
          return 0;
        })
        .filter((_, ind) => {
          return ind >= showCount && ind < showCount + itemsPerPage;
        })
    );
  }, [
    showCount,
    sort,
    textFilter.name,
    textFilter.country,
    textFilter.email,
    textFilter.project,
    textFilter.status,
    dataFiltered,
  ]);
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
                <td>
                  <div className="w-full rounded overflow-hidden mx-auto h-2 bg-gray-500">
                    <div
                      className="bg-green-500 h-full"
                      style={{ width: obj.progress }}
                    ></div>
                  </div>
                  {obj.progress}
                </td>
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
          disabled={showCount + itemsPerPage >= dataFiltered.length}
          onClick={() => {
            setShowCount((prev) => prev + itemsPerPage);
          }}
        >
          Next
        </button>
        <p>
          Page <strong>{showCount / itemsPerPage + 1}</strong> of
          <strong className="ml-1.5">
            {Math.ceil(dataFiltered.length / itemsPerPage)}
          </strong>
        </p>
        <button
          className="bg-gray-600 rounded h-10 px-5 disabled:opacity-50"
          disabled={showCount <= 0}
          onClick={() => {
            setShowCount((prev) => prev - itemsPerPage);
          }}
        >
          Previous
        </button>
      </div>
    </>
  );
};

export default Table;
