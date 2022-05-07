import { useState } from "react";
import { createVacancy } from "../../../http/vacancyAPI";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminTextArea } from "../../UI/AdminTextArea/AdminTextArea";

export const AdminVacancyAdd = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [text, setText] = useState('');

    const newVacancy = () => {
        const formData = new FormData();

        formData.append('title', title);
        formData.append('price', price);
        formData.append('text', text);

        createVacancy(formData);
    }

    return (
        <div className="block-admin">
            <div className="container">
                <div className="block__header">
                    <h3 className="block-admin__title">Добавить вакансию</h3>
                </div>
                <form action="" onSubmit={newVacancy}>
                    <AdminInput
                        type="text"
                        placeholder="Заголовок"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <AdminInput
                        type="number"
                        placeholder="Заработная плата"
                        style={{width:'20%'}}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <AdminTextArea
                        rows="10"
                        placeholder="Текст вакансии"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />

                    <AdminButton type="submit">Сохранить</AdminButton>
                </form>
            </div>
        </div>
    );
}