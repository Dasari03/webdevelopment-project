class Fetch {
    async getCurrent(input){
        const myKey = "d8de9bcfd85b3bef179c77c4a88a1cd8";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`);

        const data = await response.json();

        console.log(data);

        return data
}
} 