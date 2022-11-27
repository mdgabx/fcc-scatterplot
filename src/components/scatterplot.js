import * as d3 from 'd3';

const ScatterPlot = (props) => {
    const dataset = props.scatterData;

    console.log('DATASET', dataset);

    const w = 800;
    const h = 400;
    const padding = 40;

    const svg = d3.select('.chart')
                    .append('svg')
                    .attr('width', w)
                    .attr('height', h);

   

    if(dataset !== undefined && dataset !== null){
     
        //  const heightScale = d3.scaleLinear()
        //                 // .domain([0, d3.max(dataset, (d) => d.Time)])
        //                 .range([0, h - 2 * padding])

        const yAxisScale = d3.scaleTime()
                            // .domain([0, d3.max(dataset, (d) => d.Time)])
                            .range([padding, h - padding])
        
       

        const xAxisScale = d3.scaleLinear()
                                // .domain([0, d3.max(dataset, (d) => d.Year)])
                                .range([padding, w-padding])
        
        const xAxis = d3.axisBottom(xAxisScale);
        const yAxis = d3.axisLeft(yAxisScale);

        svg.append('g')
            .attr("transform", "translate(0," + (h - padding) + ")")
            .attr("id", "x-axis")    
            .call(xAxis);

        svg.append('g')
            .attr("transform", "translate(" + (padding) + ", 0)")
            .attr("id", "y-axis")
            .call(yAxis);

        d3.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('class', 'dot')
            .attr('r', '5')
            .attr("data-xvalue", (d) => d.Year)
            .attr("data-yvalue", (d) => new Date(d["Seconds"] * 1000))
    }

   

    



    return ( 
        <main>
            <div className="container"> 
                <h1 id="title">Doping in Professional Bicycle Racing</h1>
                <div className="chart"></div>
            </div>
        </main>
       
     );
}
 
export default ScatterPlot;