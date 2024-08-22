import MouseHover from "./MouseHover";
import ChangeText from "./ChangeText";
import InputChange from "./InputChange";
import ToggleEvent from "./ToggleEvent";
import BasicCounter from "./BasicCounter";
import UserInputChange from "./MultipleStateVariables";
import BackgroundColor from "./BackgroundColor";
import LightAndDark from "./ToggleDarkLight";
import LikeUnlike from "./LikeUnlike";
import TogglePassword from "./TogglePassword";



function App() {
  return (
    <div className="App">
      
      <h2>Changing Paragraph</h2>
      <ChangeText />
      <br />

      <h2>Input Change</h2>
      <InputChange />
      <br />

      <h2>Background colour change</h2>
      <MouseHover />
      <br />

      <h2>Toggle Event</h2>
      <ToggleEvent />
      <br />

      <BasicCounter />
      <br />

      <UserInputChange />
      <br />

      <BackgroundColor />
      <br />

      <LightAndDark />
      <br />

      <LikeUnlike />
      <br />

      <TogglePassword />
      <br />

    </div>
  );
}

export default App;
