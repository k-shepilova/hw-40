import {Link} from 'react-router-dom';

import styles from './styles.module.css';

function UsersList({ users }) {
    return (
        <div className={styles.usersList}>
            {users.map(user => (
                <div className={styles.userItem} key={user.id}>
                    <div className={styles.name}>{user.name}</div>
                    <Link to={`/albums/${user.id}`} className="btn">
                        Show Albums
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default UsersList;
