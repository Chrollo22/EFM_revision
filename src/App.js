import ListUsers from './ListUsers'
import AddUser from './AddUser'
import UpdateUser from './UpdateUser'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
const App = () => {
  return(
      <div>
        <BrowserRouter>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/add-user"><li>Add user</li></Link>
        </ul>
          <Routes>
            <Route path="/" element={<ListUsers />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/update-user/:id" element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}
export default App