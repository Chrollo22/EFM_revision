import React from 'react'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {UpdateUserAction} from './actions'
function UpdateUser() {
  const {id} = useParams()
  const user = useSelector(data=>data.users.find((u)=>u.id==id))
  const [nom, setNom] = useState(user.nom)
  const [prenom, setPrenom] = useState(user.prenom)
  const [filliere, setFilliere] = useState(user.filliere)
  const [age, setAge] = useState(user.age)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () =>{
    dispatch(UpdateUserAction({
        id:id,
        nom:nom,
        prenom:prenom,
        filliere:filliere,
        age:age
    }))
    navigate("/")
  }
  return (
    <div>
        <label>Nom</label>
        <input type="text" onChange={(e)=>setNom(e.target.value)} value={nom}/><br/>
        <label>Prenom</label>
        <input type="text" onChange={(e)=>setPrenom(e.target.value)} value={prenom}/><br/>
        <label>Filliere</label>
        <input type="text" onChange={(e)=>setFilliere(e.target.value)} value={filliere}/><br/>
        <label>Age</label>
        <input type="text" onChange={(e)=>setAge(e.target.value)} value={age}/><br/>
        <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default UpdateUser