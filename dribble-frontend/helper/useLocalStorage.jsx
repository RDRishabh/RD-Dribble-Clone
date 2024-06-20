import { useState, useEffect } from 'react';

function useLocalStorage(key) {
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem(key);
        return savedData ? JSON.parse(savedData) : [];
    });

    // Listen for changes to local storage
    useEffect(() => {
        const handleStorageChange = () => {
            const savedData = localStorage.getItem(key);
            setData(savedData ? JSON.parse(savedData) : []);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key]);

    // Save data to local storage
    const saveData = (newData) => {
        const updatedData = [...data, newData.toUpperCase()];
        setData(updatedData);
        localStorage.setItem(key, JSON.stringify(updatedData));
    };

    // Delete data from local storage
    const deleteData = (itemToRemove) => {
        const updatedData = data.filter(item => item !== itemToRemove.toUpperCase());
        setData(updatedData);
        localStorage.setItem(key, JSON.stringify(updatedData));
    };

    return [data, saveData, deleteData];
}

export default useLocalStorage;
