import React, { useState } from 'react'
import Helmet from '../Components/Helmet'
import {Container, Row, Col, FormGroup, Form} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
import {auth} from '../firebase'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {setDoc, doc} from 'firebase/firestore';
import {storage } from '../firebase';
import {db} from '../firebase'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = await userCredential.user
            const storageRef = ref(storage, `images/${Date.now() + username}`)
            const uploadTask = uploadBytesResumable(storageRef, file)
            console.log(user);


            uploadTask.on(
                (error) => {
                    toast.error(error.message)
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {

                        await updateProfile(user, {
                            displayName: username,
                            photoURL: downloadURL,
                        });

                        await setDoc(doc(db, 'users', user.uid), {
                         // uid в качестве ключа или идентификатора для 
                        //  хранения данных пользователя в базе данных Firebase Firestore 
                            uid: user.uid,
                            displayName: username,
                            email,
                            photoURL: downloadURL,
                        });
                    });
                }
            );

            setLoading(false)
            toast.success('Account created')
            navigate('/login')
            
        } catch (error) {
            setLoading(false)
            toast.error('something went wrong');
        }
    }

  return (
   <Helmet title='Signup'>
    <section>
        <Container>
            <Row>
               {
                loading ? (<Col><h5>Loading....</h5></Col>) : (
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

                    <button type='submit' className='auth_btn' onClick={signup}>Create an Account</button>
                    <ToastContainer/>
                    <p>Already have an account?{''} <Link to='/login'>Login</Link></p>
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

export default Signup;