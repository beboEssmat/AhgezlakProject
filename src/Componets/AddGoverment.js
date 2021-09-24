import React, {useContext} from 'react'
import {Form, FormGroup, Label,Input, Button} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import {GlobalContext}from '../Context/GlobalState';
import {Formik} from 'formik';
import * as Yap from 'yup';
//import {v4 as uuid} from 'uuid'

export const AddGoverment = () => {
  const {addUser} = useContext(GlobalContext)
  const history = useHistory()
  //const [name, setName] = useState();

 

  const handleSubmitForm = async (values, obj) => {
    //console.log(obj)
      const res = await saveData (values);
      if(res) {
      //  console.log(values)
        obj.resetForm();
      }
  };

 const  saveData = (values) => {
  // console.log(values)
   const nweGoverment = {
    // id:uuid(),
     name:values.Goverment
   }
   addUser(nweGoverment )
  
    history.push('/')
  }


    return (
      <Formik
        initialValues={{Goverment:""}}
       // validate={validate}
       validationSchema={Yap.object().shape({
         Goverment: Yap.string().required('Requierd').min(3,'min').max(10, 'max')
       })}
        onSubmit={handleSubmitForm}
      >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
            <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-2">
                  <Label>Name</Label>
                <Input type="text" name="Goverment" placeholder="Enter Your Goverment" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Goverment}
                className={
                  !errors.Goverment && touched.Goverment 
                  ? "border-success" 
                  : errors.Goverment && touched.Goverment 
                  ? "border-danger" 
                  :""
                }
                ></Input>
                {errors.Goverment && touched.Goverment ? (<small className="text-danger p-1">{errors.Goverment} </small>):("")}
            </FormGroup>
            <Button type="submit" color="primary" disabled={isSubmitting}>Save</Button>{' '}
            <Link to="/" className="btn btn-danger mr-2">Cancel</Link>
        </Form>
        )}
       
      </Formik>
      
    )
}
