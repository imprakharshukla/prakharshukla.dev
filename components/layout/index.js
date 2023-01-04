import {NavBar} from "../navigation";
import {SidebarNav} from "../sidebarNav";
import {useState} from "react";

export const Layout = ({children}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <div>
            <SidebarNav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
            <NavBar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>

            <div
                className="min-h-[calc(100vh-40.8rem)] dark:bg-gray-900 md:min-h-[calc(100vh-39.6rem)] lg:min-h-[calc(100vh-31.6rem)] ">
                {children}
            </div>
        </div>
    );
}