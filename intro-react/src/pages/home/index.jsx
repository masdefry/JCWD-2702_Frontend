import './index.css';
import Card from '../../components/home/card';

const dataProgram = [
    {
        programName: 'Visual Design'
    },
    {
        programName: 'Web Development'
    },
    {
        programName: 'UI/UX'
    },
    {
        programName: 'Digital Marketing'
    }
]
export default function HomePage(){
    return(
        <>
            <div id='program'>
                {
                    dataProgram.map(item => {
                        return(
                            <Card programName={item.programName} />
                        )
                    })
                }
            </div>
        </>
    )
}