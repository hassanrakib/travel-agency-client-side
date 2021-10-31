import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { id } = useParams();
    const [tourPackage, setTourPackage] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/place-order/${id}`)
            .then(res => res.json())
            .then(tourPackage => setTourPackage(tourPackage));
    }, [id]);
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.orderedPackage = tourPackage;
        data.status = "Pending";
        fetch('http://localhost:5000/booking-confirm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Order has been confirmed");
                }
            })
    };
    return (
        <div>
            <div className='bg-place-order bg-cover bg-center text-white flex justify-center items-center'>
                <h1 className='text-5xl'>Book Your Tour</h1>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto my-12">
                <div className='p-4'>
                    <h2 className='font-bold text-4xl mb-5'>{tourPackage?.title}</h2>
                    <div>
                        <img src={tourPackage?.img} alt="" />
                    </div>
                    <h2 className='text-2xl my-3'>Description</h2>
                    <p className='mb-5'>{tourPackage?.description}</p>
                    <h2 className='text-4xl font-bold'>Booking</h2>
                    <form className='flex flex-col w-full px-2' onSubmit={handleSubmit(onSubmit)}>
                        <input className='border-2 mt-2 p-2' placeholder="Your name..." defaultValue={user?.displayName} {...register("name")} /><br />
                        {errors.name && <span className='text-red-900'>This field is required</span>}<br />
                        <input className='border-2 mt-2 p-2' placeholder="Your email..." defaultValue={user?.email} {...register("email", { required: true })} /><br />
                        {errors.email && <span className='text-red-900'>This field is required</span>}<br />
                        <textarea className='border-2 mt-2 p-2' placeholder="Your Address..." {...register("address", { required: true })} /><br />
                        {errors.address && <span className='text-red-900'>This field is required</span>}<br />
                        <h5 className='text-2xl my-3'>Cost: {tourPackage?.price}$</h5>
                        <input className='bg-red-400 px-8 py-3 rounded-lg text-white font-bold cursor-pointer' type="submit" value="Confirm" />
                    </form>
                </div>
                <div className='md:w-96 w-full shadow-lg p-10 mx-auto'>
                    <h3 className='text-2xl mb-2 font-bold'>Tour Guide</h3>
                    <div>
                        <img className='rounded-lg' src={tourPackage?.tourGuide?.img} alt="" />
                    </div>
                    <h3 className='text-2xl my-2 text-center'>{tourPackage?.tourGuide?.name}</h3>
                    <div className='my-5'>
                        <div className='flex items-center mb-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full text-red-400 bg-white p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div className='ml-5'>
                                <p className='font-bold text-lg'>Location</p>
                                <p className='font-light'>{tourPackage?.details?.location}</p>
                            </div>
                        </div>
                        <div className='flex items-center mb-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full text-red-400 bg-white p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className='ml-5'>
                                <p className='font-bold text-lg'>Durations</p>
                                <p className='font-light'>{tourPackage?.details?.duration}</p>
                            </div>
                        </div>
                        <div className='flex items-center mb-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full text-red-400 bg-white p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div className='ml-5'>
                                <p className='font-bold text-lg'>Date</p>
                                <p className='font-light'>{tourPackage?.details?.date}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;