import { useState, useEffect } from "react";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminTextArea } from "../../UI/AdminTextArea/AdminTextArea";
import { useParams } from "react-router-dom";
import { documentGetById, editDocument } from "../../../http/documentsAPI";
import { AdminLoader } from "../../UI/AdminLoader/AdminLoader";

export const AdminDocumentsEdit = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState([]);
    const [fileLoad, setFileLoad] = useState();
    const params = useParams();

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    }

    useEffect(() => {
        const responce = documentGetById(params.id);
        responce.then(data => {
            setId(data.data.id);
            setTitle(data.data.title);
            setText(data.data.text);
            setFileLoad(process.env.REACT_APP_API_URL + data.data.file);
        });
    }, [params.id])

    const updateDocument = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', title);
        formData.append('text', text);
        if (file) {
            formData.append('file', file);
        }
        editDocument(formData).then(() => {
            window.location.reload(true);
            setIsLoading(false);
        });
    }

    return (
        <div className="block-admin">
            {isLoading && <AdminLoader/>}
            <div className="container">
                <div className="block__header">
                    <h3 className="block-admin__title">Изменить документ</h3>
                </div>
                <form action="" onSubmit={(e) => updateDocument(e)}>
                    <div className="admin__edit">
                        <AdminInput
                            type="text"
                            placeholder="Заголовок"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <AdminTextArea
                            rows="10"
                            placeholder="Текст новости"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                        />
                        <a href={fileLoad}>Файл документа: {title} </a>
                        <AdminInput
                            type="file"
                            placeholder="Файл"
                            accept=".doc, .docx"
                            className="admin__input-file"
                            onChange={selectFile}
                        />
                    </div>
                    <AdminButton type="submit">Сохранить</AdminButton>
                </form>
            </div>
        </div>
    );
}