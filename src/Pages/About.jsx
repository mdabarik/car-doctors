import person from '../assets/assets/images/about_us/person.jpg';
import parts from '../assets/assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="flex flex-row items-center justify-between my-12 mb-20 mx-auto">
            <div className='w-1/2 relative'>
                <img className='w-3/4 rounded-lg shadow-2xl' src={person} alt="" />
                <img className='w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg' src={parts} alt="" />
            </div>
            <div className='w-1/2 space-y-3'>
                <h1 className='text-2xl font-bold text-orange-700'>About us</h1>
                <h2 className='text-5xl font-bold'>We are qualified & of experience in this field</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestiae illum soluta, a veniam aliquid fuga accusantium magni aut vero.</p>
                <button className='btn btn-secondary btn-outline'>Get more info</button>
            </div>
        </div>
    );
};

export default About;