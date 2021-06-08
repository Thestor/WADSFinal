import React, {useState} from 'react'
import {Card, Button, Alert, Navbar, Nav} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom"


export default function Dashboard() {

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
    <>
        {/* <HashRouter>
            <div>
                <h1>BuqMarq</h1>
                <ul className="header">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/tags">Tags</NavLink></li>
                    <li><NavLink href="/folders">Folders</NavLink></li>
                    <li><NavLink href="/settings">Settings</NavLink></li>
                </ul>

                <div className="content">

                </div>
            </div>
        </HashRouter> */}
        
        
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Dashboard</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong> {currentUser.email}
            <Link to='update-profile' className='btn btn-primary w-100 mt-3'>Update Profile</Link>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div>
    </>
    )
}
