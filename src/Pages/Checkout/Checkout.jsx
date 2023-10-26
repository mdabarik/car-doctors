import { useLoaderData } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const Checkout = () => {

    const { user } = useContext(AuthContext)

    const service = useLoaderData();

    const handleCheckout = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.name.value;
        const email = form.email.value;
        const due = form.due.value;
        const message = form.message.value;

        const order = {
            curtomerName: name,
            email,
            date,
            serviceID: service._id,
            price: due,
            message,
            service_title: service.title,
            img: service.img
        }
        console.log(order);

        fetch("http://localhost:5500/checkout", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("service booked successfully.");
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <h2 className="text-center text-3xl">Book Service: {service.title} </h2>
            <form onSubmit={handleCheckout} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" defaultValue={user?.displayName} type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name="date" type="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" defaultValue={user?.email} type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input name="due" type="text" defaultValue={"$" + service.price} placeholder="Due $" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea name="message" placeholder="Text Area" className="input input-bordered h-[100px]" required />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-secondary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;