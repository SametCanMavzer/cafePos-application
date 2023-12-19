import { useEffect, useState } from "react"


const Products = () => {

    const [prodcuts, setProdcuts] = useState([]);


    useEffect(() => {

        const getProducts = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/products/get-all");
                const data = await res.json();
                setProdcuts(data)

            } catch (error) {
                console.log(error)
            }
            getProducts()
        }
    }, [])


    return (
        <div className="produts-wrapper grid grid-cols-card gap-4 ">
            {prodcuts.map((item) => (
                <div className="produts-item border hover:shadow-lg cursor-pointer transition-all select-none">
                    <div className="produts-img">
                        <img src={item.img} alt="" className="h-28 object-contain w-full border-b" />
                    </div>
                    <div className="produt-info flex flex-col p-3">
                        <span className="font-bold">{item.title}</span>
                        <span>{item.price}</span>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Products