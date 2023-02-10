const initState = {users:[
    {id:1, nom:"Meryem", prenom: "jamaili", filliere:"DD", age:19},
    {id:2, nom:"said", prenom:"benalni", filliere:"full stack", age:21}
]};
const reducer = (state=initState, action) => {
    switch(action.type){
        case "Add_user":
            return {...state, users:[...state.users, action.payload]}
        case "Update_user":
            const user = state.users.find((u)=>u.id==action.payload.id)
            if(user){
                user.nom = action.payload.nom
                user.prenom = action.payload.prenom
                user.filliere = action.payload.filliere
                user.age= action.payload.age
            }
            return state
        case "Delete_user":
            return{...state, users:[...state.users.filter((u)=>u.id!==action.payload)]}
        default:
            return state
    }
}
export default reducer