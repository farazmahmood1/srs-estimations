import React, { useState, useEffect } from 'react';
import './Blogs.css';
import { blogs } from './components/blogs';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleClosePopup = () => {
    setSelectedBlog(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        handleClosePopup();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="blogs-page">
      <div className="container">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">Blogs</h1>
              <ul className="breadcrumb-menu">
                <li><a href="/">Superior Estimates</a></li>
                <li>Blogs</li>
              </ul>
            </div>
          </div>
        </div>

        <h1 className="page-title">Explore Our Latest Insights <span className="text-theme">Blog</span></h1>

        <div className="blogs-grid">
          {blogs.map(blog => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-img">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="#!"><i className="fal fa-calendar-days"></i>{blog.date}</a>
                  <a href="#!"><i className="fal fa-comments"></i>{blog.comments} Comments</a>
                </div>
                <h3 className="box-title"><a href="#!" onClick={() => handleReadMore(blog)}>{blog.title}</a></h3>
                <p className="blog-text">{blog.excerpt}</p>
                <div className="blog-bottom">
                  <a href="#!" className="author"><img src="assets/img/DTechKrew/Logo.webp/Blog DP.png" alt="author" /> By {blog.author}</a>
                  <button className="read-more-button" onClick={() => handleReadMore(blog)}>   Read   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedBlog && (
          <div className="blog-popup-overlay" onClick={handleClosePopup}>
            <div className="blog-popup-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={handleClosePopup}>&times;</span>
              <h2>{selectedBlog.title}</h2>
              <p className="blog-date"><i className="fal fa-calendar-days"></i>{selectedBlog.date}</p>
              <div className="blog-popup-img">
                <img src={selectedBlog.image} alt={selectedBlog.title} />
              </div>
              <div className="blog-popup-text">
                {selectedBlog.content.split('\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
