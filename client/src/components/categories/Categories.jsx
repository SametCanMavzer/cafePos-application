import { PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, Modal, message } from 'antd';

import { useState } from "react";

import "./style.css"

const Categories = ({ categories, setCategories }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/categories/add-category", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Kategori Başarıyla eklendi.")
            form.resetFields();
            setCategories([...categories, values]);

        } catch (error) {
            console.log(error);
        }
    };

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
            <Modal title="Yeni Kategori Ekle" open={isAddModalOpen} onCancel={() => setIsAddModalOpen(false)} footer={false}>
                <Form layout="vertical" onFinish={onFinish} form={form}>
                    <Form.Item name="title" label="Kategori Ekle" rules={[{ required: true, message: "Kategori Alanı Boş Geçilemez!" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item className="flex justify-end mb-0" >
                        <Button type="primary" htmlType="submit">   Oluştur</Button>
                    </Form.Item>
                </Form>
            </Modal>

        </ul>
    )
}

export default Categories