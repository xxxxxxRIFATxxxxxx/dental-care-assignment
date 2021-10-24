import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const BlogContext = createContext([]);

const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("./blogs.json")
            .then(response => response.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <BlogContext.Provider value={blogs}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogProvider;