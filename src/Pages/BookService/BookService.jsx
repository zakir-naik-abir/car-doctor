import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookService = () => {
  const {user} = useContext(AuthContext);
  const service = useLoaderData();
  const { title, price, _id, img} = service;

  const handleBookService = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const booking = {
      customerName: name,
      email, 
      profile: user?.photoURL, 
      date,
      img,
      service:title,
      service_id: _id,
      price: price
    };
    console.log(booking);

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('Serving Booking Successfully')
      }
    })
  }

  return (
    <div>
      <h2 className="text-center text-3xl">Book Service: {title}</h2>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date:</span>
            </label>
            <input type="date" name="date" className="input input-bordered" required />
          </div> 
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount:</span>
            </label>
            <input type="text" defaultValue={'$ '+ price} className="input input-bordered" required />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block" type="submit" value="Booking Confirm" />
        </div>
      </form>
    </div>
  )
}

export default BookService;