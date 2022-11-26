const ScatterPlot = (props) => {
    const dataset = props.scatterData;

    console.log('DATASET', dataset);

    return ( 
        <main>
            <div className="container"> 
                <h1>Doping Data</h1>
            </div>
        </main>
       
     );
}
 
export default ScatterPlot;