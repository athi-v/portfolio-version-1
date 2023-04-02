import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
    <div className="section">
    <div className="container mx-auto max-w-[90%] lg:max-w-screen-xl flex flex-col justify-center items-center h-[80vh] lg:h-[50vh]">
<div> 
<h1 className="text-6xl">404</h1>
</div>
<div>
    <Link to="/" >Return Home</Link>
</div>
    </div>
    </div>
    )
    };
    
    export default ErrorPage;