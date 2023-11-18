import "./App.css";
import Form from "./Components/Form";
import Movies from "./Components/Movies";

function App() {
  return (
    <>
      <div className="container mx-auto max-w-[100vh] p-8">
        <h1 className="text-[2.4rem] text-center">Movie Search</h1>
        <Form />
        <Movies />
      </div>
    </>
  );
}

export default App;
