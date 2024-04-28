import {useState, useEffect} from "react";
import {Routes, Route, Link} from 'react-router-dom';

import UsersList from './pages/UsersList';
import UserAlbums from './pages/UserAlbums';
import UserPhotos from './pages/UserPhotos';

import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                    setUsers(data);
                }
            );
    }, []);

    return (
        <Routes>
            <Route index element={<UsersList users={users} />}/>
            <Route path="/albums/:userId" element={<UserAlbums />}/>
            <Route path="/photos/:albumId" element={<UserPhotos />}/>
        </Routes>
    );
}

export default App;
