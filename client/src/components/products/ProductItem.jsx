import React from 'react'

const ProductItem = ({ item }) => {
    return (
        <div className="produts-item border hover:shadow-lg cursor-pointer transition-all select-none">
            <div className="produts-img">
                <img src={item.img} alt="" className="h-28 object-contain w-full border-b" />
            </div>
            <div className="produt-info flex flex-col p-3">
                <span className="font-bold">{item.title}</span>
                <span>{item.price}</span>
            </div>

        </div>
    )
}

export default ProductItem