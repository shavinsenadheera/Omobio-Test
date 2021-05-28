import React, {useState} from "react";
import {
    Alert,
    Button,
    Card,
    Form,
    FormControl,
    FormGroup,
    FormLabel
} from "react-bootstrap";
import {useForm} from "react-hook-form";
import axios from "axios";

function Login(props){
    
    const [ success, setSuccess ] = useState()
    const [ fail, setFail ] = useState()
    const { register, handleSubmit, formState:{errors} } = useForm()
    
    const onLogin=(data)=>{
        axios
        .post(`http://localhost/Omobio-Test/bizlogic/api/Login/Login.php`, JSON.stringify(data))
        .then((res)=>{
            setSuccess(res.data);
            setFail('');
            sessionStorage.setItem('login', true);
            props.history.push('/users');
        })
        .catch((err)=>{
            setSuccess('');
            setFail(err.response.data);
        });
    }
    
    return(
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 offset-xl-3 offset-lg-3 offset-md-3 offset-sm-3 mt-5">
            
            {
                success && <Alert variant={"success"}>{success}</Alert>
            }
            {
                fail && <Alert variant={"danger"}>{fail}</Alert>
            }
            
            <Form onSubmit={handleSubmit(onLogin)}>
                <Card>
                    <Card.Header>
                        Login Here
                    </Card.Header>
                    <Card.Body>
                        <FormGroup>
                            <FormLabel>Username</FormLabel>
                            <FormControl
                                type={"text"}
                                name={"username"}
                                {...register("username", {required:true})}
                            />
                            {errors.username && errors.username.type==="required" && <p className="text-danger">Username is required!</p>}
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                type={"password"}
                                name={"password"}
                                {...register("password", {required:true})}
                            />
                            {errors.password && errors.password.type==="required" && <p className="text-danger">Password is required!</p>}
                        </FormGroup>
                    </Card.Body>
                    <Card.Footer>
                        <FormGroup>
                            <Button type={"submit"} variant={"primary"} size={"sm"}>Login</Button>
                        </FormGroup>
                    </Card.Footer>
                </Card>
            </Form>
        </div>
    )
}

export default Login;