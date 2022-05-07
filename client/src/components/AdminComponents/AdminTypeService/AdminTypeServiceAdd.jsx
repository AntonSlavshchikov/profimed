import { useState } from "react";
import { createTypeServices } from "../../../http/typeServicesAPI";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";

export const AdminTypeServicesAdd = () => {
    const [title, setTitle] = useState('');
    
    const newTypeServices = () =>{
        const formData = new FormData();
        formData.append('title', title);

        createTypeServices(formData);
    }
    return (
        <div className="block-admin">
            <div className="container">
                <div className="block__header">
                    <h3 className="block-admin__title">Добавить тип услуги</h3>
                </div>
                <form action="" onSubmit={newTypeServices}>
                    <AdminInput type="text" placeholder="Наименование типа услуги" value={title} onChange={(e) => setTitle(e.target.value)} required/>

                    <AdminButton type="submit">Сохранить</AdminButton>
                </form>
            </div>
        </div>
    );
}