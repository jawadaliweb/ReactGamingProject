import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Game {
    id: number;
    name: string;
    released: string;
    tba: string;
    background_image: string;
    rating: number;
    parent_platforms: { platform: platform }[];
}

interface GameResponse {
    count: number;
    results: Game[];
}

export interface platform {
    id: number;
    name: string;
    slug: string;
}

const useGames = () => {
    const [games, setGame] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {

        //abort controller 
        const abortController = new AbortController();

        apiClient
            .get<GameResponse>("/games", { signal: abortController.signal })
            .then((res) => setGame(res.data.results))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
            });

        return () => abortController.abort();
    }, []);
    // empty array means it will only run once

    return { games, error };
}

export default useGames;