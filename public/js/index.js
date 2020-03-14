$.getJSON('https://api.github.com/repos/CSSEGISandData/COVID-19/contents/csse_covid_19_data/csse_covid_19_time_series?ref=master', function (response) {
    //Confirmed cases, deaths and recovery data    
    console.log(response)
});

$.getJSON('https://api.github.com/repos/CSSEGISandData/COVID-19/contents/csse_covid_19_data/csse_covid_19_daily_reports?ref=master', function (response) {
    // Daily reports
    console.log(response)
});