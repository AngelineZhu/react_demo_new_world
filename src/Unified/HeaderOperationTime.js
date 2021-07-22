import HeaderPopover from '../UI/HeaderPopover';

function HeaderOperationTime() {

    const iconImage = IconClock();
    const thinTitle = 'Open Today';
    const thickTitle = '7.00am -10.00pm';
    const buttonTitle = 'Opening Hours';
    
    const openingHours = [
        {
            day: 'Monday',
            time: '7.00am -10.00pm',
        },
        {
            day: 'Tuesday',
            time: '7.00am -10.00pm',
        },
        {
            day: 'Wednesday',
            time: '7.00am -10.00pm',
        },
        {
            day: 'Thursday',
            time: '7.00am -10.00pm',
        },
        {
            day: 'Friday',
            time: '7.00am -10.00pm',
        },
        {
            day: 'Saturday',
            time: '7.00am -10.00pm',
        },
        {
            day: 'Sunday',
            time: '7.00am -10.00pm',
        },
    ];

    const yourStore = [
        {
            name: 'Store details',
            href: '##',
        },
    ];

    return (
        <div>
            <HeaderPopover thinTitle={thinTitle} thickTitle={thickTitle} buttonTitle={buttonTitle} iconImage={iconImage} staticList={openingHours} linkList={yourStore}></HeaderPopover>
            {/* <HeaderPopover thinTitle={thinTitle} thickTitle={thickTitle} buttonTitle={buttonTitle} iconImage={iconImage} items={yourStore}></HeaderPopover> */}
        </div>
    );
}

export default HeaderOperationTime;


function IconClock() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}