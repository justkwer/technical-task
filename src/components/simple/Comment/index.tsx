import {FC, PropsWithChildren} from 'react';
import {Data} from 'core/types';
import {Author} from '../Author';

export const Comment: FC<PropsWithChildren<Data>> = ({
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
