import React from 'react';
import { Link } from 'react-router-dom';
import PageTopPages from '../../Components/PageTopPages';
import b2 from '../../assets/b2.jpg'
import Blog from '../Blog/Blog';

const BlogPage = () => {
    return (
        <div>
            <PageTopPages
                image={b2}
                title="Blog"
                subtitle={<span><Link className='hover:text-[#f39c12]' to="/">Home </Link> / Blog</span>}
            />
            <Blog></Blog>
        </div>
    );
};

export default BlogPage;