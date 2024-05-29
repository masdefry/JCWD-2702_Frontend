import './style.css';
import Navbar from '../../components/navbar';

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
                <div>
                    Card 
                </div>
                <div>
                    Card 
                </div>
                <div>
                    Card 
                </div>
                <div>
                    Card
                </div>
            </section>
        </>
    )
}