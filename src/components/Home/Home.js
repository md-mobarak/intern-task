import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AiFillCheckSquare } from 'react-icons/ai'
import bkash from '../../assets/bkash.png'
import nagad from '../../assets/Nagad_Logo_2019 2.png'
import masterCard from '../../assets/Mastercard-logo 2.png'
import visaCard from '../../assets/visa-logo-png-2020 1.png'
import roket from '../../assets/roket.png'
import React from 'react';
import logo from '../../assets/Ellipse 5.png'
import './Home.css'
const Home = () => {
    return (

        <main >
            <div className='flex w-full h-[114px] px-20'>
                <img className='w-[40px] h-[40px] mx-[15px]' src={logo} alt="" />

                <section className='grid w-full lg:grid-cols-3'>
                    <div>
                        <h3 className='text-[#047267] text-left font-bold text-xl'>S.R Travels (Pvt) Ltd</h3>
                        <p className='font-bold my-[5px] text-left'>1, AK1J, Non AC</p>
                        <p className='text-[#8D8D8D] font-semibold text-left'>Dhaka - Bogura</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-[#272F30] text-center'>Coach 152852</h4>
                        <p className='my-[22px] text-center font-bold'>04:00 AM</p>
                    </div>
                    <div>
                        <h2 className='font-bold text-right'>B1</h2>
                        <h1 className='text-[#047267] font-bold text-xl text-right my-3'>BDT 550</h1>
                    </div>
                </section>
            </div>
            <section className='h-[220px] bg-[#EEFEFC] pt-[24px]  '>
                <div className='flex justify-between'>
                    <p className='font-semibold pl-[145px]'>Total Ticket Price</p>
                    <p className='font-semibold pr-20'>৳ 550</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-semibold my-[24px] pl-[145px]'>Service Charge</p>
                    <p className='font-semibold pr-20'>৳25</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-semibold pl-[145px] mb-[24px]'>Getway Charge</p>
                    <p className='font-semibold pr-20'>৳ 12</p>
                </div>
                <hr class="new2" />
                <div className='flex justify-between'>
                    <p className='font-bold pl-[145px] my-3'>Total Price</p>
                    <p className='font-bold pr-20 my-3 text-xl'>৳ 587</p>
                </div>
            </section>
            <section className='grid grid-cols-4 pl-20 my-16'>

                <div className=' w-[246px] h-[100px] border border-solid-[#AFAFAF] rounded-xl py-3 px-3'>
                    <span className='flex justify-end'>   <AiFillCheckSquare className='text-[#047267] w-5 h-5'></AiFillCheckSquare></span>
                    <div className='flex justify-center items-center'>
                        <img className='w-[100px] h-[50px]' src={bkash} alt="" />
                    </div>
                </div>

                <div className=' w-[246px] h-[100px] border border-solid-[#AFAFAF] rounded-xl py-3 px-3'>
                    <span className='flex justify-end'>
                        <AiFillCheckSquare className='text-[#AFAFAF] w-5 h-5'></AiFillCheckSquare>
                    </span>
                    <div className='flex justify-center items-center'>
                        <img className='w-[140px] h-[50px]' src={roket} alt="" />
                    </div>
                </div>

                <div className=' w-[246px] h-[100px] border border-solid-[#AFAFAF] rounded-xl py-3 px-3'>
                    <span className='flex justify-end'>   <AiFillCheckSquare className='text-[#AFAFAF] w-5 h-5'></AiFillCheckSquare></span>
                    <div className='flex justify-center items-center'>
                        <img className='w-[100px] h-[42px]' src={nagad} alt="" />
                    </div>
                </div>


                <div className=' w-[246px] h-[100px] border border-solid-[#AFAFAF] rounded-xl py-3 px-3'>
                    <span className='flex justify-end'>   <AiFillCheckSquare className='text-[#AFAFAF] w-5 h-5'></AiFillCheckSquare></span>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center '>
                            <img className='mr-[20px] h-[40px] w-[50px]' src={masterCard} alt="" />
                            <img className='w-[63px] h-[19px]' src={visaCard} alt="" />
                        </div>
                    </div>
                </div>

            </section>
            <div className='flex justify-center mb-10'>
                <button className='w-[370px] h-[60px] bg-[#047267] text-white text-xl font-semibold'>Pay now</button>
            </div>
        </main>

    );
};

export default Home;