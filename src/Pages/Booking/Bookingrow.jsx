
const Bookingrow = ({ book, handleDelete, handleConfirm }) => {

    const { customerName, email, date, service_title, price, img, status } = book;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(book._id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask rounded-lg mask-squircle w-24 h-24">
                        <img src={img} alt="Avatar" />
                    </div>
                </div>
            </td>
            <td>{customerName}</td>
            <td>{email}</td>
            <td>${price}</td>
            <th>
                {
                    status == 'confirmed' ?
                        <span className="font-bold text-primary rounded-full p-3">Approved</span> 
                    :
                    <button onClick={() => handleConfirm(book._id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default Bookingrow;