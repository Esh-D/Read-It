import "./navbar.css";
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import CircleIcon from '@mui/icons-material/Circle';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <div className="nbContainer">
            <div className="nbLeft">
                <span className="logo"><CircleIcon/>ReadIt</span>
            </div>
            <div className="nbMidLeft">
                <div className="nbComDropdown">
                    Place Dropdown Here
                </div>
            </div>
            <div className="nbMidRight">
                <div className="searchBar">
                    <SearchIcon className="searchIcon"/>
                    <input type="text" placeholder="Search" className="searchBox" />
                </div>
            </div>
            <div className="nbRight">
                <div className="nbButtons">
                    <div className="nbButton"><AddIcon className="nbBtnIcon"/></div>
                    <div className="nbButton" ><PersonIcon className="nbBtnIcon"/></div> 
                </div>
            </div>
        </div>
    )
}

/*
<PersonIcon style={{ color: "red" }}/> 
^ to change colour of Material UI icon, when a new user makes an account, I can randomize the colour (to set values ofcourse or it would look ugly)
*/

export default Navbar;