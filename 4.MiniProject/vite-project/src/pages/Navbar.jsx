import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <NavLink to="/createPost">Create Post</NavLink>
        <NavLink to="/feed">Feed Page</NavLink>
    </div>
  )
}

export default Navbar