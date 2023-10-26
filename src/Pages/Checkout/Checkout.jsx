import { useLoaderData } from "react-router-dom";

const Checkout = () => {

    const service = useLoaderData();

    return (
        <div>
            <h2>Book Service: {service.title} </h2>
            <form className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Text</span>
                        </label>
                        <input type="text" placeholder="text" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="text" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Text</span>
                        </label>
                        <input type="text" placeholder="text" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Text</span>
                        </label>
                        <input type="text" placeholder="text" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea placeholder="Text Area" className="input input-bordered h-[100px]" required />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-secondary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;