import { $host } from './index';

export const licensesList = async () => {
    const data = await $host.get('api/licenses');
    return data;
}

export const licensesGetById = async (licenses) => {
    const data = await $host.get('api/licenses/get', {
        params: {
            licenses: licenses
        }
    });

    return data;
}

export const createLicenses = async (licenses) => {
    return await $host.post('api/licenses', licenses);
}

export const updateLicenses = async (licenses) => {
    return await $host.post('api/licenses/update', licenses);
}

export const licensesDelete = async (id) => {
    console.log(id);
    await $host.post('api/licenses/delete',{
        params: {
            licenses: id
        }
    });
    return `Новость ${id} удалена!`;
}