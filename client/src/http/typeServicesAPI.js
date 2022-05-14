import { $host } from './index';

export const typeServicesList = async () => {
    const data = await $host.get('api/typeServices');
    return data;
}

export const typeServicesGetById = async (typeService) => {
    const data = await $host.get('api/typeServices/get', {
        params: {
            typeService: typeService
        }
    });

    return data;
}

export const createTypeServices = async (typeService) => {
    return await $host.post('api/typeServices', typeService);
}

export const updateTypeServices = async (typeAbout) => {
    await $host.post('api/typeServices/update', typeAbout);
}

export const typeServicesDelete = async (id) => {
    await $host.post('api/typeServices/delete',{
        params: {
            typeService: id
        }
    });
    return `Тип услуги ${id} удалена!`;
}