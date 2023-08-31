var start = new Date();
var offset = start.getDay() - 1
if(offset < 0) {
    offset = 6
}
nrweeks = data.length;
start.setDate(start.getDate() - (nrweeks-1)*7 - offset);
pointStart = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'map',
        zoomType: 'x'

    },
    title: {
        text: 'Vulnerable Systems'
    },
    subtitle: {
        text: 'Potential vulnerable systems over time'
    },
    xAxis: {
        type: 'datetime',
    },
    yAxis: {
        title: {
            text: 'Vulnerable Systems'
        },
        min: 0
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            marker: {
                enabled: false
            },
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
        }
    },
    series: [{
        type: 'area',
        name: 'VulnerableSystems',
        color:  '#5cbdea',
        fillOpacity: 0.2,
        pointInterval: 24 * 3600 * 7 * 1000,
        //pointIntervalUnit: week,
        pointStart: pointStart, 
        data: data 
    }]
});