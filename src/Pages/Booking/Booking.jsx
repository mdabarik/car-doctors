import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Bookingrow from "./Bookingrow";

const Booking = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url = `http://localhost:5500/checkout?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooking(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleDelete = id => {
        const proceed = confirm('Are you sure, you want to delte?');
        if (proceed) {
            fetch(`http://localhost:5500/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = booking.filter(book => book._id != id);
                        setBooking(remaining);
                        alert("deleted successfull");
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5500/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirmed'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                const remaining = booking.filter(book => book._id != id);
                const updated = booking.find(book => book._id == id);
                updated.status = 'confirmed';
                const newBookings = [updated, ...remaining];
                setBooking(newBookings);
            }
        })
    }

    return (
        <div>
            <h2 className="text-5xl">Your Bookings: {booking.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Action
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(book => <Bookingrow key={book._id} handleDelete={handleDelete} handleConfirm={handleConfirm} book={book}></Bookingrow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;