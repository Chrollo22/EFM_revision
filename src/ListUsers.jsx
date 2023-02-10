import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {DeleteUserAction} from './actions'
import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap'
function ListUsers() {
  const users = useSelector(data=>data.users)
  const dispatch = useDispatch()
  const DeleteData = (id) => {dispatch(DeleteUserAction(id))}
  return (
    <div style={{margin: "40px"}}>
        <h1>Liste des utilisateurs :</h1>
        <Table striped variant="secondary" style={{width:"75%", margin:"auto"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Filliere</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>{return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.nom}</td>
                        <td>{user.prenom}</td>
                        <td>{user.filliere}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link to={`/update-user/${user.id}`}><button>Edit</button></Link>
                            <button onClick={()=>DeleteData(user.id)}>Delete</button>
                        </td>
                    </tr>
                )})}
            </tbody>
        </Table>
    </div>
  )
}

export default ListUsers