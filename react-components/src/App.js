import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Address from './Components/Profile/Address';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="head">
        <FullName />
        <ProfilePhoto />
      </div>
        <Address />
    </div>
  );
}

export default App;
