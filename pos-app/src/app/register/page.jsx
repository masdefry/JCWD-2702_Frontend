'use client';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { registerSchema } from "@/features/schemas/registerSchema";
import axios from 'axios';
import {toast} from 'react-toastify';

export default function RegisterPage(){

    const onRegisterUser = async(_values, _resetForm) => { // _values = {username, email, password, phoneNumber}
        try{
            await axios.post('http://localhost:5000/users', _values)

            toast.success('Register Success!')
            _resetForm()
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
            <section className='flex justify-center py-10 border'>
            <div className='w-[50%]'>
                <h1 className='text-3xl font-bold'>
                    Register Account
                </h1>
                    <Formik
                        initialValues={{
                            username: '', 
                            email: '', 
                            password: '', 
                            phoneNumber: ''
                        }}
                        validationSchema={registerSchema}
                        onSubmit={(values, {resetForm}) => {
                            onRegisterUser(values, resetForm) // values = {username, email, password, phoneNumber}
                        }}
                    >
                        {
                            ({dirty, isValid}) => {
                                return(
                                    <Form>
                                        {console.log(isValid)}
                                        {console.log(dirty)}
                                        <label className='form-control w-full'>
                                            <div className='label'>
                                                <span className='label-text'>Username</span>
                                            </div>
                                            <Field name='username' type='text' placeholder='Type here' className='input input-bordered w-full' />
                                            <ErrorMessage name='username' component={'div'} className='text-red-500' />
                                        </label>    
                                        <label className='form-control w-full'>
                                            <div className='label'>
                                                <span className='label-text'>Email</span>
                                            </div>
                                            <Field name='email' type='text' placeholder='Type here' className='input input-bordered w-full' />
                                            <ErrorMessage name='email' component={'div'} className='text-red-500' />
                                        </label>    
                                        <label className='form-control w-full'>
                                            <div className='label'>
                                                <span className='label-text'>Password</span>
                                            </div>
                                            <Field name='password' type='password' placeholder='Type here' className='input input-bordered w-full' />
                                            <ErrorMessage name='password' component={'div'} className='text-red-500' />
                                        </label>   
                                        <label className='form-control w-full'>
                                            <div className='label'>
                                                <span className='label-text'>Phone Number</span>
                                            </div>
                                            <Field name='phoneNumber' type='text' placeholder='Type here' className='input input-bordered w-full' />
                                            <ErrorMessage name='phoneNumber' component={'div'} className='text-red-500' />
                                        </label>  
                                        <button disabled={!(dirty && isValid)} className='btn bg-red-500 text-white w-full mt-5'>
                                            Register
                                        </button> 
                                    </Form>
                                )
                            }
                        }
                    </Formik>
            </div>
            </section>
        </>
    )
}