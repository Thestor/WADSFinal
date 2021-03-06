import React, {useRef,useState} from "react"
import {Form,Button,Card,Alert} from "react-bootstrap"
import { Link } from "react-router-dom"
import {useAuth} from "../contexts/AuthContext";

export default function ForgotPassword() {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [message,setMessage] = useState("")
    const [error,setError] = useState("")
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
        
    }

    return (
        <>
            
            <Form onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
            </Form>
            <div className="w-100 text-center mt-3">
                <Link to='/login'>Log In</Link>
            </div>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    )
}
