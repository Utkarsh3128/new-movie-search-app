import { createContext, useContext, useReducer, useEffect } from "react";

const AppContext = createContext(); // context creation

const initialState = {
  query: "spiderman",
  results: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return {
        ...state,
        results: action.payload.results,
      };
    case "SET_MOVIE":
      return {
        ...state,
        query: action.payload,
      };
  }
  return state;
};

// Provider function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovie = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      dispatch({
        type: "GET_MOVIE",
        payload: {
          results: data.results,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setMovie = (searchMovie) => {
    dispatch({
      type: "SET_MOVIE",
      payload: searchMovie,
    });
  };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d3d2087aece245a3e20278d186aa6d46&language=en-US&query=${state.query}&page=1`;
    fetchMovie(url);
  }, [state.query]);

  return (
    <AppContext.Provider value={{ ...state, setMovie }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
