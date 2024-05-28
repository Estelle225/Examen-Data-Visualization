
fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    sortByCountryPopulation(data);
    
    const top30Countries = data.slice(0,30); 

    const countries = top30Countries.map(country => country.country);
    const populations = top30Countries.map(country => country.population);

    const trace = {
        x: countries,
        y: populations,
        type: 'bar',
        marker: {
            color:'lightblue', 
            line: {
                color: 'black',
                width: 1.5
            }
        }
    };

    const layout = {
        xaxis: {
            title: 'Taille de la population'
        },
        yaxis: {
            title: 'Pays',
            automargin: true
        },
        margin: {
            l: 150
        }
    };

    Plotly.newPlot('bar-graph', [trace], layout);
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}
