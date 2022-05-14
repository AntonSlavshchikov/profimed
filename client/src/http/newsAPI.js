import { $host } from './index';

export const newsList = async (limit) => {
    const data = await $host.get('api/news',{
        params: {
            limit:limit
        }
    });
    return data;
}

export const newsGetById = async (news) => {
    const data = await $host.get('api/news/get', {
        params: {
            news: news
        }
    });

    return data;
}

export const newsCount = async () => {
    const data = await $host.get('api/news/count');
    return data;
}

export const createNews = async (news) => {
    return await $host.post('api/news', news);
}

export const editNews = async (news) => {
    return await $host.post('api/news/update', news);
}

export const newsDelete = async (id) => {
    console.log(id);
    await $host.post('api/news/delete',{
        params: {
            news: id
        }
    });
    return `Новость ${id} удалена!`;
}