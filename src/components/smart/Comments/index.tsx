import {FC, useCallback} from 'react';
import {CommentsProps} from 'core/types';
import {useAppSelector} from 'core/hooks';
import {selectComments} from 'store/selectors';
import {Comment} from '../../simple/Comment';

export const Comments: FC<CommentsProps> = ({data}) => {
    const {comments} = useAppSelector(selectComments);

    const findParent = useCallback(
        (id: number) => comments?.data.find((el) => el.parent === id),
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
                                {findParent(id) && (
                                    <ul className="flex-ul">
                                        <Comments data={findParent(id)} />
                                    </ul>
                                )}
                            </Comment>
                        ),
                )}
            </ul>
        );
    }

    const {id, parent, ...other} = data;

    return (
        <>
            <Comment {...other} />
            <Comments data={findParent(id)} />
        </>
    );
};
