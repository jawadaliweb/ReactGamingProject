import useData from "./UseData";

// genre interface
export interface Genre {
    id: number;
    name: string;
}

const useGenre = () => useData<Genre>('/genres'); {
}

export default useGenre;