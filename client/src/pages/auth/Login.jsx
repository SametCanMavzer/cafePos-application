import { Button, Carousel, Checkbox, Form, Input } from 'antd'
import Link from 'antd/es/typography/Link'
import React from 'react'
import { Link } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel'

const Login = () => {
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

                        <Form.Item label="Şifre" name={"password"} rules={[{
                            required: true,
                            message: "Şifre Alanı Boş Bırakılmaz!"
                        }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name={"remember"} valuePropName='checked'>
                            <div className='flex justify-between items-center'>
                                <Checkbox>Remember me </Checkbox>
                                <Link>Forgot Password ? </Link>
                            </div>
                        </Form.Item>


                        <Form.Item >
                            <Button type='primary' htmlType='submit' className='w-full' size='large'>Giriş Yap</Button>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center absolute left-0 bottom-10 w-full'>
                        Henüz hesabınız yok mu  ? &nbsp;
                        <Link to="/register" className='text-blue-600' >Şimdi kaydol</Link>
                    </div>
                </div>
                <div className='xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden  bg-[#6c63ff] h-full'>
                    <div className='w-full h-full flex items-center '>
                        <div className="w-full">
                            <Carousel autoplay className='!h-full px-6'>
                                <AuthCarousel img="/images/responsive.svg"
                                    title="Responsive" desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                                />
                                <AuthCarousel img="/images/responsive.svg"
                                    title="İstatistikler" desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                                />
                                <AuthCarousel img="/images/responsive.svg"
                                    title="Responsive" desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                                />
                                <AuthCarousel img="/images/responsive.svg"
                                    title="Responsive" desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                                />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login