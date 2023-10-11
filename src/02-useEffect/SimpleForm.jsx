import { useState, useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'strider',
        email:  'strider@google.com'
    });

    
    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value
        })
    };


    useEffect(() => {
    //   console.log('useEffect called');

    }, []);

    useEffect(() => {
        // console.log('formState change');

    }, [formState]);

    useEffect(() => {
        // console.log('email change');

    }, [email]);
    


    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                type="text" 
                className="form-control" 
                placeholder="Username" 
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input 
                type="email" 
                className="form-control mt-2" 
                placeholder="steve@google.com" 
                name="email"
                value={email}
                onChange={onInputChange}
            />

            
            {
                (username === 'strider2') && <Message></Message>
            }
        </>

    )
}

