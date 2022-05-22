const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

//print elements in format

const printForecast = function(arr){
    let forecast = "";

    for(let i = 0; i < arr.length; i++){
        forecast += `... ${arr[i]}C in ${i + 1} days `;
    }
    console.log(forecast);
}

printForecast(testData2);