import React from 'react'
import { Button, Form, Input, Modal, Table, message } from 'antd';
const Edit = ({ isEditModalOpen, setIsEditModalOpen }) => {
    return (
        <Modal open={isEditModalOpen} title="Kategori İşlemleri" onCancel={() => setIsEditModalOpen(false)} footer={false}>
            <Form>
                <Table bordered />
            </Form>

        </Modal>
    )
}

export default Edit