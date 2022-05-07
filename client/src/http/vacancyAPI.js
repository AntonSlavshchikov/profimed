import { $host } from './index';

export const vacancyList = async () => {
    const data = await $host.get('api/vacancy');
    return data;
}

export const vacancyGetById = async (vacancy) => {
    const data = await $host.get('api/vacancy/get', {
        params: {
            vacancy: vacancy
        }
    });

    return data;
}

export const createVacancy = async (vacancy) => {
    await $host.post('api/vacancy', vacancy);
}

export const editVacancy = async (vacancy) => {
    await $host.post('api/vacancy/update', vacancy);
}

export const vacancyDelete = async (id) => {
    await $host.post('api/vacancy/delete',{
        params: {
            vacancy: id
        }
    });
    return `Вакансия ${id} удалена!`;
}