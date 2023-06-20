import {FC} from 'react';
import {AuthorProps} from 'core/types';

export const Author: FC<AuthorProps> = ({name, avatar, created}) => {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>
                {name}
                {created}
            </figcaption>
        </figure>
    );
};
