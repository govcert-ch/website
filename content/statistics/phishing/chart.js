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
        text: 'Phishing Sites'
    },
    subtitle: {
        text: 'newly added and confirmed Phishing Sites per week'
    },
    xAxis: {
        type: 'datetime',
    },
    yAxis: {
        title: {
            text: 'Number of Phishing Sites'
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
        color:  '#5cbdea',
        fillOpacity: 0.2,
        type: 'area',
        name: 'Phishing URLs',
        pointInterval: 7 * 24 * 3600 * 1000,
        pointStart: pointStart, 
        data: data 
    }]
});