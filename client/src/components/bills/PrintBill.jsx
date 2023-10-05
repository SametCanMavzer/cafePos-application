import { Button, Modal, } from 'antd';



const PrintBill = ({ isModalOpen, setIsModalOpen }) => {

    return (
        <Modal title="Fatura Yazdır" open={isModalOpen} footer={false}
            onCancel={() => setIsModalOpen(false)}
            width={800}


        >
            <section className='py-20 bg-black' >
                <div className="max-w-5xl mx-auto bg-white px-6">
                    <article className='overflow-hidden'>
                        <div className="logo my-6">
                            <h2 className='text-4xl font-bold text-slate-700'>LOGO</h2>
                        </div>
                        <div className="bill-details">
                            <div className='grid sm:grid-cols-4 gap-12  grid-cols-3 '>
                                <div className='text-md text-slate-500'>
                                    <p className='font-bold  text-slate-700' >Fatura Detayı:</p>
                                    <p>Unwrapped</p>
                                    <p>Unwrapped1</p>
                                    <p>Unwrapped2</p>
                                    <p>Unwrapped3</p>

                                </div>
                                <div className='text-md text-slate-500'>
                                    <p className='font-bold  text-slate-700' >Fatura Detayı:</p>
                                    <p>Unwrapped</p>
                                    <p>Unwrapped1</p>
                                    <p>Unwrapped2</p>
                                    <p>Unwrapped3</p>

                                </div>
                                <div className='text-md text-slate-500 sm:block hidden'>
                                    <p className='font-bold  text-slate-700' >Fatura Detayı:</p>
                                    <p>Unwrapped</p>
                                    <p>Unwrapped1</p>
                                    <p>Unwrapped2</p>
                                    <p>Unwrapped3</p>

                                </div>
                                <div className='text-md text-slate-500'>
                                    <p className='font-bold  text-slate-700' >Fatura Detayı:</p>
                                    <p>Unwrapped</p>
                                    <p>Unwrapped1</p>
                                    <p>Unwrapped2</p>
                                    <p>Unwrapped3</p>

                                </div>
                            </div>

                        </div>
                        <div className="bill-table-area mt-8">
                            <table className='min-w-full divide-y divide-slate-500 overflow-hidden '>
                                <thead>
                                    <tr className=' border-b border-slate-200'>
                                        <th
                                            scope="col"
                                            className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                        >
                                            Görsel
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                        >
                                            {" "}
                                            Başlık
                                        </th>
                                        <th
                                            colSpan={4}
                                            scope="col"
                                            className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden"
                                        >
                                            {" "}
                                            Başlık
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                        >
                                            Fiyat
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                        >
                                            Adet
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 text-end text-sm font-normal text-slate-700 md:pl-0"
                                        >
                                            Toplam
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b  border-slate-200'>
                                        <td className='py-4  sm:table-cell hidden  '>
                                            <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" className='w-12 h-12 object-cover' />
                                        </td>
                                        <td className="py-4 sm:table-cell hidden">
                                            <div className="flex flex-col">
                                                <span className="font-medium">Şalgam</span>
                                                <span className="sm:hidden inline-block text-xs">
                                                    Birim Fiyatı 5₺
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 sm:hidden" colSpan={4}>
                                            <div className="flex flex-col">
                                                <span className="font-medium">Şalgam</span>
                                                <span className="sm:hidden inline-block text-xs">
                                                    Birim Fiyatı 5₺
                                                </span>
                                            </div>
                                        </td>
                                        <td className='py-4   text-center sm:table-cell hidden'>
                                            <span >5₺</span>
                                        </td>
                                        <td className='py-4   sm:text-center text-right sm:table-cell hidden'>
                                            <span >1</span>
                                        </td>
                                        <td className='py-4   text-end'>
                                            <span >5.00₺</span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th
                                            className="text-right pt-4 sm:table-cell hidden"
                                            colSpan="4"
                                            scope="row"
                                        >
                                            <span className="font-normal text-slate-700">
                                                Ara Toplam
                                            </span>
                                        </th>
                                        <th
                                            className="text-left pt-4 sm:hidden"
                                            scope="row"
                                            colSpan="4"
                                        >
                                            <p className="font-normal text-slate-700">Ara Toplam</p>
                                        </th>
                                        <th className="text-right pt-4" scope="row">
                                            <span className="font-normal text-slate-700">61₺</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th
                                            className="text-right pt-4 sm:table-cell hidden"
                                            colSpan="4"
                                            scope="row"
                                        >
                                            <span className="font-normal text-slate-700">KDV</span>
                                        </th>
                                        <th
                                            className="text-left pt-4 sm:hidden"
                                            scope="row"
                                            colSpan="4"
                                        >
                                            <p className="font-normal text-slate-700">KDV</p>
                                        </th>
                                        <th className="text-right pt-4" scope="row">
                                            <span className="font-normal text-red-600">+4.88₺</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th
                                            className="text-right pt-4 sm:table-cell hidden"
                                            colSpan="4"
                                            scope="row"
                                        >
                                            <span className="font-normal text-slate-700">Genel Toplam</span>
                                        </th>
                                        <th
                                            className="text-left pt-4 sm:hidden"
                                            scope="row"
                                            colSpan="4"
                                        >
                                            <p className="font-normal text-slate-700">Genel Toplam</p>
                                        </th>
                                        <th className="text-right pt-4" scope="row">
                                            <span className="font-normal text-slate-700">65.88₺</span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className='py-9'>
                                <div className="border-t pt-9 border-slate-400">
                                    <p className='text-sm font-light text-slate-700'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Tenetur, tempora tempore quae aspernatur harum voluptate quisquam.
                                        Consequatur fugit molestias maxime, deserunt, nulla vitae debitis
                                        sapiente aliquam dicta error ex est corrupti quisquam quos delectus ut
                                        mollitia, fugiat ad fuga animi maiores! Perferendis, itaque repudiandae
                                        animi molestias consequuntur natus similique autem eum veritatis ipsum

                                        .</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <div className=' flex justify-end mt-4'>
                <Button type='primary' size='large'>Yazdır</Button>
            </div>
        </Modal>
    )
}

export default PrintBill 