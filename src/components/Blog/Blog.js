import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleBlog from '../SingleBlog/SingleBlog';
import useBlogs from '../../hooks/useBlogs';
import blogsData from '../BlogDetails/blogsData';

const Service = props => {
    const blogs = useBlogs();
    const { showAll } = props;
    const finalBlogs = showAll ? blogs : blogs.slice(0, 4);

    if (blogs.length === 0) {
        return (
            <Container className="py-5 mt-5">
                <h2 className="metal-font display-6 text-center pb-5 text-primary fw-bold">Our Blog</h2>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        blogsData.map(blog => <SingleBlog key={blog.id} blog={blog} showFull={false}></SingleBlog>)
                    }
                </Row>
            </Container>
        );
    }

    return (
        <Container className="py-5 mt-5">
            <h2 className="metal-font display-6 text-center pb-5 text-primary fw-bold">Our Blog</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    finalBlogs.map(blog => <SingleBlog key={blog.id} blog={blog} showFull={false}></SingleBlog>)
                }
            </Row>
        </Container>
    );
};

export default Service;