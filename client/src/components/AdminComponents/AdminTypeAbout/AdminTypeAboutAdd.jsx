import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { useState } from "react";
import { createTypeAbout } from "../../../http/typeAboutAPI";

export const AdminTypeAboutAdd = () => {
    const [title, setTitle] = useState('');

    const newTypeAbout = () => {
        const formData = new FormData();
        formData.append("title", title);
        
        createTypeAbout(formData);
    }
    return (
        <div className="block-admin">
            <div className="container">
                <div className="block__header">
                    <h3 className="block-admin__title">Добавить тип "О нас"</h3>
                </div>
                <form action="" onSubmit={newTypeAbout}>
                    <AdminInput
                        type="text"
                        placeholder="Наименование типа"
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