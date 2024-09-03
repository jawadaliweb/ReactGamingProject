import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


// ineterface for fetch genre response
interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        //abort controller 
        const abortController = new AbortController();
        setLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpint, { signal: abortController.signal })
            .then((res) => {
                setData(res.data.results)
                setLoading(false);
            })

            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setLoading(false);
            });

        return () => abortController.abort();
    }, []);
    // empty array means it will only run once

    return { data, error, isLoading };
}

export default useData;