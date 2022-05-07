import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminTextArea } from "../../UI/AdminTextArea/AdminTextArea";
import { useState } from "react";
import { createWorker } from "../../../http/workersAPI";

export const AdminWorkersAdd = () => {
    const [fio, setFIO] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [exp, setExp] = useState('');
    const [progress, setProgress] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState([]);

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    }

    const newWorker = () => {
        const formData = new FormData();

        formData.append('fio', fio);
        formData.append('image', file);
        formData.append('birthday', date);
        formData.append('status', status);
        formData.append('experience', exp);
        formData.append('progress', progress);
        formData.append('biography', text);

        createWorker(formData)
    }
    return (
        <div className="block-admin">
            <div className="container">
                <div className="block__header">
                    <h3 className="block-admin__title">Добавить сотрудника</h3>
                </div>
                <form action="" onSubmit={newWorker}>
                    <AdminInput
                        type="text"
                        placeholder="ФИО"
                        value={fio}
                        onChange={(e) => setFIO(e.target.value)}
                        required
                    />
                    <AdminInput
                        type="date"
                        placeholder="Дата рождения"
                        style={{ width: "20%" }}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                    <AdminInput
                        type="text"
                        placeholder="Должность"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    />
                    <AdminInput
                        type="number"
                        placeholder="Стаж"
                        style={{ width: "20%" }}
                        value={exp}
                        onChange={(e) => setExp(e.target.value)}
                        required
                    />
                    <AdminInput
                        type="text"
                        placeholder="Заслуги"
                        value={progress}
                        onChange={(e) => setProgress(e.target.value)}
                        required
                    />
                    <AdminTextArea
                        rows="10"
                        placeholder="Биография"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />

                    <label for="file">Изображение сотрудника: </label>
                    <AdminInput
                        type="file"
                        name="file"
                        placeholder="Фото сотрудника"
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