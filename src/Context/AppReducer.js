export default (state, action) => {
    switch(action.type) {

        case "GET_GOVERMENT":
            return{
               
               goverments: action.paylode.map(gover =>{
                 return(gover)  
               })
            }



       case "REMOVE_GOVERMENT":
     

           return {
               goverments: state.goverments.filter(goverment => {
               
                   return(goverment.id !== action.paylode)
                   
               })
           }
           case "ADD_GOVERMENT":
           
               return {
                  
                   goverments:[...state.goverments, action.paylode]
               }
            
           case "EDIT_GOVERMENT":
               const updateGoverment = action.paylode
               const updateGoverments =state.goverments.map(gover => {
                   if(gover.id === updateGoverment.id){
                       return updateGoverment
                   }
                   return gover
               })
               return {
                goverments: updateGoverments
            }
        default:
            
            return state
    }
}