import './index.css';
import Card from '../../components/home/card';

export default function HomePage(){
    return(
        <>
            <div id='program'>
                <Card programName='Visual Design' description='Abc' />
                <Card programName='Web Development' description='Abc' />
                <Card programName='Digital Marketing' description='Abc' />
                <Card programName='UI/UX' description='Abc' />
            </div>
        </>
    )
}