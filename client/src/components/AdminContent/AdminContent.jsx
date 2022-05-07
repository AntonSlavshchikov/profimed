import { Outlet } from "react-router-dom";
import { HeaderAdmin } from "../Header/HeaderAdmin";  
import { Panelbar } from "../Panelbar/Panelbar";
export const AdminContent = () => {
    return (
        <div>
            <HeaderAdmin />
            <Panelbar />
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
}