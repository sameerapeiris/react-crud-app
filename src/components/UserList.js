import React,{useContext} from 'react'
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'



const UserList = () => {
    
    const {users} = useContext(GlobalContext)
    console.log(users);

    return (
    
           <React.Fragment>
               {users.map((user, index) => (
                     <ListGroup id ={index} key={user.id} className={`mt-4`}>
                     <ListGroupItem className={`d-flex`}>
                         <h5>{user.name}</h5>
                         <div className={`ml-auto`}>
                             <Link className={`btn btn-warning mr-1`} to="/edit/1">Edit</Link>
                             <Button color={`danger`}>Delete</Button>
                         </div>
                     </ListGroupItem>
                 </ListGroup>
               ))}
           </React.Fragment>

    )
}

export default UserList
