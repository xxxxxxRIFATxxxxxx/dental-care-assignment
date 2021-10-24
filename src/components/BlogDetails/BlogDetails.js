import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import SingleBlog from '../SingleBlog/SingleBlog';
import useBlogs from '../../hooks/useBlogs';
import blogsData from './blogsData';

const BlogDetails = () => {
    const { id } = useParams();
    const blogs = useBlogs();
    const findBlog = blogs.find(blog => blog.id.toString() === id);

    if (!findBlog) {
        const newFindBlog = blogsData.find(blog => blog.id.toString() === id);

        return (
            <Container className="py-5 mt-5">
                <Row xs={1}>
                    <SingleBlog blog={newFindBlog} showFull={true}></SingleBlog>
                </Row>
            </Container>
        );
    }

    return (
        <Container className="py-5 mt-5">
            <Row xs={1}>
                <SingleBlog blog={findBlog} showFull={true}></SingleBlog>
            </Row>
        </Container>
    );
};

export default BlogDetails;