import React from 'react';
import UnifiedFooter from '../Unified/UnifiedFooter';
import UnifiedHeader from '../Unified/UnifiedHeader';
import Hero from '../UI/Hero';
import CardsSection from './CardsSection';
import QuickLink from './QiuckLink';
import QuickOrder from './QuickOrder';
import WeekDeals from './WeekDeals';

function HomePage() {
    return (
        <div>
            {/* Unified Header */}
            <UnifiedHeader></UnifiedHeader>
            {/* MainBody */}
            <div className="z-20 flex flex-col justfy-items-center">
                <Hero />
                <QuickLink />
                <CardsSection />
                <WeekDeals />
                <QuickOrder />
                {/* <ImageCarousel/> */}
            </div>
            {/* Unified Footer */}
            <UnifiedFooter></UnifiedFooter>
        </div>
    );
}

export default HomePage;
