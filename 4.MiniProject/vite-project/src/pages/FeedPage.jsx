import { use, useEffect, useState } from "react"
import axios from "axios"

const FeedPage = () => {
const [posts,setPosts] = useState([
    {
        _id:"1",
        image:"https://ik.imagekit.io/harshil31/image_2s_U37mwN.jpg",
        caption:"Picture 1"
    }
])
   useEffect(()=>{
    axios.get("http://localhost:4000/posts").then(resp=>setPosts(resp.data.posts))
   },[])
  return (
    <div>
        {posts.map(post => {
  return (
    <div key={post._id} className="post-card">
      <img src={post.image} alt={post.caption} />
      <p>Caption: {post.caption}</p>
    </div>
  )
})}
    </div>
  )
}

export default FeedPage