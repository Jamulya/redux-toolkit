import React, { useState } from 'react'
import Helmet from '../Components/Helmet'
import {Container, Row, Col, FormGroup, Form} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const signIn = async (e) => {
        e.preventDefault()
        setLoading(true)


        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            console.log(user);
            setLoading(false)
            console.log('Successfuly logged in');
            
        } catch (error) {
            setLoading(false)
            console.error(error.message);
            
        }


    }

  return (
   <Helmet title='Login'>
    <section>
        <Container>
            <Row>
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

                    <button type='submit' className='auth_btn'>Login</button>
                    <p>Don't have an account?{''} <Link to='/signup'>Create an account</Link></p>
                </Form>
                </Col>
            </Row>
        </Container>
       
    </section>

   </Helmet>
  )
}

export default Login