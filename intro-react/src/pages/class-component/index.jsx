import React from 'react';

// State: Tempat untuk Menyimpan Data, Ketika Terjadi Perubahan Data pada State Tersebut, Component Akan di Render Ulang


class ClassComponentPage extends React.Component{

    state = {
        number: 0
    }

    onChangeNumber = () => {
        this.setState({number: 1})
    }

    render(){
        return(
            <div>
                Class Component 
                <br />
                {this.state.number}
                <br />
                <button onClick={this.onChangeNumber}>
                    Change Number 
                </button>
            </div>
        )
    }
}

export default ClassComponentPage;