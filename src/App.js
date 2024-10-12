import {Routes,Route} from 'react-router-dom';
import PostLists from './pages/PostLists';
import Post from './pages/Post';
import PostEdit from './pages/PostEdit';

function App() {
  console.log("App")
  return (
    <div >
       <h1>hai da ajay</h1>
      <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />              
        <Route path="/post/:id/edit" element={<PostEdit />} />        

      </Routes>
    </div>
  );
}

export default App;
