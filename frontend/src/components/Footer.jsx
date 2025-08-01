import React from 'react'

const Footer = () => {
    return (
        <footer className='border-t border-t-gray-200 py-8'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <h2 className='text-xl font-bold'>Job Hunt</h2>
                        <p className='text-sm'>@2025 Job Hunt. All Rights Reserved.</p>
                    </div>

                    <div className='flex space-x-4 md:mt-0'>
                        <a href="#" className='hover:text-gray-400' aria-label="Twitter">
                            <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a href="#" className='hover:text-gray-400' aria-label="Facebook">
                            <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a href="#" className='hover:text-gray-400' aria-label="Instagram">
                            <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
