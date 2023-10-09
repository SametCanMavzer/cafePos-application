import React, { useState } from 'react'
import Header from "../components/header/Header"



const StatisticPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <>
            <Header />
            <div className='px-6'>
                <h1 className='text-4xl font-bold text-center
                 mb-4'>İstatistiklerim</h1>
                <div className='statistic-section'>
                    <h2 className='text-xl'>Hoş geldin
                        <span className='text-green-700 font-bold text-xl'>admin</span>
                    </h2>
                    <div className="statistic-cards grid grid-cols-4 my-10">
                        <div className="card-item p-8 rounded-lg bg-gray-800">
                            <div className="flex gap-x-4">
                                <div className='rounded-full bg-white w-16 h-16 p-3'>
                                    <img src="/images/user.png" alt="" />
                                </div>
                                <div className='text-white'>
                                    <p className='mb-2 text-lg font-medium text-gray-400'>Toplam Müşteri</p>
                                    <p className='text-xl font-semibold text-gray-100'>6</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default StatisticPage