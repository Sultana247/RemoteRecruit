// import { Outlet } from "react-router";
// import Navbar from "../Navbar/Navbar";

import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const Main = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen gap-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
          
        </div>
    );
};

export default Main;