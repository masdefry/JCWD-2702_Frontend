import * as Yup from 'yup';

export const createProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!'), 
    price: Yup.number().min(1, 'Price must be greater than or equal 1').required('Price is required!'), 
    imageUrl: Yup.string().required('Image Url is required!')
})