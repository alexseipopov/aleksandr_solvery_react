import Post from "./components/Post/Post";

function App() {
  return (
    <div>
      <Post button = "Это кнопка" text = "Some text"/>
      <Post button = "Это кнопка другая" text = "Some text for test"/>
      {/* <Post data={{"button": "Это кнопка другая", "text": "Some text for test"}} /> */}
    </div>
  );
}

export default App;
