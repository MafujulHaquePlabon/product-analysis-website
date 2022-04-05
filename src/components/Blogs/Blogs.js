import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
               <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
              <div className='mx-5 p-5 shadow-2xl shadow-gray-400'>
              <h1 className='text-2xl font-semibold'>What is contex API?</h1>
              <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. When we want to send any data from grandparents to grandchildren in the form of props, we cannot send it directly. In between, father has to send data from grandparents. The easiest way to get read of this problem is context api.</p>
               
              </div>
              <div  className=' mx-5 p-5 shadow-2xl shadow-gray-400'>
              <h1 className='text-2xl font-semibold'>What is semantic tag?</h1>
              <p>Meaningful HTML Element is called semantic tag for developer and search engine.The semantic tag has been added to HTML5.A semantic element clearly describes its meaning to both the browser and the developer.Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a paragraph tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.The semantic elements added in HTML5 are :article ,aside,section,nav,header,main,
                details,figcaption,figure,footer,mark,summar,time tag</p>
              </div>
               </div>
        </div>
    );
};

export default Blogs;