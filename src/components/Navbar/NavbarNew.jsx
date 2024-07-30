import { useEffect, useState } from "react";
import { getToken } from "../../services/localStorage";
import { Link } from "react-router-dom";


function NavbarNew() {
    const [tokens, setTokens] = useState(() => getToken());
    useEffect(() => {
        const newToken = getToken();
        if (newToken) {
        setTokens(newToken);
        }
    }, []);

    const token = getToken();
    const handleSignOut = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
  return (
    <div className='container my-3'>
        <ul class="nav justify-content-center">
            {
                !tokens ? 
                <>
                    <li class="nav-item me-4">
                        <Link class="nav-link text-success fw-medium" aria-current="page" to="/">Home</Link>
                    </li>
                </> : 
                <>
                <li class="nav-item me-4">
                    <Link class="nav-link text-success fw-medium" aria-current="page" to="/dashboard">Home</Link>
                </li>
            </>
            }
            <li class="nav-item me-4">
                {
                    token ? 
                    <>
                        <Link class="nav-link text-success fw-medium" aria-current="page" to="/alerts">Create Alert</Link>
                    </> : 
                    <>
                         <Link class="nav-link text-success fw-medium" aria-current="page" to="/alerts">About Us</Link>
                    </>
                }
                
            </li>
            <li class="nav-item me-4">
                {
                    token ? 
                    <>
                        <Link class="nav-link text-success fw-medium" aria-current="page" to="/edit">Vehicle Details</Link>
                    </> : 
                    <>
                         <Link class="nav-link text-success fw-medium" aria-current="page" to="/alerts">Services</Link>
                    </>
                }
            </li>
            <li class="nav-item me-4">
                <a class="nav-link text-success fw-medium" href="#link">{tokens ? 'About Us' : 'Blogs'}</a>
            </li>
            {
                token ? <>
                    <li class="nav-item me-4">
                        <a class="nav-link text-success fw-medium" aria-current="page" href="#signOut"  onClick={handleSignOut}>Sign Out</a>
                    </li>
                </> : ''
            }
        </ul>
    </div>
  )
}

export default NavbarNew
