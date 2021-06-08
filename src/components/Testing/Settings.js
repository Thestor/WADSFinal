import { render } from "@testing-library/react";
import React, {Component} from "react";



export default function Settings() {

    const [error,setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        
            <div>
                <h2>SETTINGS</h2>
                <p>This is where the Settings go</p>
                <ol>
                    <li>settings1</li>
                    <li>settings1</li>
                    <li>settings1</li>
                    <li>settings1</li>
                    <li>settings1</li>
                </ol>
            </div>
        );
    
}


