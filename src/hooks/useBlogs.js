import { useContext } from "react";
import { BlogContext } from "../context/BlogProvider";

const useBlogs = () => {
    return useContext(BlogContext);
};

export default useBlogs;