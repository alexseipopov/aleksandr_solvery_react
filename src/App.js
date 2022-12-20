import FetchApi from "./components/FetchApi";
import Post from "./components/Post/Post";

function App() {
  return (
    <div>
      <Post button = "Это кнопка" text = "Some text" id='post-button'/>
      <FetchApi/>
    </div>
  );
}

export default App;
