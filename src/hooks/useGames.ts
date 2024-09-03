import useData from "./UseData";
export interface Game {
    id: number;
    name: string;
    released: string;
    tba: string;
    background_image: string;
    rating: number;
    parent_platforms: { platform: platform }[];
    metacritic: number;
}

export interface platform {
    id: number;
    name: string;
    slug: string;
}

const useGames = () => useData<Game>('/games'); {

}

export default useGames;