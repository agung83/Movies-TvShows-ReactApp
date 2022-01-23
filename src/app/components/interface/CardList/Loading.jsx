import React from 'react';

const Loading = () => {
    return (
        <div className="shadow-lg rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse  space-x-4">
                <div className=" space-y-4">
                    <div className="rounded-t-lg bg-gray-200 w-full h-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Loading;
