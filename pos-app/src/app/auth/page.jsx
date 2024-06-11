'use client';
import {Formik, Form, Field} from 'formik';
import {loginSchema} from '@/features/schemas/authSchema';
import axios from 'axios';
import {toast} from 'react-toastify';
// Step-01 to Redirect Page
import { useRouter } from 'next/navigation'
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {setUser} from '@/redux/slices/userSlice';

export default function AuthPage(){
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    // Step-02 to Redirect Page
    const router = useRouter()

    const onAuth = async(_values) => {
        try{
            setIsLoading(true)
            const res = await axios.get(`http://localhost:5000/users?username=${_values.username}`)
            if(res.data[0].password !== _values.password) throw {message: 'Account Not Found!'}

            toast.success('Login Success!')

            dispatch(setUser(res.data))

            // Step-03 to Redirect Page
            // router.push('/register')
        }catch(error){
            toast.error(error.message)
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <section className='flex justify-center py-10 border'>
            <div className='w-[50%]'>
                <h1 className='text-3xl font-bold'>
                    Login Account
                </h1>
                <Formik
                    validationSchema={loginSchema}
                    initialValues={{
                        username: '', 
                        password: ''
                    }}
                    onSubmit = {(values) => {
                        onAuth(values)
                    }}
                >
                    {
                        ({dirty, isValid}) => {
                            return(
                                <Form>
                                    <label className='form-control w-full'>
                                        <div className='label'>
                                            <span className='label-text'>Username</span>
                                        </div>
                                        <Field name='username' type='text' className='input input-bordered w-full' />
                                    </label>   
                                    <label className='form-control w-full'>
                                        <div className='label'>
                                            <span className='label-text'>Password</span>
                                        </div>
                                        <Field name='password' type='password' className='input input-bordered w-full' />
                                    </label> 
                                    <button disabled={!(dirty && isValid) || isLoading} type='submit' className='btn bg-red-500 text-white w-full mt-5'>
                                        Login
                                    </button>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        </section>
    )
}