import {useAppSelector} from 'core/hooks';
import {selectComments} from 'store/selectors';
import {ReactComponent as Heart} from 'assets/svg/heart.svg';

export const Statistics = () => {
    const {comments, totalLikes} = useAppSelector(selectComments);

    return (
        <div className="statistics">
            <p>{comments ? comments.data.length : 0} comments</p>
            <span>
                <Heart />
                {totalLikes}
            </span>
            <hr />
        </div>
    );
};
