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
            <ul className="comments">
                {data.map(
                    (el) =>
                        !el.parent && (
                            <Comment key={el.id} {...el}>
                                <Comments data={findParent(el.id)} />
                            </Comment>
                        ),
                )}
            </ul>
        );
    }

    return (
        <ul>
            <Comment {...data}>
                <Comments data={findParent(data.id)} />
            </Comment>
        </ul>
    );
};
