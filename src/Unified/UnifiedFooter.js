import React from 'react';

import ExploreSection from ".//ExploreSection";
import CustomerServiceSection from "./CustomerServiceSection";
import LegalSection from "./LegalSection";
import MoreSection from "./MoreSection";
import FollowUsSection from "./FollowUsSection";

import ExploreDisclosure from './MobileScreen/ExploreDisclosure';
import LegalDisclosure from './MobileScreen/LegalDisclosure';
import CustomerServiceDisclosure from './MobileScreen/CustermerServiceDisclosure';
import MoreDisclosure from './MobileScreen/MoreDisclosure';

function UnifiedFooter() {

    return (
        <div className="bg-black text-white min-w-max">
            <footer className="w-full flex flex-col justify-items-start">

                {/* Medium & Small Screen Style */}
                <div className="w-full flex lg:hidden bg-black text-white justify-center p-4">
                    <div className="w-full">
                        <ExploreDisclosure />
                        <LegalDisclosure />
                        <CustomerServiceDisclosure />
                        <MoreDisclosure />
                        <div className="border-t border-gray-700">
                            <FollowUsSection></FollowUsSection>
                        </div>
                    </div>
                </div>

                {/* large Screem Style */}
                <div className="hidden lg:flex w-full bg-black text-white justify-center py-10">
                    <div className="w-10/12 felx justify-start">
                        <div className="min-w-max flex justify-between">
                            <ExploreSection />
                            <LegalSection />
                            <CustomerServiceSection />
                            <MoreSection />
                            <FollowUsSection />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="w-full bg-black text-white text-xs border-t border-gray-700 flex justify-center">
                    <div className="w-11/12 py-3 lg:w-10/12 felx justify-start">
                        <p> © 2021 New World. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div >
    );
}

export default UnifiedFooter;
