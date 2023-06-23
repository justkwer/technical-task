import {FC} from 'react';
import {AuthorProps} from 'core/types';
import {useAppSelector} from 'core/hooks';
import {selectComments} from 'store/selectors';
import {Likes} from 'components';
import {getDate} from 'core/utils';

export const Author: FC<AuthorProps> = ({created, author, likes}) => {
    const {authors} = useAppSelector(selectComments);
    const commentator = authors?.find(({id}) => id === author);

    if (!commentator) return null;

    const {avatar, name} = commentator;

    return (
        <figure className="author">
            <img src={avatar} alt={name} />
            <figcaption>
                <div>
                    <h3>{name}</h3>
                    <span className="created">{getDate(created)}</span>
                </div>
                <Likes likes={likes} />
            </figcaption>
        </figure>
    );
};
