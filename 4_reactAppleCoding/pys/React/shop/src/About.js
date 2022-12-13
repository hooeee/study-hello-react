import { Outlet } from "react-router-dom";

export function About(){
    return (
        <div className="container">
            <h4>회사 정보임</h4>
            <Outlet></Outlet>
        </div> 
    )
}