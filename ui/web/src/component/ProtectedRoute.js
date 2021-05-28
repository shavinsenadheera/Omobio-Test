import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";

function ProtectedRoute(props){
    let Component = props.component;
    const history = useHistory()
    
    useEffect(()=>{
         if(!sessionStorage.getItem('login'))
         {
             history.push('/');
         }
    }, []);
    
    return(
        <Component />
    )
}

export default ProtectedRoute;