import { Outlet } from "react-router-dom";
import BlogNavbar from "../shared/Navbar/BlogNavbar";


const MainLayout = () => {
    return (
        <div>
            <BlogNavbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;