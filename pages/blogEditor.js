import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';

import SlateEditor from '../components/slate-editor/Editor';
import { toast } from 'react-toastify';

import { createBlog } from '../actions';

class BlogEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      lockId: Math.floor(100000 + Math.random() * 900000)
    }

    this.saveBlog = this.saveBlog.bind(this);
  }

  saveBlog(story, heading) {

    const { lockId } = this.state;
    const blog = {};
    blog.title = heading.title;
    blog.subTitle = heading.subtitle;
    blog.story = story;

    this.setState({isLoading: true});

    createBlog(blog, lockId).then(createdBlog => {
      toast.success('Blog Saved Successfully');
      this.setState({isLoading: false});
      Router.pushRoute(`/blogs/${createdBlog._id}/edit`);
    }).catch(err => {
      this.setState({ isLoading: false });
      toast.error('Unexpected Error, Copy your progress and refresh browser.');
      const message = err.message || 'Server Error!';
      console.error(message);
    })
  }

  render() {
    const { isLoading } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor isLoading={isLoading} save={this.saveBlog} />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(BlogEditor);