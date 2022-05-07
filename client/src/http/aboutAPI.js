import { $host } from './index';

export const aboutList = async () => {
    const data = await $host.get('api/about');
    return data;
}

export const aboutGetById = async (about) => {
    const data = await $host.get('api/about/get', {
        params: {
            about: about
        }
    });

    return data;
}

export const createAbout = async (about) => {
    await $host.post('api/about', about);
}

export const updateAbout = async (about) => {
    return await $host.post('api/about/update', about);
}

export const aboutDelete = async (id) => {
    await $host.post('api/about/delete',{
        params: {
            about: id
        }
    });
    return `Запись О НАС ${id} удалена!`;
}