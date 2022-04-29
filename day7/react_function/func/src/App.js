// import logo from './logo.svg';
import './App.css';

import State from './Components/State/State.jsx'
import Effect from './Components/Effect/Effect.jsx'
import Login from './Components/Login/Login.jsx'
import Props from './Components/props/Props.jsx';
import Form from './Components/Join/Form1.jsx';
import Callback from './Components/Callback/Callback';
import Context from './Components/Context/Context';
import Reduce from './Components/Reducer/Reduce';
import Comment from './Components/Comment/Comment';

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
      <h1>Join</h1>
      <Form />
      <h1>Callback</h1>
      <Callback />
      <h1>Context</h1>
      <Context />
      <h1>Reduce</h1>
      <Reduce />
      <h1>Comment</h1>
      <Comment />
    </div>
  );
}

export default App;
