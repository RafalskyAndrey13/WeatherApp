const IMAGE_BASE_URL = 'http://openweathermap.org/img/w/';

export const getWeatherImageUrl = (icon) => icon !== '' && IMAGE_BASE_URL + icon + ".png";

export const getStringTime = (time) => {
    const date = new Date(time*1000);
    return `${date.getHours()}:00`
};

export const getStringDate = (time) => {
    const date = new Date(time*1000);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
};

export const getDateForUrl = (time) => {
    const date = new Date(time*1000);
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    }
}