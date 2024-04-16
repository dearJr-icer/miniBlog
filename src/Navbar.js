import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>the icer blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:'white',
                    backgroundColor:'#f1345d',
                    borderRadius:'8px '
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;