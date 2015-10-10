/**
 * Created by session2 on 10/8/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['City', 'Population Estimate'],
        ['500', 1992229],
        ['400', 3792000],
        ['300', 2695000],
        ['200', 2099000],
        ['100', 1526000]
    ]);

    var options = {
        title: 'Population Estimate For Bears In Yellowstone',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Years',
            minValue: 0
        },
        vAxis: {
            title: 'Bears'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

//var name= prompt("What's your name?");
   // console.log("Welcome," + " " + name);