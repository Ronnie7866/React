import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import DisplayCounter from "./components/DisplayCounter.jsx";
import Card from "./components/Card.jsx";
import { Controls } from "./components/Controls.jsx";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage.jsx";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <center className="px-4 py-5 my-5 text-center">
      <Card>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls />
        </div>
      </Card>
    </center>
  );
}

export default App;
