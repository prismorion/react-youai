import React from 'react';
import { useEffect } from 'react';
import NavBar from '../components/ui/NavBar';
import styles from './Profile.module.css';

const Profile = () => {
    useEffect(() => {
        document.title = 'Профиль';
    }, []);

    return (
        <></>
    );
};

export default Profile;
