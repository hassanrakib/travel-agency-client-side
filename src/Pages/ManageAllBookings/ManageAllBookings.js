import React, { useEffect, useState } from 'react';

const ManageAllBookings = () => {
    const [matchedCount, setMatchedCount] = useState(0);
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/all-bookings`)
            .then(res => res.json())
            .then(data => {
                setAllBookings(data);
            })
    }, [matchedCount]);

    const cancelBooking = id => {
        const answer = window.confirm('Are you sure you want to cancel?');

        if (answer) {
            fetch(`http://localhost:5000/cancel-booking/${id}`, {
                method:"DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Your booking package has been canceled!");
                        const restBookings = allBookings.filter(booking => booking?._id !== id);
                        setAllBookings(restBookings);
                    }
                })
        }
    }
    const approve = id => {
        fetch(`http://localhost:5000/update-booking/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.matchedCount) {
                setMatchedCount(data.matchedCount);
            }
        })
    }
    return (
        <div>
            <div className='bg-my-bookings bg-cover bg-center text-white flex justify-center items-center'>
                <h2 className='text-5xl'>All Bookings</h2>
            </div>
            <div className='my-12 max-w-6xl mx-auto px-2'>
                {
                    allBookings.map(booking => (
                        <div className='shadow-lg p-3 my-5 md:flex justify-around' key={booking?._id}>
                            <h2 className='text-2xl font-bold md:mb-0 mb-5'>{booking?.orderedPackage?.title} - {booking?.orderedPackage?.details.duration} Tour ({booking?.status})</h2>
                            <button onClick={() => cancelBooking(booking?._id)} className='bg-red-400 px-8 py-3 rounded-lg text-white font-bold cursor-pointer'>Cancel Booking</button>
                            <button className='bg-red-400 px-8 py-3 rounded-lg text-white font-bold cursor-pointer' onClick={() => approve(booking?._id)} >Approve</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageAllBookings;