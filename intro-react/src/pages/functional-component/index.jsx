import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function FunctionalComponentPage(){
    const [number, setNumber] = useState(0);
    const [alphabet, setAlphabet] = useState('ABC')

    // ComponentDidMount
    useEffect(() => {
        console.log('ComponentDidMount RUNNING!')
    }, [])

    // ComponentDidUpdate
    useEffect(() => {
        console.log('ComponentDidUpdate RUNNING!')
    }, [number, alphabet])

    // ComponentWillUnmount
    useEffect(() => {
        return (() => {
            console.log('ComponentWillUnmount RUNNING!')
        })
    }, [])
    
    return(
        <>
            {number}
            <button onClick={() => setNumber(1)}>
                Change Number 
            </button>
            <Link to='/admin'>
                Pindah ke Page Admin
            </Link>
        </>
    )
}

export default FunctionalComponentPage;