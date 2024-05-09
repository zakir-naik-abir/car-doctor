import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Providers/AuthProvider"
import BookingRow from "./BookingRow";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
  const {user} = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  // const url = `https://car-doctor-server-seven-gold.vercel.app/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;
  useEffect( () =>{
    // fetch(url, {credentials: 'include'})
    // .then(res => res.json())
    // .then(data => setBookings(data))

    // axios.get(url, {withCredentials: true})
    // .then(res => {
    //   setBookings(res.data);
    // })
    axiosSecure.get(url)
    .then(res => setBookings(res.data))

  },[url, axiosSecure]);

  const handleDelete = id =>{
    const proceed = confirm('Are you sure want to delete?');
    if(proceed){
      fetch(`https://car-doctor-server-seven-gold.vercel.app/bookings/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.deletedCount){
          alert('Deleted successful')
          const remaining = bookings.filter(booking => booking._id !== id);
          setBookings(remaining);
        }
      })
    }
  }

  const handleConfirm = id =>{
    fetch(`https://car-doctor-server-seven-gold.vercel.app/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        // update state
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id);
        updated.status = 'confirm'
        const newBookings = [updated, ...remaining];
        setBookings(newBookings);
      }
    })
  }


  return (
    <div>
      <h2 className="text-center font-bold m-5 text-3xl">My Booking Number: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-200 w-full">
              <th>DELETE</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>SERVICE</th>
              <th>DATE</th>
              <th>EMAIL</th>
              <th>PRICE</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              bookings?.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Bookings