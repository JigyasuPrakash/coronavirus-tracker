var dailyReport = [];
var dates = [];
var mainLandChina = [];
var otherLocation = [];
var totalRecovered = [];

$.ajax({
    url: 'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/PmO6oUpJizhI0jM8pu3n/FeatureServer/0/query?' +
        'f=json' +
        '&where=1%3D1' +
        '&returnGeometry=false' +
        '&spatialRel=esriSpatialRelIntersects' +
        '&outFields=*' +
        '&orderByFields=Report_Date_String%20asc' +
        '&resultOffset=0' +
        '&resultRecordCount=1000' +
        '&cacheHint=true',
    dataType: 'json',
    success: function (response) {
        Object.keys(response.features).forEach(function (key) {
            dailyReport.push(response.features[key].attributes);
        });
        dailyReport.forEach((day) => {
            dates.push((new Date(day.Report_Date).getDate() + '/' + (new Date(day.Report_Date).getMonth() + 1)));
            mainLandChina.push(day.Mainland_China);
            otherLocation.push(day.Other_Locations);
            totalRecovered.push(day.Total_Recovered);
        });
        createGraph();
    },
    error: function (error) {
        setHardCodedResult();
        createGraph();
    }
});

function setHardCodedResult() {
    dates = ["20 Jan", "24 Jan", "28 Jan", "1 Feb", "5 Feb", "9 Feb", "13 Feb", "17 Feb", "21 Feb", "25 Feb", "29 Feb", "1 Mar", "8 Mar", "12 Mar", "14 Mar"];
    mainLandChina = [278, 916, 6000, 14300, 27400, 39800, 59800, 72400, 75500, 77700, 79300, 80300, 80700, 80900, 81000];
    otherLocation = [4, 25, 87, 173, 227, 361, 538, 896, 1400, 2800, 6800, 14900, 29100, 47400, 81700];
    totalRecovered = [0, 36, 110, 284, 1100, 3200, 6300, 12600, 18900, 27900, 39800, 51200, 60700, 68300, 75600];
}

function createGraph() {

    ctx = document.getElementById('chartHours').getContext("2d");
    
    myChart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: dates,
            datasets: [{
                borderColor: "#f17e5d",
                backgroundColor: "rgb(0,0,0,0)",
                pointRadius: 2,
                pointHoverRadius: 4,
                borderWidth: 3,
                label: "MainLand China",
                data: mainLandChina
            },
            {
                borderColor: "#fcc468",
                backgroundColor: "rgb(0,0,0,0)",
                pointRadius: 2,
                pointHoverRadius: 4,
                borderWidth: 3,
                label: "Other Locations",
                data: otherLocation
            },
            {
                borderColor: "#6bd098",
                backgroundColor: "rgb(0,0,0,0)",
                pointRadius: 2,
                pointHoverRadius: 4,
                borderWidth: 3,
                label: "Total Recovered",
                data: totalRecovered
            }
            ]
        },
        options: {
            legend: {
                display: true
            },

            tooltips: {
                enabled: true
            },

            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#9f9f9f",
                        beginAtZero: true,
                        maxTicksLimit: 6,
                    },
                    gridLines: {
                        drawBorder: false,
                        zeroLineColor: "#ccc",
                        color: 'rgba(0,0,0,0.1)'
                    }

                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9f9f9f",
                        maxTicksLimit: 7
                    }
                }]
            },
        }
    });
}