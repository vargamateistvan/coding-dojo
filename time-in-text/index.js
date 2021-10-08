const hoursMap = {
    [0]: 'éjfél',
    [1]: 'egy',
    [2]: 'kettő',
    [3]: 'három',
    [4]: 'négy',
    [5]: 'öt',
    [6]: 'hat',
    [7]: 'hét',
    [8]: 'nyolc',
    [9]: 'kilenc',
    [10]: 'tíz',
    [11]: 'tizenegy',
    [12]: 'dél',
    [13]: 'egy',
    [14]: 'kettő',
    [15]: 'három',
    [16]: 'négy',
    [17]: 'öt',
    [18]: 'hat',
    [19]: 'hét',
    [20]: 'nyolc',
    [21]: 'kilenc',
    [22]: 'tíz',
    [23]: 'tizenegy',    
}

const minutesMap = {
    [15]: 'negyed',
    [30]: 'fél',
    [45]: 'háromnegyed'
}

function timeAsText(time) {
    const [hour, min] = time.split(':').map((v) => parseInt(v))

    const isQuarter = min > 0 && (min % 15) === 0
    const isPast = min > 0 && min % 15 <= 7
    if (isQuarter) {
        return `${minutesMap[min]} ${hoursMap[hour + 1]}`
    }
    
    let hourText = hoursMap[hour]
    let minText = hoursMap[min];
    
    if (min > 0 && min < 8) {
        if (hour === 12) {
            return `${minText} perccel múlt dél`
        }
        return `${minText} perccel múlt ${hourText} óra`
    }

    if ((min === 0 || isQuarter) && hour !== 0 && hour !== 12) {
        return `${hourText} óra`
    }


    return hourText
}

module.exports = timeAsText;