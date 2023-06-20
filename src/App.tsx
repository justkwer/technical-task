import './App.css';
import {useAppDispatch} from 'core/hooks';
import {useEffect} from 'react';
import {getData} from 'store/api';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);

    return <div className="App"></div>;
}

export default App;
