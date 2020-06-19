import React from 'react';
import './Comments.css';
import MOCK_COMMENTS from './model/mock-comments';
import {Comment} from './model/comments-model';
import CommentsList from './components/CommentsList';
import CommentsCreate from './components/CommentsCreate';


export interface CommentsProps {
}
interface CommentsState {
  comments: Comment[];
}

export interface CommentsListener {
  (comment: Comment): void
}

class Comments extends React.Component<{}, CommentsState> {
  state = {
    comments: MOCK_COMMENTS
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CommentsCreate onCreateComment={this.handleCommentCreate}/>
          <CommentsList comments={this.state.comments}/>
        </header>
      </div>
    );
  }

  handleCommentCreate = (comment: Comment) => {
    this.setState(({comments}) => ({
      comments: this.state.comments.concat(comment)
    }));
  }

}

export default Comments;
