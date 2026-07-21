import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreatePost = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios.post("http://localhost:4000/createPost",formData).then(res=>{
      console.log(res)
      alert("Post Created")
      e.target.reset() //done
      navigate("/feed")

    })

  }

  return (
    <section className="createPostSection">
        <h1>
            Create Post
        </h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image" placeholder="Upload file" accept="image/*" required/>
            <input type="text" name="caption" placeholder="Enter Caption"/>
            <button type="submit">Submit form</button>
        </form>
    </section>

  )
}

export default CreatePost