import React from 'react';
import UnifiedFooter from '../Unified/UnifiedFooter';
import UnifiedHeader from '../Unified/UnifiedHeader';
import Hero from '../UI/Hero';
import CardsSection from './CardsSection';

function HomePage() {
    return (
        <div>
            {/* Unified Header */}
            <UnifiedHeader></UnifiedHeader>
            {/* MainBody */}
            <div className="z-20">
                <Hero />
                <div className="bg-yellow-100">
                    <div class="py-32 text-center">
                        <h2 class="font-extrabold text-4xl">Quick Link Section Area!</h2>
                    </div>
                </div>
                <CardsSection />
                <div className="bg-yellow-100">
                    <div className="py-32 text-center">
                        <h2 className="font-extrabold text-4xl">Qucik link Section Area!</h2>
                    </div>
                </div>
            </div>
            {/* Unified Footer */}
            <UnifiedFooter></UnifiedFooter>
        </div>
    );
}

export default HomePage;
