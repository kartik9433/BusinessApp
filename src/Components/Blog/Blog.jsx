import React from 'react'
import BlogImg from '../../assests/blog/blog.jpg'
import './Blog.css'

function Blog() {
  return (
    <section id="blog">
        <div className="container">
             <div className="blog_wrapper">
                <div className="blog_col">
                  <h3>WE HELP BUSINESS LAUNCH, GROW AND SUCCEED</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere cumque laboriosam illo enim rerum? Ad debitis praesentium ut ex expedita blanditiis alias laboriosam, quos, molestiae assumenda repudiandae nobis quaerat.</p>
                    <div className="btn_wrapper">
                        <a href="/" className='btn'>Get started</a>
                    </div>
            </div>
                  <div className="blog_col">
                         <div className="blog_img">
                             <img src={BlogImg} alt="Blog" />
                         </div>
                  </div>
             </div>
        </div>
    </section>
  )
}

export default Blog
