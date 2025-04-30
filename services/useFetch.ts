import { useEffect, useState } from "react";

export default function useFetch<T>(
  fetchFUnction: () => Promise<T>,
  autofetch = true,
  deps: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFUnction();
      setData(result);
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error("An error occurred.")
      );
    } finally {
      setLoading(false);
    }
  };
  const reset = ()=>{
    setError(null)
    setLoading(false)
    setData(null)
  }

  useEffect(()=>{
    if(autofetch){
        fetchData()
    }
  },deps)

  return {data, refetch:fetchData, reset, loading, error}
}
