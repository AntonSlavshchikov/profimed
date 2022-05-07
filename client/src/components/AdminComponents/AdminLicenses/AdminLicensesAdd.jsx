import { useState } from "react";
import { createLicenses } from "../../../http/licensesAPI";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";

export const AdminLicensesAdd = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState([]);

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    }

    const newLicense = () => {
        const formData = new FormData();

        formData.append('title', title);
        formData.append('image', file);

        createLicenses(formData);
    }

    return(
        <div className="block-admin">
        <div className="container">
            <div className="block__header">
                <h3 className="block-admin__title">Добавить сотрудника</h3>
            </div>
            <form action="" onSubmit={newLicense}>
                <AdminInput
                    type="text"
                    placeholder="Название лицензии"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Лицензия (картинка): </label>
                <AdminInput
                    type="file"
                    name="file"
                    placeholder="Kbwtypbz"
                    accept=".png, .jpg, .jpeg"
                    required
                    className="admin__iput-file"
                    onChange={selectFile}
                />

                <AdminButton type="submit">Сохранить</AdminButton>
            </form>
        </div>
    </div>
    );
}