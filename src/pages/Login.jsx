import React, { useState } from 'react'
import Helmet from '../Components/Helmet'
import {Container, Row, Col, FormGroup, Form} from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { ToastContainer, toast } from 'react-toastify'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signIn = async (e) => {
        e.preventDefault()
        setLoading(true)


        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            console.log(user);
            setLoading(false)
            toast.success('Successfuly logged in');
            navigate('/')
            
        } catch (error) {
            setLoading(false)
            toast.error(error.message);
            
        }


    }

  return (
   <Helmet title='Login'>
    <section>
        <Container>
            <Row>
             {
                loading ? ( <Col><h5>Loading....</h5></Col>) : (
                <Col>
                <h3>Login</h3>
                <Form className='auth__form' onSubmit={signIn}>
                    <FormGroup className='auth__form'>
                        <input type="email" placeholder='Enter yor email'
                         value={email} 
                         onChange={(e) => setEmail(e.target.value)}
                         />
                    </FormGroup>
                    <FormGroup className='auth__form'>
                        <input type="password" placeholder='Enter yor password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>

                    <button type='submit' className='auth_btn' onClick={signIn}>Login</button>
                    <ToastContainer/>
                    <p>Don't have an account?{''} <Link to='/signup'>Create an account</Link></p>
                </Form>
                </Col>
                )
             }
            </Row>
        </Container>
       
    </section>

   </Helmet>
  )
}

export default Login