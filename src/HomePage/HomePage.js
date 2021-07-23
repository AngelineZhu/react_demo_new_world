import React from 'react';
import UnifiedFooter from '../Unified/UnifiedFooter';
import UnifiedHeader from '../Unified/UnifiedHeader';
import Hero from '../UI/Hero';

function HomePage() {
    return (
        <div>
            {/* Unified Header */}
            <UnifiedHeader></UnifiedHeader>
            {/* MainBody */}
            <div className="z-10">
                    <Hero/>
                    <div className="bg-yellow-100">
                        <div class="py-32 text-center">
                            <h2 class="font-extrabold text-4xl">Quick Link Section Area!</h2>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div class="py-32 text-center">
                            <h2 class="font-extrabold text-4xl">Ads Section Area!</h2>
                        </div>
                    </div>
                    <div className="bg-yellow-100">
                        <div class="py-32 text-center">
                            <h2 class="font-extrabold text-4xl">Qucik link Section Area!</h2>
                        </div>
                    </div>
            </div>
            {/* Unified Footer */}
            <UnifiedFooter></UnifiedFooter>
        </div>
    );
}

export default HomePage;
