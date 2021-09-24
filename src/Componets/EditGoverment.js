import React, {useContext, useState, useEffect} from 'react'
import {Form, FormGroup, Label,Input, Button} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import {GlobalContext}from '../Context/GlobalState';
 

export const EditGoverment = (props) => {
    const {goverments, editUser} = useContext(GlobalContext)
    const history = useHistory()
    const currentGovermentID = props.match.params.id
    
     const [selectedName, setselectedName] = useState({
        id:'',
        name:''
    });
     useEffect(() => {
         const govermentID = currentGovermentID
         const selectedGoverment = goverments.find(gover => gover.id ===  Number(govermentID)  )
         setselectedName(selectedGoverment)
     }, [currentGovermentID , goverments])
    
  
   const  editData = () => {
     editUser(selectedName)
      
      history.push('/')
    }

    const onChange = (e) => {
        setselectedName({...selectedName, [e.target.name]: e.target.value})
    }

    return (
        <Form onSubmit={editData}>
        <FormGroup className="mb-2">
              <Label>Name</Label>
            <Input type="text" name="name" placeholder="Enter Your Goverment" value={selectedName.name}  onChange={onChange}></Input>
        </FormGroup>
        <Button type="submit" color="primary">Update</Button>{' '}
        <Link to="/" className="btn btn-danger mr-2">Cancel</Link>
    </Form>
    )
}
