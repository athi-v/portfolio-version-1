import {Link} from "react-router-dom"

const Navbar = () => {
    return (
    <div className="flex ">

<div> <Link to="/">Home</Link>
<Link to="experience">Experience</Link>
<Link to="/projects">Projects</Link>
<Link to="/snippets">Snippets</Link></div>
 </div>
    )
    };
    
    export default Navbar;