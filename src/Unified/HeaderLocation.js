import HeaderPopover from '../UI/HeaderPopover';

function HeaderLocation() {

    const thinTitle = 'Your store is';
    const thickTitle = 'New World Blenheim';
    const buttonTitle = 'Your store';
    const iconImage = IconLocation();

    const staticList = [];

    const yourStore = [
        {
            name: 'Store details',
            href: '##',
        },
        {
            name: 'Change your store',
            href: '##',
        },
    ];

    return (
        <HeaderPopover thinTitle={thinTitle} thickTitle={thickTitle} buttonTitle={buttonTitle} iconImage={iconImage} staticList={staticList} linkList={yourStore}></HeaderPopover>
    );
}

export default HeaderLocation;


function IconLocation() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

    )
}