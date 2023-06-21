import {useAppDispatch, useAppSelector} from 'core/hooks';
import {selectComments} from 'store/selectors';
import {buttonTitle} from 'core/constants';
import {changePage} from 'store/reducers';
import {getComments} from 'store/api';

export const Button = () => {
    const {comments, page, error} = useAppSelector(selectComments);
    const dispatch = useAppDispatch();

    const handleChangePage = () => {
        if (error) {
            dispatch(getComments(page));
            return;
        }
        if (!comments) return;

        const newPage = page < comments.pagination.total_pages ? page + 1 : 1;
        dispatch(changePage(newPage));
    };

    return (
        <button onClick={handleChangePage}>
            {error ? buttonTitle.error : buttonTitle.next}
        </button>
    );
};
