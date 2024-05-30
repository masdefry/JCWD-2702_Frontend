import React from 'react';
import {Link} from 'react-router-dom';

// State: Tempat untuk Menyimpan Data, Ketika Terjadi Perubahan Data pada State Tersebut, Component Akan di Render Ulang
// Lifecycle Method: Siklus Component
//  - ComponentDidMount     : Ketika Pertama Kali Halaman dibuka
//  - ComponentDidUpdate    : Ketika Terjadi Perubahan Pada State
//  - ComponentWillUnmount  : Ketika Akan Berpindah Halaman

class ClassComponentPage extends React.Component{

    state = {
        number: 0
    }

    onChangeNumber = () => {
        this.setState({number: 1})
    }

    componentDidMount(){
        console.log('ComponentDidMount RUNNING!')
    }

    componentDidUpdate(){
        console.log('ComponentDidUpdate RUNNING!')
    }

    componentWillUnmount(){
        alert('Are you sure want to dischange your profile?')
    }

    render(){
        console.log('Render FIRST!')
        return(
            <div>
                Class Component 
                <br />
                {this.state.number}
                <br />
                <button onClick={this.onChangeNumber}>
                    Change Number 
                </button>
                <Link to='/admin'>
                    Pindah Page Admin
                </Link>
            </div>
        )
    }
}

export default ClassComponentPage;