import { $host } from './index';

export const documentsList = async () => {
    const data = await $host.get('api/documents');
    return data;
}

export const documentGetById = async (document) => {
    const data = await $host.get('api/documents/get', {
        params: {
            document: document
        }
    });

    return data;
}

export const createDocuments = async (document) => {
    return await $host.post('api/documents', document);
}

export const editDocument = async (document) => {
    return await $host.post('api/documents/update', document);
}

export const documentDelete = async (id) => {
    console.log(id);
    await $host.post('api/documents/delete',{
        params: {
            document: id
        }
    });
    return `Документ ${id} удален!`;
}

