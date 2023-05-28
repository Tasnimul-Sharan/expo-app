import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE_URL = 'https://gef.edumama.co/api'; 

const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${AsyncStorage.getItem("accessToken")}`,
    },
});

export const get = (url) => {
    return instance
        .get(url)
        .then((response) => response.data)
        .catch((error) => {
            console.error('GET Error:', error);
            throw new Error('An error occurred while making the GET request.');
        });
};

export const post = (url, data) => {
    return instance
        .post(url, data)
        .then((response) => response.data)
        .catch((error) => {
            console.error('POST Error:', error);
            throw new Error('An error occurred while making the POST request.');
        });
};

export const put = (url, data) => {
    return instance
        .put(url, data)
        .then((response) => response.data)
        .catch((error) => {
            console.error('PUT Error:', error);
            throw new Error('An error occurred while making the PUT request.');
        });
};

export const del = (url) => {
    return instance
        .delete(url)
        .then((response) => response.data)
        .catch((error) => {
            console.error('DELETE Error:', error);
            throw new Error('An error occurred while making the DELETE request.');
        });
};