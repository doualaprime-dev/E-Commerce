import ProductListing from '@/components/frontend/ProductListing'
import ShopBanner from '@/components/frontend/ShopBanner'
import ShopCategories from '@/components/frontend/ShopCategories'
import ShopFrontLayout from '@/layouts/shop-front-layout'
import React from 'react'

export default function
() {
  return (
    <ShopFrontLayout>
        <div className='min-h-screen'>
            <ShopBanner />
            <ShopCategories />
            <ProductListing />
        </div>
    </ShopFrontLayout>
  )
}
