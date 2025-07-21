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
                        <a href="#" className='hover:text-gray-400' area-label="Twitter">
                            <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.34" /></svg>
                        </a>
                        <a href="#" className='hover:text-gray-400' area-label="Twitter">
                            <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.34" /></svg>
                        </a>
                        <a href="#" className='hover:text-gray-400' area-label="Twitter">
                            <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.34" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;

