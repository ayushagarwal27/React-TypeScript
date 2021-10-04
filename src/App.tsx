import { queryAllByPlaceholderText } from '@testing-library/dom';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';

function App() {
    const personName = {
        first: 'John',
        last: 'Lee',
    };

    const nameList = [
        {
            first: 'John',
            last: 'Lee',
        },
        {
            first: 'Rob',
            last: 'Williams',
        },
        {
            first: 'Bob',
            last: 'Clark',
        },
    ];
    return (
        <div className='App'>
            {/* <Greet name='John' messageCount={20} isLoogedIn={false} /> */}
            {/* <Person name={personName} />
            <PersonList names={nameList} /> */}
            {/* <Status status='loading' /> */}
            {/* <Oscar>
                <Heading>Oscar goes to Will Smith!</Heading>
            </Oscar> */}
            {/* <Button
                handleClick={(e, id) => {
                    console.log('Button Clicked', e, id);
                }}
            ></Button> */}
            {/* <Input
                handleChange={event => {
                    console.log('Changed', event);
                }}
                value=''
            /> */}
            <Container styles={{ border: '1px solid black' }} />
        </div>
    );
}

export default App;
