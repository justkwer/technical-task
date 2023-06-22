import {FC, PropsWithChildren} from 'react';
import {CommentProps} from 'core/types';
import {Author} from '../Author';

export const Comment: FC<PropsWithChildren<CommentProps>> = ({
    children,
    text,
    ...rest
}) => (
    <li className="comment">
        <Author {...rest} />
        <h4>{text}</h4>
        {children}
    </li>
);
