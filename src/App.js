import './App.css';
import ClickEventWithButton from './Components/ClickEventWithButton';
import Contact from './Components/Contact';
import FirstTestCase from './Components/FirstTestCase';
import InputBox from './Components/InputBox';
import InputBoxOnState from './Components/InputBoxOnState'

function App() {
  return (
    <div className="App">
      <Contact/>
      <FirstTestCase/>
      <InputBox/>
      <InputBoxOnState/>
      <ClickEventWithButton/>
    </div>
  );
}

export default App;
