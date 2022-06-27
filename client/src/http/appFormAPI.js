import { $host } from './index';

export const appFormList = async () => {
    const data = await $host.get('api/appForm');
    return data;
}

export const appFormGetById = async (appForm) => {
    const data = await $host.get('api/appForm/get', {
        params: {
            appForm: appForm
        }
    });

    return data;
}

export const createAppForm = async (appForm) => {
    return await $host.post('api/appForm', appForm);
}

export const updateAppForm = async (appForm) => {
    return await $host.post('api/appForm/update', appForm);
}

export const appFormDelete = async (id) => {
    await $host.post('api/appForm/delete',{
        params: {
            appForm: id
        }
    });
    return `Запись ${id} удалена!`;
}