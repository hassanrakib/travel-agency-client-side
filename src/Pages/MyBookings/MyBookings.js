import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyBookings.css';

const MyBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/my-bookings/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [user?.email]);

    const cancelBooking = id => {
        const answer = window.confirm('Are you sure you want to cancel?');

        if (answer) {
            fetch(`http://localhost:5000/cancel-booking/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Your booking package has been canceled!");
                        const restBookings = bookings.filter(booking => booking?._id !== id);
                        setBookings(restBookings);
                    }
                })
        }
    }
    return (
        <div>
            <div className='bg-my-bookings bg-cover bg-center text-white flex justify-center items-center'>
                <h2 className='text-5xl'>My Bookings</h2>
            </div>
            <div className='my-12 max-w-6xl mx-auto px-2'>
                {
                    bookings.length === 0 ?
                        <div className="flex justify-center items-center my-5 p-3">
                            <p className='text-xl'>No Bookings Found!</p>
                        </div>
                        :
                        bookings.map(booking => (
                            <div className='shadow-lg p-3 my-5 md:flex justify-around' key={booking?._id}>
                                <h2 className='text-2xl font-bold md:mb-0 mb-5'>{booking?.orderedPackage?.title} - {booking?.orderedPackage?.details.duration} Tour ({booking?.status})</h2>
                                <button onClick={() => cancelBooking(booking?._id)} className='bg-red-400 px-8 py-3 rounded-lg text-white font-bold cursor-pointer'>Cancel Booking</button>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default MyBookings;