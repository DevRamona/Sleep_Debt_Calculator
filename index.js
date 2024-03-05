const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 8;
    } else if (day === 'wednesday') {
        return 8;
    } else if (day === 'thursday') {
        return 8;
    } else if (day === 'friday') {
        return 8;
    } else if (day === 'saturday') {
        return 8;
    } else if (day === 'sunday') {
        return 10;
    }
}


const getActualSleepHours = () =>{
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') +
     getSleepHours('saturday') + getSleepHours('sunday');
};
const getIdealSleepHours = () =>{
    const idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours){
        console.log('You got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours){
        const extraSleepHours = actualSleepHours - idealSleepHours;
        console.log('You slept' + extraSleepHours + ' hour(s), you got extra sleep than needed');
    }else {
        const sleepDebtHours = idealSleepHours - actualSleepHours;
        console.log('You slept' + sleepDebtHours + ' hour(s), you got less sleep than you needed this week. Get some rest please.');
    }
    }

    console.log('The total hours i slept last week is: ' +getActualSleepHours());
    console.log('The hours i prefer to sleep per night is: ' +getIdealSleepHours());
    calculateSleepDebt();
