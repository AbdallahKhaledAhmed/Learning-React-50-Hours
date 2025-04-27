import React, { createContext, ReactNode, useState } from "react";

export type FilterType = {
  name: string;
  country: string;
  email: string;
  project: string;
  status: string;
};

type ExportType = {
  sort: string;
  setSortFilter: React.Dispatch<string>;
  textFilter: FilterType;
  setTextFilter: React.Dispatch<FilterType>;
};

const filterContext = createContext<ExportType>({
  sort: "",
  setSortFilter: () => {},
  textFilter: { name: "", country: "", email: "", project: "", status: "" },
  setTextFilter: () => {},
});

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [sortFilter, setSortFilter] = useState<string>("");
  const [textFilter, setTextFilter] = useState<FilterType>({
    name: "",
    country: "",
    email: "",
    project: "",
    status: "",
  });
  return (
    <filterContext.Provider
      value={{
        sort: sortFilter,
        setSortFilter: setSortFilter,
        textFilter: textFilter,
        setTextFilter: setTextFilter,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export { FilterProvider, filterContext };
