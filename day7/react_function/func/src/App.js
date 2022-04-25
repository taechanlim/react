import logo from './logo.svg';
import './App.css';

import State from './Components/State/State.jsx'
import Effect from './Components/Effect/Effect.jsx'
import Login from './Components/Login/Login.jsx'
import Props from './Components/props/Props';

const App = () => {
  return (
    <div>
      <h1>state</h1>
      <State />
      <h1>effect</h1>
      <Effect />
      <h1>login</h1>
      <Login />
      <h1>props</h1>
      <Props 
      value="데이터전달해줌"
      />
    </div>
  );
}

export default App;
