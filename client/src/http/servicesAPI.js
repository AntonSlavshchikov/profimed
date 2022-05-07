import { $host } from './index';

export const servicesList = async () => {
    const data = await $host.get('api/services');
    return data;
}

export const serviceGetById = async (service) => {
    const data = await $host.get('api/services/get', {
        params: {
            service: service
        }
    });

    return data;
}

export const createService = async (service) => {
    await $host.post('api/services', service);
}

export const updateService = async (service) => {
    return await $host.post('api/services/update', service);
}

export const servicesDelete = async (id) => {
    await $host.post('api/services/delete',{
        params: {
            services: id
        }
    });
    return `Тип услуги ${id} удалена!`;
}