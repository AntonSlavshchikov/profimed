import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { reviewGetById, editReview } from '../../../http/reviewsAPI';
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminLoader } from "../../UI/AdminLoader/AdminLoader";

export const AdminReviewsEdit = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState(0);
    const [fio, setFIO] = useState('');
    const [text, setText] = useState('');
    const params = useParams();

    useEffect(() => {
        const responce = reviewGetById(params.id);
        responce.then(data => {
            setId(data.data.id);
            setFIO(data.data.fio);
            setText(data.data.text);
        });
    }, [params.id])

    const saveReview = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append('id', id);
        formData.append('fio', fio);
        formData.append('text', text);

        editReview(formData).then(() => {
            window.location.reload(true);
            setIsLoading(false);
        });;
    }
    return (
        <div className="block-admin">
            {isLoading && <AdminLoader />}
            <div className="container">
                <div className="block__header">
                    <h3 className="block-admin__title">Изменить</h3>
                </div>
                <form action="" onSubmit={(e) => saveReview(e)}>
                    <AdminInput
                        type="text"
                        placeholder="ФИО"
                        value={fio}
                        onChange={(e) => setFIO(e.target.value)}
                        required
                    />
                    <AdminInput
                        type="text"
                        placeholder="Текст"
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