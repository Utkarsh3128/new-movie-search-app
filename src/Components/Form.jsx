import { useGlobalContext } from "./Find";

const Form = () => {
  const { movie, setMovie } = useGlobalContext();

  return (
    <>
      <div className="px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-evenly"
        >
          <input
            type="text"
            value={movie}
            placeholder="Search Movie"
            onChange={(e) => setMovie(e.target.value)}
            className="px-4 py-2 border-black border-2 rounded-3xl w-[400px]"
          />
        </form>
      </div>
    </>
  );
};

export default Form;
