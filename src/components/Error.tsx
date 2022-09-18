import React from 'react';

interface ErrorProps {
    error: string
}

const Error = ({error}: ErrorProps) => {
    return (
        <div>
            <h1 className="text-center text-red-600 text-4xl">{error}</h1>
            {/*<p className="text-center text-2xl"></p>
            <p className="text-center text-2xl">Try to reload page and check the URL address</p>*/}
        </div>
    );
};

export default Error;