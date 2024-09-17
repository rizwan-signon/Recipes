import React, { Suspense, useMemo } from "react";
import useDataFetch from "../hooks/useDataFetch";
import { useOutletContext } from "react-router-dom";

const Recipe = React.lazy(() => import("./Recipe"));
const Content = () => {
  const { data } = useDataFetch();

  const { search } = useOutletContext<any>();

  const filterData = useMemo(() => {
    if (!search) {
      return data;
    }

    return data.filter((item) =>
      item?.name?.toLocaleLowerCase()?.includes(search.toLocaleLowerCase())
    );
  }, [data, search]);

  console.log({ search });
  return (
    <div className="content">
      {filterData.map((pizza) => (
        <Suspense key={pizza.id} fallback={<div>wait a s sec</div>}>
          <Recipe key={pizza.id} pizza={pizza} />
        </Suspense>
      ))}
      {filterData.length === 0 && (
        <div className="filter_data">
          <h3>Not Found</h3>
        </div>
      )}
    </div>
  );
};

export default Content;
