import { Button, Form, Input } from 'antd'
import Link from 'antd/es/typography/Link'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='h-screen'>
            <div className='flex justify-between h-full'>
                <div className=' relative w-full xl:px-20 px-10 flex flex-col h-full justify-center'>
                    <h1 className='text-center text-5xl font-bold mb-2'>LOGO</h1>
                    <Form layout='vertical'>
                        <Form.Item label="Kullanıcı Adı" name={"username"} rules={[{
                            required: true,
                            message: "Lütfen kullanıcı adını giriniz."
                        }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="E-mail" name={"email"} rules={[{
                            required: true,
                            message: "E-mail Alanı Boş Bırakılmaz!"
                        }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Şifre" name={"password"} rules={[{
                            required: true,
                            message: "Şifre Alanı Boş Bırakılmaz!"
                        }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item label="Şifre Tekrar" name={"passwordAgain"} rules={[{
                            required: true,
                            message: "Şifre Tekrar Alanı Boş Bırakılmaz!"
                        }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item >
                            <Button type='primary' htmlType='submit' className='w-full' size='large'>Kaydol</Button>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center absolute left-0 bottom-10 w-full'>
                        Bir hesabınız var mı ? &nbsp;
                        <Link to="/login" className='text-blue-600' >Şimdi giriş yap</Link>
                    </div>
                </div>
                <div className='xl:w-4/6 min-w-[800px]'>right</div>
            </div>
        </div>
    )
}

export default Register