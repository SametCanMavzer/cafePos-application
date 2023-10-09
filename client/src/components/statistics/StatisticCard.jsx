import React from 'react'

const StatisticCard = ({ title, amount, img }) => {
    return (
        <div className="card-item p-8 rounded-lg bg-gray-800">
            <div className="flex gap-x-4">
                <div className='rounded-full bg-white w-16 h-16 p-3'>
                    <img src={img} alt="" />
                </div>
                <div className='text-white'>
                    <p className='mb-2 text-lg font-medium text-gray-400'>{title}</p>
                    <p className='text-xl font-semibold text-gray-100'>{amount}</p>
                </div>
            </div>
        </div>
    )
}

export default StatisticCard