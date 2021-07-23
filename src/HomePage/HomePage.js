import React from 'react';
import Popout from '../UI/Popout';
import UnifiedFooter from '../Unified/UnifiedFooter';
import UnifiedHeader from '../Unified/UnifiedHeader';

function HomePage() {
    return (
        <div>
            {/* Unified Header */}
            <UnifiedHeader></UnifiedHeader>
            {/* MainBody */}
            <div>
                <div class="py-32 text-center">
                    <h2 class="font-extrabold text-4xl">Main Body Area!</h2>
                    <Popout></Popout>
                </div>
            </div>
            {/* Unified Footer */}
            <UnifiedFooter></UnifiedFooter>
        </div>
    );
}

export default HomePage;
