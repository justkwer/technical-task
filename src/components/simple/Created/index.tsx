import {FC} from 'react';
import {CreatedProps} from 'core/types';

export const Created: FC<CreatedProps> = ({created}) => {
    const today = new Date();
    const createdDate = new Date(created);
    const diffDate = today.getDate() - createdDate.getDate();
    let date: string;

    if (diffDate) {
        date = createdDate.toLocaleString('en-GB').replaceAll('/', '.');
    } else date = today.getHours() - createdDate.getHours() + ' hours ago';

    return <span className="created">{date}</span>;
};
