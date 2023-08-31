var endDate = new Date(dateTo);
var endDateStr = endDate.toString();
var chart = new Highcharts.Chart({
    chart: {
        type: 'pie',
        renderTo: 'map'
    },
    exporting: {
        enabled: false
    },
    title: {
        text: 'Protocol Distribution'
    },
    subtitle: {
        text: 'for the last month ending ' + endDateStr
    },
    credits: {
        position: {
            align: "center"
        }
    },
    colors: [
        "#f14a41",
        "#f79031",
        "#fcb819",
        "#ffdf01",
        "#f4e91d",
        "#d1dc26",
        "#b3d334",
        "#87c540",
        "#81c67f",
        "#77cdeb",
        "#5cbdea",
        "#5c90c7",
        "#4d6eb5",
        "#6a58a4",
        "#b55fa6",
        "#f0478f",
    ],
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'

    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            startAngle: 300,
            dataLabels: {
                enabled: true
            },
            showInLegend: false 
        }
    },
    series: [{
        type: 'pie',
        name: 'Protocol',
        data: data,
        innerSize: '50%' 
    }]
});