import Vv from "./cashback.svg";
import avatar_default from "./avatar_default.png";

function App() {
  console.log(process.env);
  return (
    <div>
      <img src={avatar_default} />
      <Vv style={{ color: "red" }} />
    </div>
  );
}

export default App;
