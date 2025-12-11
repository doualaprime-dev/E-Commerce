
import { Link } from '@inertiajs/react';
import React, { useState } from 'react'

export default function ShopHeader() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const [open, setOpen] = useState(false);

    const categories = [
        ["Congélateurs", "🌡️"],
        ["Machines à laver", "👕"],
        ["Climatiseurs", "💧"],
        ["Cuisinières", "♨️"],
        ["Haut-parleurs", "📻"],
        ["Moulinex", "🍹"],
        ["Micros-onde", "🍝"],
        ["Réfrigérateurs", "🗄️"],
        ["Refroidisseurs d'ai", "🌀"],
        ["Séchoirs", "👚"],
    ];

    return (
        <nav className='w-full flex flex-col justify-center items-center relative'>
            {/** Top Bar */}
            <div className='top-nav w-full flex justify-between items-center bg-black text-white px-[8%] lg:px-[12%] py-3 text-sm'>
                <div className='flex w-1/2 gap-5 items-center'>
                    <div className='relative group'>
                        <span className='cursor-pointer flex items-center hover:text-blue-600'>
                            Français <span className='ml-1 text-xs'>▼</span>
                        </span>

                        <ul className='absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 transition hidden group-hover:flex flex-col gap-2 z-50'>
                            <li>Français</li>
                            <li>Anglais</li>
                        </ul>
                    </div>

                    <div className='relative group'>
                        <span className='cursor-pointer flex items-center hover:text-yellow-600'>
                            USD <span className='ml-1 text-'>▼</span>
                        </span>
                        <ul className='absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 transition hidden group-hover:flex flex-col gap-2 z-50'>
                            <li>USD</li>
                            <li>EUR</li>
                        </ul>
                    </div>

                    <p className='hide'>
                        Livraison gratuite pour toute commande supérieure à 100$
                    </p>
                </div>

                <ul className='flex gap-5 w-1/2 justify-end items-center'>
                    <li className='text-yellow-400 flex items-center gap-1'>
                        ⚡ <a href="#">Vente flash</a>
                    </li>
                    <li className='hover:text-yellow-400 transition'>
                        <Link href="/login"><i className='bi bi-person-circle'></i> Connexion</Link>
                    </li>
                    <li className='hover:text-yellow-400 transition'>
                        <Link href="/contact"><i className='bi bi-globe-americas'></i> Contact</Link>
                    </li>
                </ul>
            </div>

            {/** Middle Nav */}
            <div className='middle-nav w-full flex justify-between items-center px-[5%] lg:px-[12%] py-6 gap-10'>
                <div className='w-1/5'>
                    <Link href='/'>
                        <h2 className='text-xl text-black font-bold'>
                            Douala<span className='text-yellow-500'>Prime</span>
                        </h2>
                    </Link>
                </div>

                <div className='product-search flex items-center h-14 border-4 border-yellow-500 rounded-md w-1/2 overflow-hidden'>
                    <select className='bg-gray-100 font-semibold p-2 w-1/3 border-none outline-none'>
                        <option>Catégories</option>
                        <option>Congélateurs</option>
                        <option>Machines à laver</option>
                        <option>Climatiseurs</option>
                        <option>Cuisinières</option>
                        <option>Haut-parleurs</option>
                        <option>Moulinex</option>
                        <option>Micros-onde</option>
                        <option>Réfrigérateurs</option>
                        <option>Refroidisseurs d'air</option>
                        <option>Séchoirs</option>
                    </select>

                    <input type="text" placeholder='Search for products' className='w-full px-3 py-2 outline-none font-medium bg-gray-100' />
                    <button className='bg-yellow-500 text-white px-5 font-bold uppercase h-full'><i className='bi bi-search text-xl'></i></button>
                </div>

                <div className='get-help flex gap-5 items-center w-1/3 justify-end'>
                    <div className='flex gap-2 items-center'>
                        <span className='text-3xl text-gray-500'>
                            <i className='bi bi-telephone'></i>
                        </span>
                        <div className='flex flex-col text-sm'>
                            <span className='text-gray-500'>Aide ?</span>
                            <span className='text-yellow-600 font-bold'>670 85 72 04</span>
                        </div>
                    </div>

                    <a href="#" className='flex gap-2 items-center'>
                        <span className='text-3xl text-gray-500'><i className='bi bi-suit-heart'></i></span>
                        <div className='flex flex-col text-sm'>
                            <span className='text-gray-500'>Mon</span>
                            <span className='text-yellow-600 font-bold'>Souhaits</span>
                        </div>
                    </a>
                    <a href="#" className='flex gap-2 items-center'>
                        <span className='text-3xl text-gray-500'><i className='bi bi-cart2'></i></span>
                        <div className='flex flex-col text-sm'>
                            <span className='text-gray-500'>Mon</span>
                            <span className='text-yellow-600 font-bold'>Panier</span>
                        </div>
                    </a>
                </div>
            </div>

            {/** Bottom Bar */}
            <div className={`w-full px-[5%] lg:px-[12%] py-6 flex justify-between items-center gap-6 transition-all duration-500 ${menuOpen ? 'h-auto' : ''}`}>
                <div className='relative w-1/5 hide'>
                    <div className='flex items-center justify-between cursor-pointer'
                        onClick={() => setOpen(!open)}
                    >
                        <div className='flex items-center gap-2'>
                            <span className='text-xl'>☰</span>
                            <span className='font-bold'>Catégories</span>
                        </div>
                    </div>

                    {open && (
                        <ul className='absolute top-full left-0 bg-white shadow-md rounded-md overflow-hidden mt-2 w-full z-40 transition-all duration-300'>
                            {categories.map(([label, icon], i) => (
                                <a
                                href=""
                                key={i}
                                className='flex items-center gap-3 px-4 py-2 borcer-b last:border-none hover:bg-gray-100'>
                                    <span>{icon}</span>
                                    <span>{label}</span>
                                </a>
                            ))}
                        </ul>
                    )}
                </div>

                <ul className='flex gap-10 w-2/5 nav-menu font-bold'>
                    <li><Link href="/" className='hover:text-yellow-500 text-xl transition'>Accueil</Link></li>
                    <li><Link href="/about" className='hover:text-yellow-500 text-xl transition'>Apropos</Link></li>
                    <li><Link href="/shop" className='hover:text-yellow-500 text-xl transition'>Boutique</Link></li>
                    <li><Link href="/blog" className='hover:text-yellow-500 text-xl transition'>Blog</Link></li>
                    <li><Link href="/faq" className='hover:text-yellow-500 text-xl transition'>Faq's</Link></li>
                    <li><Link href="/contact" className='hover:text-yellow-500 text-xl transition'>Contact</Link></li>
                </ul>

                <a href="" className='flex items-center gap-3 hide'>
                    <span className='text-2xl text-gray-600'><i className='bi bi-suit-heart'></i></span>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold text-sm'>Today's Deal</span>
                        <span className='bg-red-600 text-white text-xs px-2 pt-1 rounded-sm uppercase relative'>hot</span>
                    </div>
                </a>

                {menuOpen && <span onClick={toggleMenu } className='text-2xl absolute top-4 right-4 cursor-pointer'>✖</span>}
            </div>
        </nav>
    )
}

