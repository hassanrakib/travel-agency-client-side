import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const tourPackage = {
            title: data.title,
            img: data.img,
            description: data.description,
            include: [
                'Flight Ticket',
                '4 Nights Hotel Accomodation',
                'All meals',
                'Tour Guide',
                'All transportation in destination location'
            ],
            exclude: [
                'Any Private Expenses',
                'Room Service Fees'
            ],
            tourGuide: {
                name: data.tourGuideName,
                img: data.tourGuideImg,
            },
            price: data.price,
            details: {
                location: data.location,
                duration: data.duration,
                date: data.date,
            },
            status: 'Pending'
        };
        fetch('http://localhost:5000/new-package', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tourPackage)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("New tour package has been added!");
                }
            })
    }
    return (
        <div>
            <div className='bg-add-package bg-cover bg-center text-white flex justify-center items-center'>
                <h2 className='md:text-5xl text-4xl text-center'>Add New Package</h2>
            </div>
            <form className='md:w-2/5 w-full mx-auto flex flex-col w-full px-2 my-12' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 my-2 p-2' placeholder="Package Title" {...register("title", { required: true })} />
                <input className='border-2 my-2 p-2' placeholder="Package Image URL" {...register("img", { required: true })} />
                <input className='border-2 my-2 p-2' placeholder="Package Location" {...register("location", { required: true })} />
                <input className='border-2 my-2 p-2' placeholder="Package Duration" {...register("duration", { required: true })} />
                <input className='border-2 my-2 p-2' placeholder="Package Date" {...register("date", { required: true })} />
                <input type='number' className='border-2 my-2 p-2' placeholder="Package Price" {...register("price", { required: true })} />
                <textarea className='border-2 my-2 p-2' placeholder="Package Description" {...register("description", { required: true })} />
                <input className='border-2 my-2 p-2' placeholder="Tour Guide Name" {...register("tourGuideName", { required: true })} />
                <input className='border-2 my-2 p-2' placeholder="Tour Guide Img URL" {...register("tourGuideImg", { required: true })} />
                <input className='bg-red-400 px-8 py-3 rounded-lg text-white font-bold cursor-pointer' type="submit" value="Confirm" />
            </form>
        </div>
    );
};

export default AddPackage;