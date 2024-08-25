import { Link, useNavigate } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 4000)

    return (
        <div>
            <h2>404 - Not Found</h2>
            <img src="404.jpg" alt="Not Found" class="center" height="700"  />
            <p>Going to the Home Page in 5...</p>
            <p><Link to="/">Go to Home Page!</Link></p>
        </div>
    );

}

export default NotFound;