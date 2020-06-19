import React, { ReactElement } from 'react';

interface Props {
  author: string;
  text: string
}

export default function CommentItem({author, text}: Props): ReactElement {
  return (
    <div>
      <span>{author} : {text}</span>
    </div>
  )
}
