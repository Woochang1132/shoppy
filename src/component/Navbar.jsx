import React from 'react';
import {AiOutlineShopping} from 'react-icons/ai'
import {BsFillPencilFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <Link to='/'>
                <AiOutlineShopping/>
                <h1>Shoppy</h1>
            </Link>
            <nav>
                <Link to='/products'>Products</Link>
                <Link to='/carts'>Carts</Link>
                <Link to='/products/new'>
                    <BsFillPencilFill/>
                </Link>
                <button>Login</button>
            </nav>
        </header>
    );
}

