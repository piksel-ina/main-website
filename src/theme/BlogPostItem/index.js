import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import BlogPostListItem from './ListItem';

export default function BlogPostItem({ children, className }) {
  const { isBlogPostPage } = useBlogPost();

  if (!isBlogPostPage) {
    return (
      <BlogPostListItem className={className}>{children}</BlogPostListItem>
    );
  }

  return (
    <BlogPostItemContainer className={clsx(className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
