import ShopFrontLayout from '@/layouts/shop-front-layout'
import React from 'react'

import ProductData from '../../Data.json';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Autoplay } from 'swiper/modules'

import brand1 from '../../assets/dell.png';
import brand2 from '../../assets/samsung.png';
import brand3 from '../../assets/sanyo.png';
import brand4 from '../../assets/lenovo.png';
import brand5 from '../../assets/oppo.png';
import brand6 from '../../assets/panasonic.png';
import brand7 from '../../assets/asus.png';

import { toast, ToastContainer } from 'react-toastify';
import { Link } from '@inertiajs/react';

export default function ProductDetail() {
    return (
        <ShopFrontLayout>
            <div className='text-center'>
                Detail
            </div>
        </ShopFrontLayout>
    )
}
