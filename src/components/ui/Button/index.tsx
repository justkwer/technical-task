import {useAppDispatch, useAppSelector} from 'core/hooks';
import {selectComments} from 'store/selectors';
import {BUTTON_TITLE} from 'core/constants';
import {changePage} from 'store/reducers';
import {getComments} from 'store/api';

export const Button = () => {
    const {page, error} = useAppSelector(selectComments);
    const dispatch = useAppDispatch();

    const handleChangePage = () => {
        if (error) {
            dispatch(getComments(page));
            return;
        }

        dispatch(changePage(page + 1));
    };

    return (
        <button onClick={handleChangePage}>
            {error ? BUTTON_TITLE.error : BUTTON_TITLE.next}
        </button>
    );
};
