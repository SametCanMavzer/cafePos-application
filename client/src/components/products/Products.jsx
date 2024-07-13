import { useEffect, useState } from "react"
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import Add from "./Add";
import { useNavigate } from "react-router-dom";

const Products = ({ categories }) => {

    const [prodcuts, setProdcuts] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const navigate = useNavigate()


    useEffect(() => {

        const getProducts = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/products/get-all");
                const data = await res.json();
                setProdcuts(data)

            } catch (error) {
                console.log(error)
            }

        }
        getProducts()
    }, [])


    return (
        <div className="produts-wrapper grid grid-cols-card gap-4 ">
            {prodcuts.map((item) => (
                <ProductItem key={item._id} item={item} />
            ))}
            <div className="produts-item border hover:shadow-lg cursor-pointer transition-all 
            select-none bg-purple-800 
            flex justify-center items-center" onClick={() => setIsAddModalOpen(true)}>
                <PlusOutlined className="text-white md:text-2xl hover:opacity-80" />
            </div>
            <div className="produts-item border hover:shadow-lg cursor-pointer transition-all 
            select-none bg-orange-800 flex justify-center items-center hover:opacity-90 min-h[180px] "
                onClick={() => navigate("/products")}>
                <EditOutlined className="text-white md:text-2xl " />
            </div>
            <Add categories={categories} setProdcuts={setProdcuts} prodcuts={prodcuts} isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} />
        </div>
    )
}

export default Products