import React, { useEffect, useState } from 'react';
import {AiOutlineShopping} from 'react-icons/ai'
import {BsFillPencilFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/firebase';

export default function Navbar() {
    const [user, setUser] = useState();
    useEffect(() => {
        onUserStateChange((user) => {
            console.log(user);
            setUser(user);
        })
    } , [])

    const handleLogin = () => {
        login().then((user) => setUser(user));
    }
    const handleLogout = () => {
        logout().then(setUser);
    }
    return (
        <header className='flex justify-between border-b border-gray-300 p-2'>
            <Link to='/' className='flex items-center text-4xl text-brand'>
                <AiOutlineShopping/>
                <h1>Shoppy</h1>
            </Link>
            <nav className='flex items-center gap-4 font-semibold'>
                <Link to='/products'>Products</Link>
                <Link to='/carts'>Carts</Link>
                <Link to='/products/new' className='text-2xl'>
                    <BsFillPencilFill/>
                </Link>
                {!user && <button onClick={handleLogin}>Login</button>}
                {user && <button onClick={handleLogout}>Logout</button>}
            </nav>
        </header>
    );
}

