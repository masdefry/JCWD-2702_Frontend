import './style.css';
import Navbar from '../../components/navbar';
import { Link } from "react-router-dom";

const dataProducts = [
    {
        id: 1, 
        name: 'Sepatu A'
    },
    {
        id: 2, 
        name: 'Sepatu B'
    }, 
    {
        id: 3, 
        name: 'Sepatu C'
    }
]

export default function ExerciseResponsivePage(){
    return(
        <>
            <Navbar />

            {/* Section: Jumbotron */}
            <section id='jumbotron'>
                Jumbotron
            </section>
        
            {/* Section: Card */}
            <section id='cards'>
                {
                    dataProducts.map((item, index) => {
                        return(
                            <Link to={`/detail-card/${item.name}`}>
                                <div key={index}>
                                {item.name}
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
        </>
    )
}