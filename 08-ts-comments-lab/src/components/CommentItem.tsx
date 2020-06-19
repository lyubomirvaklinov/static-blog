import React, { ReactElement } from 'react';
import { CommentsListener } from '../Comments';
import {Comment} from '../model/comments-model';

interface Props {
  comment: Comment
  onDeleteComment: CommentsListener
  onUpdateComment: CommentsListener
}

export default function CommentItem({comment, onDeleteComment, onUpdateComment}: Props): ReactElement {


function handleDelete(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) { 
  onDeleteComment(comment);
  console.log(comment)
 }
function handleUpdate(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) { 
  onUpdateComment(comment);
 }

  return (
    <div>
      <span>{comment.author} : {comment.text}</span>
      <button type="button" onClick={handleDelete}>Delete</button>
      <button type="button" value={comment.id} onClick={handleUpdate}>Update</button>
    </div>
  )
}
