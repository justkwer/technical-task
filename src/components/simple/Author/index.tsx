import {FC} from 'react';
import {AuthorProps} from 'core/types';
import {useAppSelector} from 'core/hooks';
import {selectComments} from 'store/selectors';
import {Created, Likes} from 'components';

export const Author: FC<AuthorProps> = ({created, author, likes}) => {
    const {authors} = useAppSelector(selectComments);
    const commentator = authors?.find((el) => el.id === author);

    if (!commentator) return null;

    const {avatar, name} = commentator;

    return (
        <figure className="author">
            <img src={avatar} alt={name} />
            <figcaption>
                <div>
                    <h3>{name}</h3>
                    <Created created={created} />
                </div>
                <Likes likes={likes} />
            </figcaption>
        </figure>
    );
};
