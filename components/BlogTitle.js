

export default function BlogTitle({blogTitleFirstLine, blogTitleSecondLine}) {
  return (
    <div id="elem1" className="my-5 mx-auto blog-title">
        <h1 className='blog-title-first-line'>
            {blogTitleFirstLine}
        </h1>
        <h1 className='blog-title-second-line'>
            {blogTitleSecondLine}
        </h1>

        <span className="border-top"></span>
        <span className="border-right"></span>
        <span className="border-bottom"></span>
        <span className="border-left"></span>
    </div>
    
  );
}
