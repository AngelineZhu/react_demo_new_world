import React from 'react';

function FollowUsSection() {

    return (
        <div className="w-auto flex flex-col justify-start text-md py-2 space-y-5">
            <div className="font-bold">
                <span>Follow us</span>
            </div>
            <div className="flex flex-row items-center space-x-3">
                <span>
                    <a key="" href="##">
                        <img className="w-4 h-4" src="facebook.svg" alt="facebook" />
                    </a>
                </span>
                <span>
                    <a key="" href="##">
                        <img className="w-4 h-4" src="instawhite-new.svg" alt="instagram" />
                    </a>
                </span>
                <span>
                    <a key="" href="##">
                        <img src="here-for-nz.svg" alt="Here for NZ" />
                    </a>
                </span>
            </div>
        </div>
    );
}

export default FollowUsSection;