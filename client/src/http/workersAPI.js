import { $host } from './index';

export const workersList = async () => {
    const data = await $host.get('api/workers');
    return data;
}

export const workersGetById = async (worker) => {
    const data = await $host.get('api/workers/get', {
        params: {
            worker: worker
        }
    });

    return data;
}

export const createWorker = async (worker) => {
    await $host.post('api/workers', worker);
}

export const updateWorker = async (worker) => {
    return await $host.post('api/workers/update', worker);
}

export const workerDelete = async (id) => {
    await $host.post('api/workers/delete',{
        params: {
            worker: id
        }
    });
    return `Сотрудник ${id} удалена!`;
}