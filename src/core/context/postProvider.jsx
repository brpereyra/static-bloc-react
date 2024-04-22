import { createContext, useState } from "react";
import Posts from "../services/post.services";


export const PostsContext = createContext({
    posts: [],
    getListPosts: () => {},
});



export function PostsProvider ({children}) {
    const [posts,setPosts] = useState([]);

    const getListPosts = async () => {
        const data = await Posts.getPostsLists();
        
        setPosts(data);
    }
    
    const data = {
        posts: posts,
        getListPosts
    } 
    return (
        <PostsContext.Provider value={data}>
            {children}
        </PostsContext.Provider>
    )
}


