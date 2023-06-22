import {useAppDispatch, useAppSelector} from 'core/hooks';
import {useEffect} from 'react';
import {getAuthors, getComments} from 'store/api';
import {Button, Comments, Statistics} from 'components';
import {selectComments} from 'store/selectors';
import {ReactComponent as Preloader} from 'assets/svg/preloader.svg';
import {ERROR_MESSAGE} from './core/constants';

function App() {
    const {loading, page, comments, error} = useAppSelector(selectComments);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getComments(page));
    }, [dispatch, page]);

    useEffect(() => {
        dispatch(getAuthors());
    }, [dispatch]);

    if (loading.every((el) => el)) return <Preloader />;

    return (
        <>
            {loading.includes(true) && <Preloader />}
            {error && <p>{ERROR_MESSAGE}</p>}
            {!error && !loading.includes(true) && (
                <>
                    <Statistics />
                    <Comments data={comments?.data} />
                </>
            )}
            <Button />
        </>
    );
}

export default App;
