import React, { ReactElement } from 'react';
import {Comment} from '../model/comments-model';
import CommentItem from './CommentItem';
import { CommentsListener } from '../Comments';


interface Props {
  comments: Comment[];
  onDeleteComment: CommentsListener;
  onUpdateComment: CommentsListener;
}


export default function CommentsList({comments, onDeleteComment, onUpdateComment}: Props): ReactElement {


  return (
    <div>
        <div>
          {comments.map(cm => (<CommentItem key={cm.id} comment={cm} onDeleteComment={onDeleteComment} onUpdateComment={onUpdateComment}  />))}
        </div>
  
    </div>
  )
}
