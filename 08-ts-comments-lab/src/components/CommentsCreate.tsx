import * as React from 'react';
import {CommentsListener} from '../Comments';
import {Comment} from '../model/comments-model';

export interface IAppProps {
  onCreateComment: CommentsListener
}

interface State {
  // author: string,
  // text: string
  [key: string]: string
}

export default class CommentsCreate extends React.Component<IAppProps, State> {

  state={
    author: '',
    text: ''
  }

  public render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name='author' value={this.state.author} onChange={this.handleTextChange} type='text' placeholder="Add Author..."></input>
          <input name='text' value={this.state.text} onChange={this.handleTextChange} type='text' placeholder="Add Comment..."></input>
          <button className='button' type='submit'>Add</button>
        </form>
      </div>
    );
  }


  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onCreateComment(new Comment(this.state.author, this.state.text))
    this.setState({author:'', text:''})
  }

  handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}
