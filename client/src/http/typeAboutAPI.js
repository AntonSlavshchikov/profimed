import { $host } from './index';

export const typeAboutList = async () => {
    const data = await $host.get('api/typeAbout');
    return data;
}

export const typeAboutGetById = async (typeAbout) => {
    const data = await $host.get('api/typeAbout/get', {
        params: {
            typeAbout: typeAbout
        }
    });

    return data;
}

export const createTypeAbout = async (typeAbout) => {
    await $host.post('api/typeAbout', typeAbout);
}

export const updateTypeAbout = async (typeAbout) => {
    await $host.post('api/typeAbout/update', typeAbout);
}


export const typeAboutDelete = async (id) => {
    await $host.post('api/typeAbout/delete',{
        params: {
            typeAbout: id
        }
    });
    return `Тип услуги ${id} удалена!`;
}