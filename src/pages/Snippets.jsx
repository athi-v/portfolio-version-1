import {Link} from "react-router-dom"
const Snippets = () => {
return (
<div>
<div className="section">
    <div className="container mx-auto max-w-[90%] lg:max-w-screen-xl flex flex-col justify-center items-center h-[80vh] lg:h-[70vh]">
<div> 
<p>Code snippets coming soon 👨‍💻...</p>
</div>
<div>
    <Link to="/" >Come back again</Link>
</div>
    </div>
    </div></div>
)
};

export default Snippets;