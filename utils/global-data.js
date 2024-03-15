export const getGlobalData = () => {
  const blogTitleFirstLine = process.env.BLOG_TITLE  ? decodeURI(process.env.BLOG_TITLE_FIRST) : 'RUBÉN';
  const blogTitleSecondLine = process.env.BLOG_TITLE  ? decodeURI(process.env.BLOG_TITLE_SECOND) : 'OUBIÑA';
  const footerText = process.env.BLOG_FOOTER_TEXT    ? decodeURI(process.env.BLOG_FOOTER_TEXT) : 'All rights reserved.';

  return {
    blogTitleFirstLine,
    blogTitleSecondLine,
    footerText,
  };
};
