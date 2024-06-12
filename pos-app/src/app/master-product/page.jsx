'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createProductSchema } from './../../features/schemas/createProductSchema';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {toast} from 'react-toastify'

export default function MasterProductPage(){

    const {mutate: mutateCreateProduct, isPending} = useMutation({
        mutationFn: async(_values) => {
            return await axios.post('http://localhost:5000/products', _values)
        }, 
        onSuccess: (res) => {
            toast.success('Create Product Success!')
        },
        onError: (err) => {
            console.log(err)
        }
    })

    const {data: dataProducts, refetch: refetchDataProducts} = useQuery({
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/products')
            return res.data
        }
    })

    const {mutate: mutateDeleteProduct} = useMutation({
        mutationFn: async(_id) => {
            return await axios.delete(`http://localhost:5000/products/${_id}`)
        }, 
        onSuccess: (res) => {
            toast.success('Delete Product Success!')
            refetchDataProducts()
        },
        onError: (err) => {
            console.log(err)
        }
    })

    // Conditional Rendering untuk Menghindari dataProducts yang Masih Undefined
    if(dataProducts === undefined) return <div>Loading...</div>

    return(
        <main className='flex flex-col items-center py-5'>
            <section className='py-10'>
                <div>
                    <h1 className='text-3xl font-bold'>
                        Create Product
                    </h1>
                    <Formik
                        validationSchema={createProductSchema}
                        initialValues={{
                            name: '', 
                            price: 0, 
                            imageUrl: ''
                        }}
                        onSubmit={(values) => {
                            mutateCreateProduct(values)
                        }}
                    >
                        {
                            ({isValid}) => {
                                return(
                                    <Form>
                                        <div className='flex gap-5'>
                                            <label className='form-control w-full'>
                                                <div className='label'>
                                                    <span className='label-text'>Name</span>
                                                </div>
                                                <Field name='name' type='text' placeholder='Type here' className='input input-bordered w-full' />
                                                <ErrorMessage name='name' component={'div'} className='text-red-500' />
                                            </label>    
                                            <label className='form-control w-full'>
                                                <div className='label'>
                                                    <span className='label-text'>Price</span>
                                                </div>
                                                <Field name='price' type='text' placeholder='Type here' className='input input-bordered w-full' />
                                                <ErrorMessage name='price' component={'div'} className='text-red-500' />
                                            </label>     
                                        </div>  
                                        <div className='flex'>
                                            <label className='form-control w-full'>
                                                <div className='label'>
                                                    <span className='label-text'>Image URL</span>
                                                </div>
                                                <Field name='imageUrl' type='text' placeholder='Type here' className='input input-bordered w-full' />
                                                <ErrorMessage name='imageUrl' component={'div'} className='text-red-500' />
                                            </label>    
                                        </div>   
                                        <button disabled={!isValid || isPending === true} className='btn bg-red-500 text-white w-full mt-5'>
                                            Submit
                                        </button> 
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </div>
            </section>
            <section name='table-product' className='overflow-x-auto w-[50%]'>
                <table className='table'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image URL</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataProducts.map((item, index) => {
                                return(
                                    <tr>
                                        <th>{index+1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.imageUrl}</td>
                                        <td>
                                            <button onClick={() => mutateDeleteProduct(item.id)} className='btn bg-red-500 text-white rounded-md'>
                                                Delete
                                            </button>
                                            <button className='btn bg-blue-500 text-white rounded-md'>
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </main>
    )
}