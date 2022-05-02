import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
import Index from './pages/index/index.jsx'
import Counter from './pages/counter/index.jsx'
import Comment from './pages/comment/index.jsx'
import Login from './pages/login/index.jsx'
import Header from './components/common/header.jsx'

function App() {
  return (
      <Router>
          <Header />
          <Routes>
            <Route path="/" index={true} element={<Index />} /> {/*index={true}속성값은 맨처음 보여줄 컴포넌트를 지정해줌*/}
            <Route path="/counter" element={<Counter />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
  );
}

export default App;
