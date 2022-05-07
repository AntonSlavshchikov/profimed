import { useSelector } from "react-redux";
import { ListEmpty } from "../../../components/ListEmpty/ListEmpty"
import { AboutItem } from "./AboutItem";

export const AboutList = () => {
    const typeAbout = useSelector(state => state.typeAbout.typeAbout);
    const about = useSelector(state => state.about.about);
   
    return (
        <div className="about__list" >
            {
                typeAbout.length !== 0
                    ? typeAbout.map((item) =>
                        <div className="about__block" key={item.id} id={item.id}>
                            <h5 className="about__block-title" id={`${item.id}`}>{item.title}</h5>
                            {about.map((aboutItem) =>
                                aboutItem.type === item.id && <AboutItem key={aboutItem.id} about={aboutItem} />
                            )}
                        </div>
                    )
                    : <ListEmpty />
            }
        </div >
    );
}