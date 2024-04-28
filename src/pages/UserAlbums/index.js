import {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';

import styles from './styles.module.css';

function UserAlbums() {
    const {userId} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data));
    }, [userId]);

    return (
        <div className={styles.albums}>
            {albums.map(album => (
                <div key={album.id} className={styles.album}><h3 className={styles.title}>{album.title}</h3>
                    <Link to={`/photos/${album.id}`} className="btn">
                        Show Photos
                    </Link>
                </div>

            ))}
        </div>
    );
}

export default UserAlbums;
