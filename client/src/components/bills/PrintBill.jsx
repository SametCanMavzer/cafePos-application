import { Button, Card, Form, Input, Modal, Select } from 'antd';



const PrintBill = ({ isModalOpen, setIsModalOpen }) => {

    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <Modal title="Fatura Yazdır" open={isModalOpen} footer={false}
            onCancel={() => setIsModalOpen(false)}


        >
            Fatura
        </Modal>
    )
}

export default PrintBill 