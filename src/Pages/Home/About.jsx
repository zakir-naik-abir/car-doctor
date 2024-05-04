import person from '../../../src/assets/images/about_us/person.jpg'
import parts from '../../../src/assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={parts} className="absolute right-5 top-1/2 border-8 border-white w-1/2  rounded-lg shadow-2xl" />
          </div>
          <div className='lg:w-1/2 space-y-5 p-5'>
            <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="capitalize">There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which do not <br />look even slightly believable. </p>
            <p className=' capitalize'>the majority have suffered alteration in some form, by injected <br />humour, or randomised words which do not look even slightly <br /> believable. </p>
            <button className='btn btn-warning '>Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About