import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constants.js";

const Navigation = () => {
    return (
        <nav className={`fixed top-2 left-10`}>
            <div className={`flex space-x-4`}>
                {navItems.map(item => <NavItem item={item} key={item.path}/>)}
            </div>
        </nav>
    );
};

export default Navigation;