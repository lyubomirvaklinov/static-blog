import React, { ReactElement } from 'react';
import {Comment} from '../model/comments-model';
import CommentItem from './CommentItem';


interface Props {
  comments: Comment[]
}

export default function CommentsList({comments}: Props): ReactElement {
  return (
    <div>
      {comments.map(cm => (<CommentItem key={cm.id} author={cm.author} text={cm.text} />))}
    </div>
  )
}
