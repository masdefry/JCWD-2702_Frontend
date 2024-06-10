// Import All Method from Yup
import * as Yup from 'yup';

// Export Name
export const registerSchema = Yup.object().shape({
    username: Yup.string().required('Username is required!').min(6, 'Username must have minimum 6 characters!'),
    email: Yup.string().required('Email is required!').email('Email must be valid!'),
    password: Yup.string().required('Password is required!'), 
    phoneNumber: Yup.string().required('Phone number is required!').min(10, 'Phone number must have minimum 10 digits!')
})