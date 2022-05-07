import { Intro } from "./components/Intro";
import { HomeServices } from "./components/HomeServices";
import { HomeForm } from "./components/HomeForm";

export const Home = () =>{
    return(
        <div className="block block-home">
            <Intro/>
            <HomeServices/>
            <HomeForm/>
        </div>
    )
}