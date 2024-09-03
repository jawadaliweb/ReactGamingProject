import useData from "../hooks/UseData";
import useGenre, { Genre } from "../hooks/useGenre";
export const GenerList = () => {
  const { data, error, isLoading } = useGenre();
  return (
    <div className="sidebar">
      {data.map((data) => (
        <div key={data.id} className="data-item">
          {data.name}
        </div>
      ))}
    </div>
  );
};
