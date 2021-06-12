import React, {useRef,useState} from "react"
import {Form,Button,Card,Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext";
import { Link, useHistory, NavLink } from "react-router-dom"

export default function Settings() {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail, logout } = useAuth()
    const [error,setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match!')
        }

        const promises = []
        setLoading(true)
        setError('')
        
        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('failed to update')
        }).finally(() => {
            setLoading(false)
        })
        
    }

    async function handleLogout(){
        setError('')
        try {
            await logout()
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        
        <>
            <Card>
            <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong> {currentUser.email}
            <NavLink to="/update-profile" className='btn btn-primary w-100 mt-3'>Update Profile</NavLink>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div>
        </>
    )
}
