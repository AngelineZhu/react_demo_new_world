import React from 'react';

function UnifiedHeader(){
    return(
        <div>
            {/* Header Ribbon */}
            <div className="bg-red-800 text-white text-md">
                Header Ribbon Area
            </div>
            {/* Search Ribbon */}
            <div className="bg-gray-100 text-black text-lg">
                Search Ribbon Area
            </div>
            {/* Nav Ribbon */}
            <nav className="bg-gray-200 border-t border-gray-300 text-xl text-red-800">
                <div>
                    Nav Bar Area
                </div>
            </nav>
        </div>
    );
}

export default UnifiedHeader;
