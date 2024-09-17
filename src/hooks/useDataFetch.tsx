import { useState, useEffect } from "react";
import { IDummyData } from "../typings/data";

interface RecipeData {
  recipes: Array<IDummyData>;
}

const useDataFetch = () => {
  const [data, setData] = useState<Array<IDummyData>>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/recipes");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result: RecipeData = await res.json();
      setData(result.recipes);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useDataFetch;
