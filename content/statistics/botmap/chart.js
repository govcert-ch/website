var chart = new Highcharts.Map({
    chart: {
        type: 'map',
        renderTo: 'map'
    },
    title: {
        text: 'Drone density per Canton'
    },
    exporting: {
        enabled: false
    },
    mapNavigation: {
        enabled: true,
        enableButtons: true,
        buttonOptions: {
            verticalAlign: 'top'
        }
    },

    colorAxis: {
        minColor: "#FFFFFF",
        maxColor: "#f14a41",
        min: 0.01,
        max: 10,
        type: 'logarithmic'
    },

    series: [{
        animation: true,
        data: data,
        mapData: Highcharts.geojson(Highcharts.maps['switzerland']),
        joinBy: ['fips', 'code'],
        name: 'Infected Systems',
        states: {
            hover: {
                color: '#fcb819',
            }
        },
        tooltip: {
            valueSuffix: '\u2030 infected devices'
        }
    }]
});

        