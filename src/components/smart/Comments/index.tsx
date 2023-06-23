import {FC, useCallback} from 'react';
import {CommentsProps} from 'core/types';
import {useAppSelector} from 'core/hooks';
import {selectComments} from 'store/selectors';
import {Comment} from 'components';

export const Comments: FC<CommentsProps> = ({data}) => {
    const {comments} = useAppSelector(selectComments);

    const findParent = useCallback(
        (id: number) => comments?.find(({parent}) => parent === id),
        [comments],
    );

    if (!data) return null;

    if (Array.isArray(data)) {
        return (
            <ul className="comments flex-ul">
                {data.map(
                    ({parent, id, ...other}) =>
                        !parent && (
                            <Comment key={id} {...other}>
                                <Comments data={findParent(id)} />
                            </Comment>
                        ),
                )}
            </ul>
        );
    }

    const {id, parent, ...other} = data;

    return (
        <ul className="flex-ul">
            <Comment {...other}>
                <Comments data={findParent(id)} />
            </Comment>
        </ul>
    );
};
