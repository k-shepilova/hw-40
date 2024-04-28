import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

import styles from './styles.module.css';

function UserPhotos() {
    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
                console.log(data)
            });
    }, [albumId]);

    return (
        <div className={styles.photos}>
            {photos.map(photo => (
                <img src={photo.url} key={photo.id} className={styles.image} alt="image alternative text"/>
            ))}
        </div>
    );
}

export default UserPhotos;
