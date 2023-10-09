import React, { useState } from 'react'
import Header from "../components/header/Header"
import StatisticCard from '../components/statistics/StatisticCard';



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
                    <div className="statistic-cards grid md:grid-cols-2 xl:grid-cols-4 my-10 md:gap-10 gap-4">
                        <StatisticCard
                            title={"Toplam Müşteri"}
                            amount={"10"}
                            img={"/images/user.png"} />
                        <StatisticCard
                            title={"Toplam Müşteri2"}
                            amount={"11"}
                            img={"/images/money.png"} />
                        <StatisticCard
                            title={"Toplam Müşteri3"}
                            amount={"12"}
                            img={"/images/sale.png"} />
                        <StatisticCard
                            title={"Toplam Müşteri4"}
                            amount={"13"}
                            img={"/images/product.png"} />
                    </div>

                </div>


            </div>

        </>
    )
}

export default StatisticPage