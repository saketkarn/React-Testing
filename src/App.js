import './App.css';
import ClickEventWithButton from './Components/ClickEventWithButton';
import Contact from './Components/Contact';
import FirstTestCase from './Components/FirstTestCase';
import InputBox from './Components/InputBox';
import InputBoxOnState from './Components/InputBoxOnState'
import MultipleButtons from './Components/MultipleButtons';
import SnapshotComponent from './Components/SnapshotComponent';
import Label from './Components/Label';

function App() {
  return (
    <div className="App">
      <Contact/>
      <FirstTestCase/>
      <InputBox/>
      <InputBoxOnState/>
      <ClickEventWithButton/>
      <SnapshotComponent/>
      <MultipleButtons/>
      <Label/>
    </div>
  );
}

export default App;
