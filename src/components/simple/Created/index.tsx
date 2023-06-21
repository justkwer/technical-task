import {FC} from 'react';
import {CreatedProps} from 'core/types';

export const Created: FC<CreatedProps> = ({created}) => {
    const today = new Date();
    const createdDate = new Date(created);
    const diffDate = today.getDate() - createdDate.getDate();
    const date = createdDate.toLocaleString('en-GB').replaceAll('/', '.');
    const diffTime = today.getHours() - createdDate.getHours() + ' hours ago';

    return <span className="created">{diffDate ? date : diffTime}</span>;
};
