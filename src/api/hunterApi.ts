/* eslint-disable import/no-anonymous-default-export */
import ApiClient from "./apiClient";

const endpoint = "hunter";

async function getAllHunters() {
    const { data } = await ApiClient.get(`${endpoint}/all`);

    return data;
}

export default {
    getAllHunters,
};
