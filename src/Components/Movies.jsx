import { useGlobalContext } from "./Find";

const Movies = () => {
  const { results } = useGlobalContext();
  return (
    <div>
      {results.map((movie) => {
        return (
          <div key={movie.id} className="my-3 mx-auto w-[600px]">
            <div className="rounded-xl py-3 px-3 mb-8 bg-gradient-to-tr from-blue-800 to-indigo-500">
              <div className="movie--img">
                <img
                  className=" mx-auto w-[250px]"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                />
              </div>
              <div className="movie--content px-4 text-white">
                <h3 className="movie--title mb-2 text-center font-bold text-[2rem] ">
                  {movie.title}
                </h3>
                <div className="flex justify-between items-center my-5">
                  <div className="text-[1.2rem] font-medium ">
                    Release Date: <span className="text-[1rem]">{movie.release_date}</span>
                  </div>
                  <div className="text-[1.2rem] font-medium">
                    Rating: {movie.vote_average}
                  </div>
                </div>
                <p className="card--description text-[1.2rem] ">
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
