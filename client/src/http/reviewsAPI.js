import { $host } from './index';

export const reviewsList = async (limit) => {
    const data = await $host.get('api/reviews', {
        params: {
            limit: limit
        }
    });
    return data;
}

export const reviewGetById = async (review) => {
    const data = await $host.get('api/reviews/get', {
        params: {
            reviews: review
        }
    });

    return data;
}

export const createReview = async (fio, text) => {
    console.log("TUT");
    await $host.post('api/reviews',{
        data: {
            fio: fio,
            text: text,
            date: new Date()
        }
    });
}

export const editReview = async (review) => {
    await $host.post('api/reviews/update', review);
}

export const reviewDelete = async (id) => {
    await $host.post('api/reviews/delete',{
        params: {
            review: id
        }
    });
    return `Отзыв ${id} удалена!`;
}