import ShopFooter from '@/components/frontend/ShopFooter'
import ShopHeader from '@/components/frontend/ShopHeader'
import React, { ReactNode } from 'react'

export default function ShopFrontLayout({children}:{children:ReactNode}) {
  return (
    <div>
        <ShopHeader/>
        {children}
        <ShopFooter/>
    </div>
  )
}
