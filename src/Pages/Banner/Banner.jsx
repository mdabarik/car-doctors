import img1 from '../../assets/assets/images/banner/1.jpg';
import img2 from '../../assets/assets/images/banner/2.jpg';
import img3 from '../../assets/assets/images/banner/3.jpg';
import img4 from '../../assets/assets/images/banner/4.jpg';
import img5 from '../../assets/assets/images/banner/5.jpg';
import img6 from '../../assets/assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full rounded-lg">
                <div className='bg-gradient-to-r from-[#0f0f0f9f] to-[#07070763] w-full h-[500px] absolute border-2 flex flex-col rounded-lg items-start justify-center space-y-4 pl-6'>
                    <h1 className='text-white w-1/3 text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p className='text-white w-1/3 text-sm'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='text-white'>
                        <button className='btn btn-secondary'>Discover More</button>
                        <button className='btn btn-secondary btn-outline ml-4'>Latest Project</button>
                    </div>
                </div>
                <img src={img1} className="w-full rounded-lg object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='bg-gradient-to-r from-[#0f0f0f9f] to-[#07070763] w-full h-[500px] absolute border-2 flex flex-col rounded-lg items-start justify-center space-y-4 pl-6'>
                    <h1 className='text-white w-1/3 text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p className='text-white w-1/3 text-sm'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='text-white'>
                        <button className='btn btn-secondary'>Discover More</button>
                        <button className='btn btn-secondary btn-outline ml-4'>Latest Project</button>
                    </div>
                </div>
                <img src={img2} className="w-full object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='bg-gradient-to-r from-[#0f0f0f9f] to-[#07070763] w-full h-[500px] absolute border-2 flex flex-col rounded-lg items-start justify-center space-y-4 pl-6'>
                    <h1 className='text-white w-1/3 text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p className='text-white w-1/3 text-sm'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='text-white'>
                        <button className='btn btn-secondary'>Discover More</button>
                        <button className='btn btn-secondary btn-outline ml-4'>Latest Project</button>
                    </div>
                </div>
                <img src={img3} className="w-full object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='bg-gradient-to-r from-[#0f0f0f9f] to-[#07070763] w-full h-[500px] absolute border-2 flex flex-col rounded-lg items-start justify-center space-y-4 pl-6'>
                    <h1 className='text-white w-1/3 text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p className='text-white w-1/3 text-sm'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='text-white'>
                        <button className='btn btn-secondary'>Discover More</button>
                        <button className='btn btn-secondary btn-outline ml-4'>Latest Project</button>
                    </div>
                </div>
                <img src={img4} className="w-full object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;