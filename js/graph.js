demo = {
    initChartsPages: function () {
        chartColor = "#FFFFFF";

        ctx = document.getElementById('chartHours').getContext("2d");

        myChart = new Chart(ctx, {
            type: 'line',

            data: {
                labels: ["20 Jan", "24 Jan", "28 Jan", "1 Feb", "5 Feb", "9 Feb", "13 Feb", "17 Feb", "21 Feb", "25 Feb", "29 Feb", "1 Mar", "8 Mar", "12 Mar", "14 Mar"],
                datasets: [{
                    borderColor: "#f17e5d",
                    backgroundColor: "rgb(0,0,0,0)",
                    pointRadius: 2,
                    pointHoverRadius: 4,
                    borderWidth: 3,
                    label: "MainLand China",
                    data: [278, 916, 6000, 14300, 27400, 39800, 59800, 72400, 75500, 77700, 79300, 80300, 80700, 80900, 81000]
                },
                {
                    borderColor: "#fcc468",
                    backgroundColor: "rgb(0,0,0,0)",
                    pointRadius: 2,
                    pointHoverRadius: 4,
                    borderWidth: 3,
                    label: "Other Locations",
                    data: [4, 25, 87, 173, 227, 361, 538, 896, 1400, 2800, 6800, 14900, 29100, 47400, 81700]
                },
                {
                    borderColor: "#6bd098",
                    backgroundColor: "rgb(0,0,0,0)",
                    pointRadius: 2,
                    pointHoverRadius: 4,
                    borderWidth: 3,
                    label: "Total Recovered",
                    data: [0, 36, 110, 284, 1100, 3200, 6300, 12600, 18900, 27900, 39800, 51200, 60700, 68300, 75600]
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
                            beginAtZero: false,
                            maxTicksLimit: 5,
                            //padding: 20
                        },
                        gridLines: {
                            drawBorder: false,
                            zeroLineColor: "#ccc",
                            color: 'rgba(255,255,255,0.05)'
                        }

                    }],

                    xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(255,255,255,0.1)',
                            zeroLineColor: "transparent",
                            display: false,
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9f9f9f"
                        }
                    }]
                },
            }
        });
    }
};