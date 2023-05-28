import React, { useEffect } from 'react';
import { get, post, put, del } from './apiUtils';

const MyData = () => {
    useEffect(() => {
        // GET request example
        get('/Auth/Login')
            .then((data) => {
                console.log('GET response:', data);
            })
            .catch((error) => {
                console.error('GET Error:', error);
            });
            
        get('/holidays/list')
            .then((data) => {
                console.log('GET response:', data);
            })
            .catch((error) => {
                console.error('GET Error:', error);
            });

        // POST request example
        const data = {
            username: username,
            password: password,
        };

        post('/Auth/Login', data)
            .then((data) => {
                console.log('POST response:', data);
            })
            .catch((error) => {
                console.error('POST Error:', error);
            });

        // PUT request example
        const updatedData = { name: 'Jane Doe', age: 35 };
        put('/users/1', updatedData)
            .then((data) => {
                console.log('PUT response:', data);
            })
            .catch((error) => {
                console.error('PUT Error:', error);
            });

        // DELETE request example
        del('/users/1')
            .then((data) => {
                console.log('DELETE response:', data);
            })
            .catch((error) => {
                console.error('DELETE Error:', error);
            });
    }, []);

    return <div>My Data</div>;
};

export default MyData;