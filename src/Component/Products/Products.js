import React from 'react'
import Errorbox from '../Errorbox/Errorbox'
import AddNewProducts from '../AddNewProducts/AddNewProducts'

export default function Products() {
  return (
    <div>
      <AddNewProducts/>
      <Errorbox massage='هیچ محصولی یافت نشد' />
    </div>
  )
}
