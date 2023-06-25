/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9992028696691909, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "Pokemon.Ability chlorophyll"], "isController": false}, {"data": [0.9782608695652174, 500, 1500, "Pokemon.Pokemon 5"], "isController": false}, {"data": [0.9891304347826086, 500, 1500, "Pokemon.Pokemon 4"], "isController": false}, {"data": [1.0, 500, 1500, "Pokemon.Ability solar-power"], "isController": false}, {"data": [0.9782608695652174, 500, 1500, "Pokemon.Pokemon 3"], "isController": false}, {"data": [0.9891304347826086, 500, 1500, "Pokemon.Pokemon 2"], "isController": false}, {"data": [1.0, 500, 1500, "GET Pokemons with this abilities"], "isController": false}, {"data": [0.9787234042553191, 500, 1500, "Pokemon.Pokemon 1"], "isController": false}, {"data": [1.0, 500, 1500, "Pokemon.Ability overgrow"], "isController": false}, {"data": [1.0, 500, 1500, "Pokemon.Ability blaze"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 5018, 0, 0.0, 59.31765643682727, 23, 1259, 48.0, 80.0, 110.0, 288.6200000000008, 83.77854948577534, 2450.9522397415935, 11.304147892805863], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Pokemon.Ability chlorophyll", 68, 0, 0.0, 40.250000000000014, 25, 147, 34.0, 51.80000000000001, 113.6999999999999, 147.0, 1.162432903689015, 2.8765005854901022, 0.1464393013436357], "isController": false}, {"data": ["Pokemon.Pokemon 5", 46, 0, 0.0, 232.08695652173913, 70, 1206, 211.5, 363.20000000000016, 562.6499999999997, 1206.0, 0.7708678967037018, 168.1967013190639, 0.09861688912908685], "isController": false}, {"data": ["Pokemon.Pokemon 4", 46, 0, 0.0, 251.15217391304347, 85, 1259, 229.0, 329.1, 405.15, 1259.0, 0.7710358699296012, 192.41594294753605, 0.09863837789138452], "isController": false}, {"data": ["Pokemon.Ability solar-power", 53, 0, 0.0, 36.64150943396227, 23, 72, 33.0, 53.2, 65.09999999999998, 72.0, 0.907130387156403, 2.2440579215588947, 0.11427716791325779], "isController": false}, {"data": ["Pokemon.Pokemon 3", 46, 0, 0.0, 247.41304347826085, 66, 1233, 232.0, 424.6, 495.4, 1233.0, 0.7745802953508344, 172.27015040118206, 0.09909181512788995], "isController": false}, {"data": ["Pokemon.Pokemon 2", 46, 0, 0.0, 213.17391304347825, 52, 1223, 202.5, 328.90000000000015, 387.84999999999997, 1223.0, 0.7790668134473707, 147.4050512321111, 0.09966577398594292], "isController": false}, {"data": ["GET Pokemons with this abilities", 4556, 0, 0.0, 51.513827919227296, 23, 215, 48.0, 71.0, 83.0, 125.86000000000058, 77.79523256608155, 1633.0604925807663, 10.559744867794208], "isController": false}, {"data": ["Pokemon.Pokemon 1", 47, 0, 0.0, 233.38297872340416, 63, 1232, 197.0, 386.80000000000024, 563.1999999999992, 1232.0, 0.7863476660532039, 169.67798762443533, 0.10059721118454074], "isController": false}, {"data": ["Pokemon.Ability overgrow", 71, 0, 0.0, 36.12676056338028, 23, 124, 32.0, 49.999999999999986, 72.59999999999992, 124.0, 1.2416494701129728, 3.0720850748487285, 0.15641873207477877], "isController": false}, {"data": ["Pokemon.Ability blaze", 39, 0, 0.0, 34.1025641025641, 23, 75, 32.0, 44.0, 47.0, 75.0, 0.7028420047216565, 1.7391362195660403, 0.08854161973544307], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 5018, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
