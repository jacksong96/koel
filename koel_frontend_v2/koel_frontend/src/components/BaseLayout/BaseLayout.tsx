import { ReactNode } from "react";
// import Sidebar from "./SideBar";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

interface Props {
    children:ReactNode | ReactNode[];

}

export default function BaseLayout ({children} : Props)
{
    return(
        <div className="layout">
            <Header/>
            <SideBar/> 
            <div className="pt-20 pl-28">
                {children}
            </div>
            
        </div>
    );
}