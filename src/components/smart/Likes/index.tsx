import {FC, useState} from 'react';
import {ReactComponent as Heart} from 'assets/svg/heart.svg';
import {useAppDispatch} from 'core/hooks';
import {updateLikes} from 'store/reducers';
import {LikesProps} from 'core/types';

export const Likes: FC<LikesProps> = ({likes}) => {
    const [isActive, setIsActive] = useState(false);
    const [like, setLike] = useState(likes);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        setLike((prevState) => prevState + (isActive ? -1 : 1));
        dispatch(updateLikes(isActive));
        setIsActive((prevState) => !prevState);
    };

    return (
        <div className="likes">
            <button className={isActive ? 'active' : ''} onClick={handleClick}>
                <Heart />
            </button>
            {like}
        </div>
    );
};
