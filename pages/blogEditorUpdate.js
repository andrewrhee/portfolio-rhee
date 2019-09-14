import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';

import SlateEditor from '../components/slate-editor/Editor';
import { toast } from 'react-toastify';

import { getBlogById, updateBlog } from '../actions';

class BlogEditorUpdate extends React.Component {

  static async getInitialProps({query}) {
    const blogId = query.id;
    let blog = {};

    try {
      blog = await getBlogById(blogId);
      return {blog};
    } catch(err) {
      console.error(err);
      // return {err};
    }

    return {blog};
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }

    this.updateBlog = this.updateBlog.bind(this);
  }

  updateBlog(story, heading) {

    const {blog} = this.props;

    const updatedBlog = {};
    updatedBlog.title = heading.title;
    updatedBlog.subTitle = heading.subtitle;
    updatedBlog.story = story;
    // updatedBlog.title = '';
    // updatedBlog.subTitle = '';
    // updatedBlog.story = '';

    this.setState({ isLoading: true });

    updateBlog(updatedBlog, blog._id).then(updatedBlog => {
      toast.success('Blog Saved Successfully');
      this.setState({ isLoading: false });
    }).catch(err => {
      this.setState({ isLoading: false });
      const message = err.message || 'Server Error!';
      toast.error('Unexpected Error, Copy your progress and refresh browser.');
      console.error(message);
    })
  }

  render() {
    const { blog } = this.props;
    const { isLoading } = this.state;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor initialValue={blog.story} isLoading={isLoading} save={this.updateBlog} />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(BlogEditorUpdate);