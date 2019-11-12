const IMAGE_BASE_URL = 'http://openweathermap.org/img/w/';

export const getWeatherImageUrl = (icon) => icon !== '' && IMAGE_BASE_URL + icon + ".png";

export const getStringTime = (time) => {
    const date = new Date(time*1000);
    return `${date.getHours()}:00`
};

export const getTime = (time) => {
    return new Date(time*1000).getHours();
};

export const getStringDateWithTimestamp = (time) => {
    const date = new Date(time*1000);
    return getStringDate(date.getFullYear(), date.getMonth(), date.getDate());
};

export const getStringDate = (year, month, day) => {
    return `${day}/${month}/${year}`;
};

export const getDateForUrl = (time) => {
    const date = new Date(time*1000);
    return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    }
};