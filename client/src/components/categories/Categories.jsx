import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import { useState } from "react";
import Add from "./Add";
import Edit from "./Edit";
import "./style.css"

const Categories = ({ categories, setCategories }) => {

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);


    return (
        <ul className="flex md:flex-col gap-4  text-lg">

            {categories.map((item, index) => (
                <li key={index} className="category-item">
                    <span>{item.title}</span>
                </li>
            ))}
            <li className="category-item !bg-purple-800 hover:opacity-80" onClick={() => setIsAddModalOpen(true)}>
                <PlusOutlined className="md:text-2xl" />
            </li>
            <li className="category-item !bg-orange-800 hover:opacity-80" onClick={() => setIsEditModalOpen(true)}>
                <EditOutlined className="md:text-2xl" />
            </li>
            <Add isAddModalOpen={isAddModalOpen} categories={categories} setCategories={setCategories} setIsAddModalOpen={setIsAddModalOpen} />
            <Edit isEditModalOpen={isEditModalOpen} categories={categories} setCategories={setCategories} setIsEditModalOpen={setIsEditModalOpen} />
        </ul>
    )
}

export default Categories