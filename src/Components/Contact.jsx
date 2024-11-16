import BG from '../assets/breadcrumb.jpg';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <div className='pb-[100px] -z-10'>
            <div className='relative top-[5.1rem] left-0 right-0 -z-10'>
                <img src={BG} className='h-[200px] w-full'/>
                <h1 className='py-2 sm:px-20 absolute z-20 top-[5rem] lg:left-[35%] left-[20%] lg:right-[35%] right-[20%] flex justify-center bg-red-600 text-white text-2xl uppercase font-bold'>
                    Contact Us
                </h1>
            </div>
            <div className='mt-[150px] flex md:flex-row flex-col justify-center md:gap-[3rem] gap-[1rem] md:px-[12%] px-[4%]'>
                <div className='border w-full p-4 text-center rounded-md bg-white'>
                    <span className='text-2xl w-[40px] h-[40px] mx-auto text-white bg-red-600 flex justify-center items-center rounded-full'>
                        <ion-icon name="call-outline"></ion-icon>
                    </span>
                    <h2 className='text-xl font-bold py-2'>Address</h2>
                    <p className='text-lg'>
                        Manjhi Chatti, Above Jio Office, Nearby Old Petrol Pump, Manjhi, Saran, Bihar-841313
                    </p>
                </div>
                <div className='border w-full p-4 text-center rounded-md bg-white'>
                    <span className='text-2xl w-[40px] h-[40px] mx-auto text-white bg-red-600 flex justify-center items-center rounded-full'>
                        <ion-icon name="call-outline"></ion-icon>
                    </span>
                    <h2 className='text-xl font-bold py-2'>Phone Number</h2>
                    <p className='text-lg'>+91 8507633137</p>
                    <p className='text-lg'>+91 8507633137</p>
                </div>
                <div className='border w-full p-4 text-center rounded-md bg-white'>
                    <span className='text-2xl w-[40px] h-[40px] mx-auto text-white bg-red-600 flex justify-center items-center rounded-full'>
                        <ion-icon name="mail-unread-outline"></ion-icon>
                    </span>
                    <h2 className='text-xl font-bold py-2'>Email</h2>
                    <p className='text-lg cursor-pointer hover:text-red-600'>
                        <a href='mailto:info@blacksheildglobal.com'>info@blacksheildglobal.com</a>
                    </p>
                </div>
            </div>
            <ContactForm/>
        </div>
    )
}

export default Contact