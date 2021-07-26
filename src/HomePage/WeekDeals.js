import React from 'react';
import ImageMove from '../UI/ImageMove';

function WeekDeals() {
    return (
        <div className="hidden md:flex w-full relative bg-white justify-center">
            {/* backgroud */}
            <div className="absolute top-0 w-full h-64 bg-yellow-50">
            </div>

            <ImageMove />
        </div>
    )
}

export default WeekDeals;