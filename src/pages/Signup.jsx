import React, { useState } from 'react'
import Helmet from '../Components/Helmet'
import {Container, Row, Col, FormGroup, Form} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'



const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signup = async (e) => {
        e.preventDefault()

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = await userCredential.user
            console.log(user);
            
        } catch (error) {
            setLoading(false)
            console.error('something went wrong');
        }
    }

  return (
   <Helmet title='Signup'>
    <section>
        <Container>
            <Row>
                <Col>
                <h3>Signup</h3>
                <Form className='auth__form' onSubmit={signup} >
                    <FormGroup className='auth__form'>
                        <input type="text" placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                         />
                    </FormGroup>
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
                    <FormGroup className='auth__form'>
                        <input type="file" 
                        onChange={(e) => setFile(e.target.files[0])}
                        />
                    </FormGroup>

                    <button type='submit' className='auth_btn'>Create an Account</button>
                    <p>Already have an account?{''} <Link to='/login'>Login</Link></p>
                </Form>
                </Col>
            </Row>
        </Container>
       
    </section>

   </Helmet>
  )
}

export default Signup;