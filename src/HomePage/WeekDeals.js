import React from 'react';
import ImageMove from '../UI/ImageMove';

function WeekDeals() {
    return (
        <div>
            <div className="flex w-full relative bg-white justify-center">
                {/* backgroud */}
                <div className="absolute top-0 w-full h-32 md:64 bg-yellow-50">
                </div>

                <ImageMove />
            </div>

        </div>
    )
}

export default WeekDeals;