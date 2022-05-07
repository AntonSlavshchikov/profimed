import { useState } from "react";
import { createDocuments } from "../../../http/documentsAPI";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminTextArea } from "../../UI/AdminTextArea/AdminTextArea";


export const AdminDocumentsAdd = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState([]);

    const newDocument = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('text', text);
        formData.append('file', file);
        createDocuments(formData);
    }

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    }
    return (
        <div className="block-admin">
            <div className="container">
                <div className="block__header">
                    <h3 className="block-admin__title">Добавить документ</h3>
                </div>
                <form action="" onSubmit={newDocument}>
                    <AdminInput
                        type="text"
                        placeholder="Заголовок"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <AdminTextArea
                        rows="10"
                        placeholder="Текст документа"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                    <label>Файл документа: </label>
                    <AdminInput
                        type="file"
                        placeholder="Файл"
                        accept=".doc, .docx"
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