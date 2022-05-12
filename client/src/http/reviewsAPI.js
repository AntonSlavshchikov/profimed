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

export const reviewsCount = async () => {
    const data = await $host.get('api/reviews/count');
    return data;
}

export const createReview = async (review) => {
    console.log("🚀 ~ review", review)
    await $host.post('api/reviews', review);
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