import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { typeAboutGetById } from '../../../http/typeAboutAPI';
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { updateTypeAbout } from "../../../http/typeAboutAPI";
import { AdminLoader } from "../../UI/AdminLoader/AdminLoader";


export const AdminTypeAboutEdit = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const params = useParams();

    useEffect(() => {
        const responce = typeAboutGetById(params.id);
        responce.then(data => {
            setId(data.data.id);
            setTitle(data.data.title);
        });
    }, [params.id])

    const saveTypeAbout = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', title);
        console.log(formData);
        updateTypeAbout(formData).then(() => {
            window.location.reload(true);
            setIsLoading(false);
        });
    }

    return (
        <div className="block-admin">
            {isLoading && <AdminLoader />}
            <div className="container">
                <div className="block__header">
                    <h3 className="block-admin__title">Изменить</h3>
                </div>
                <form action="" onSubmit={(e) => saveTypeAbout(e)}>
                    <AdminInput
                        type="text"
                        placeholder="Заголовок"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <AdminButton type="submit">Сохранить</AdminButton>
                </form>
            </div>
        </div>
    );
}