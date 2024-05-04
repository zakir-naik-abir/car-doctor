import img1 from '../../../src/assets/images/banner/1.jpg'
import img2 from '../../../src/assets/images/banner/2.jpg'
import img3 from '../../../src/assets/images/banner/3.jpg'
import img4 from '../../../src/assets/images/banner/4.jpg'
import img5 from '../../../src/assets/images/banner/5.jpg'
import img6 from '../../../src/assets/images/banner/6.jpg'
const Banner = () => {
  return (
    <div className='m-5'>
      <div className="carousel w-full max-h-[500px]">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute h-full rounded-xl flex items-center pl-12  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 , 0)]">
            <div className='text-white space-y-4'>
              <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
              <p className='capitalize'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
              <div>
                <button className='btn btn-primary mr-5'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full ">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute h-full rounded-xl flex items-center pl-12  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 , 0)]">
            <div className='text-white space-y-4'>
              <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
              <p className='capitalize'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
              <div>
                <button className='btn btn-primary mr-5'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 

        <div id="slide3" className="carousel-item relative w-full ">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute h-full rounded-xl flex items-center pl-12  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 , 0)]">
            <div className='text-white space-y-4'>
              <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
              <p className='capitalize'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
              <div>
                <button className='btn btn-primary mr-5'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 

        <div id="slide4" className="carousel-item relative w-full ">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute h-full rounded-xl flex items-center pl-12  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 , 0)]">
            <div className='text-white space-y-4'>
              <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
              <p className='capitalize'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
              <div>
                <button className='btn btn-primary mr-5'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full ">
          <img src={img5} className="w-full rounded-xl" />
          <div className="absolute h-full rounded-xl flex items-center pl-12  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 , 0)]">
            <div className='text-white space-y-4'>
              <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
              <p className='capitalize'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
              <div>
                <button className='btn btn-primary mr-5'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide6" className="carousel-item relative w-full ">
          <img src={img6} className="w-full rounded-xl" />
          <div className="absolute h-full flex rounded-xl items-center pl-12  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 , 0)]">
            <div className='text-white space-y-4'>
              <h1 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
              <p className='capitalize'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
              <div>
                <button className='btn btn-primary mr-5'>Discover More</button>
                <button className='btn btn-outline btn-secondary'>Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Banner