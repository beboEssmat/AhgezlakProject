import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {ListGroup, ListGroupItem, Button}from 'reactstrap'
import {GlobalContext}from '../Context/GlobalState';
//import axios from 'axios';
export const GovermentList = () => {
    const {goverments, removeUser} = useContext(GlobalContext)
   // const [gover, setName] = useState();
  
    return (
       <ListGroup>
         {goverments.length > 0 ?(
           <>
           {goverments.map(gover => {
             return  <ListGroupItem className="d-flex" key={Math.random()}>
               <strong>{gover.name}</strong>
               <div className="ml-auto" style={{marginLeft:"auto"}}>
                    <Link to={`editGoverment/${gover.id}`} className="btn btn-warning mr-5">Edit</Link>{' '}
                    <Button color="danger" onClick={ () =>removeUser(gover.id)}>Delete</Button>
               </div>
           </ListGroupItem>
         })}
           </>
         ) : (<h4 className="text-center">No Goverment</h4>)}
       </ListGroup>
    )
}
