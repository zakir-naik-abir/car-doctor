

const BookingRow = ({booking, handleDelete, handleConfirm }) => {
  const { _id, customerName, email, img, date, price, service, status} = booking;

  
  return (
      <tr>
        <th>
          <label>
          <button onClick={() =>handleDelete(_id)} className="btn btn-sm btn-circle">X</button>
          </label>
        </th>
        <td>
          <div className="avatar">
            <div className="rounded border-2 w-24 h-24">
              { img ? <img src={img} alt="Avatar Tailwind CSS Component"/> : <img src="https://i.ibb.co/yYf8JKZ/user.png" alt="Photo" />}
            </div>
          </div>
        </td>
        <td>{customerName}</td>
        <td>{service}</td>
        <td>{date}</td>
        <td>{email}</td>
        <td>${price}</td>
        <th>
          {
            status === 'confirm' ? <button className="btn btn-success">Confirmed</button> :
            <button onClick={() => handleConfirm(_id)} className="btn btn-warning">Pending</button>
            }
        </th>
      </tr>
  )
}

export default BookingRow