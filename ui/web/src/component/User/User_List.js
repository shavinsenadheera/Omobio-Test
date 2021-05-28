import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    Alert,
    Button,
    Table
} from "react-bootstrap";
import {useHistory} from "react-router-dom";

function User_List(props){
    
    const [ users, setUsers ] = useState([])
    const [ fail, setFail ] = useState()
    const history = useHistory()
    
    useEffect(()=>{
        axios
        .get(`http://localhost/Omobio-Test/bizlogic/api/Users/User_Index.php`)
        .then((res)=>{
            setUsers(res.data);
            setFail('');
        })
        .catch((err)=>{
            setUsers([]);
            setFail(err.response.data);
        });
    }, []);
    
    
    const onLogout=()=>{
        sessionStorage.clear();
        history.push('/');
    };
    
    return(
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 offset-xl-3 offset-lg-3 offset-md-3 offset-sm-3 mt-5">
            {
                fail && <Alert variant={"danger"}>{fail}</Alert>
            }
            <div>
                <Button onClick={()=>onLogout()} variant={"danger"} size={"sm"}>Logout</Button>
            </div>
            <div className={"mt-5 table-responsive"}>
                <Table className={"table table-hover table-borderless table-striped"}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(data=>(
                           <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                           </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default User_List;