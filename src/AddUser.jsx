import React from 'react'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {AddUserAction} from './actions'
function AddUser() {
  const count = useSelector(data=>data.users.length)
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [filliere, setFilliere] = useState("")
  const [age, setAge] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () =>{
    dispatch(AddUserAction({
        id:count+1,
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
        <button onClick={handleClick}>Envoyer</button>
    </div>
  )
}

export default AddUser