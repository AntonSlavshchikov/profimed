import { HeaderInner } from "../components/Header/HeaderInner";
import { SupHeader } from "../components/Header/SupHeader";

export const Header = () => {
    return (
        <header className="header">
            <SupHeader/> 
            <HeaderInner/>       
        </header>
    );
}