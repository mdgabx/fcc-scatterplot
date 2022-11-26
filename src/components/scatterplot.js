const ScatterPlot = (props) => {
    const dataset = props.scatterData;

    console.log('DATASET', dataset);

    return ( 
        <main>
            <div className="container"> 
                <h1 id="title">Doping in Professional Bicycle Racing</h1>
            </div>
        </main>
       
     );
}
 
export default ScatterPlot;