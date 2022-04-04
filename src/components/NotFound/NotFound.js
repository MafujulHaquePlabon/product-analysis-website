import React from 'react';
import { XIcon } from '@heroicons/react/solid'
const NotFound = () => {
    return (
        <div>
            <h1 className='text-green-700 text-2xl font-semibold flex justify-center'>Not Found 404 <span ><XIcon className='w-8 text-red-600 '></XIcon></span> </h1>
        </div>
    );
};

export default NotFound;