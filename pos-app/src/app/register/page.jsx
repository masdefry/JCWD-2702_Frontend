'use client';
import { Formik, Form, Field } from "formik"

export default function RegisterPage(){
    return(
        <>
            <section className='flex justify-center py-10 border'>
            <div className='w-[50%]'>
                <h1 className='text-3xl font-bold'>
                    Register Account
                </h1>
                    <Formik>
                        <Form 
                            initialValues={{
                                username: '', 
                                email: '', 
                                password: '', 
                                phoneNumber: ''
                            }}
                            name='register'
                        >
                            <label className='form-control w-full'>
                                <div className='label'>
                                    <span className='label-text'>Username</span>
                                </div>
                                <Field name='username' type='text' placeholder='Type here' className='input input-bordered w-full' />
                            </label>    
                            <label className='form-control w-full'>
                                <div className='label'>
                                    <span className='label-text'>Email</span>
                                </div>
                                <Field name='email' type='text' placeholder='Type here' className='input input-bordered w-full' />
                            </label>    
                            <label className='form-control w-full'>
                                <div className='label'>
                                    <span className='label-text'>Password</span>
                                </div>
                                <Field name='password' type='text' placeholder='Type here' className='input input-bordered w-full' />
                            </label>   
                            <label className='form-control w-full'>
                                <div className='label'>
                                    <span className='label-text'>Phone Number</span>
                                </div>
                                <Field name='phoneNumber' type='text' placeholder='Type here' className='input input-bordered w-full' />
                            </label>  
                            <button type='submit' className='btn bg-red-500 text-white w-full mt-5'>
                                Register
                            </button> 
                        </Form>
                    </Formik>
            </div>
            </section>
        </>
    )
}