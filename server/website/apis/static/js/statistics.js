$(document).ready(function() {
    let votesCtx = document.getElementById('votesChart').getContext('2d');
    let votesChart = new Chart(votesCtx, {
        type: 'bar',
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    $.ajax({
        url: '/chart/filter-options/',
        type: 'GET',
        dataType: 'json',
        success: (jsonResponse) => {
            jsonResponse.options.forEach((option) => {
                $('#year').append(new Option(option, option));
            });
            loadAllCharts($('#year').children().first().val());
        },
        error: () => console.log('Failed to fetch chart filter options!'),
    });

    $('#filterForm').on('submit', (event) => {
        event.preventDefault();
        const year = $('#year').val();
        loadAllCharts(year);
    });

    function loadChart(chart, endpoint) {
        $.ajax({
            url: endpoint,
            type: 'GET',
            dataType: 'json',
            success: (jsonResponse) => {
                const title = jsonResponse.title;
                const labels = jsonResponse.data.labels;
                const datasets = jsonResponse.data.datasets;

                chart.data.datasets = [];
                chart.data.labels = [];

                chart.options.plugins.title.text = title;
                chart.options.plugins.title.display = true;
                chart.data.labels = labels;
                datasets.forEach((dataset) => {
                    chart.data.datasets.push(dataset);
                });
                chart.update();
            },
            error: () =>
                console.log('Failed to fetch chart data from ' + endpoint + '!'),
        });
    }

    function loadAllCharts(year) {
        loadChart(votesChart, `/chart/votes/${year}/`);
    }
}); 