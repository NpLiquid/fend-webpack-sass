function requestAPI(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log('Name accessed from external API', formText)

    Client.checkForName(formText)

    ///////
    // Base URL for OpenWeatherMap API
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

    // Personal API Key for OpenWeatherMap API
    const apiKey = 'a53f45d3df7c955862417883ba3952ae&units=imperial';

    /* Function to GET Web API Data*/
    const getWebApiData = async (baseURL, key)=>{
        /// Ask for real data from the OpenWeatherMap API
        const res = await fetch(baseURL+'London,uk&APPID='+key);

        //console.log('getWebApiData', res);
        try {
            // response from the API
            const data = await res.json();
            //console.log('API response', data);

            return data;
        }  catch(error) {
            console.log("error getWebApiData", error);
        }
    };

    ///////


    console.log("::: Form Submitted :::")

    // call to the Async Get
    getWebApiData(baseURL, apiKey)
    .then(function(returnedData){
        // update the UI with the data from the API
        document.getElementById('results').innerHTML = returnedData.main.temp
        console.log(returnedData.main.temp)
    })
}

export { requestAPI }
