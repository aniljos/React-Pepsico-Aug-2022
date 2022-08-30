
function Hello(props){

    console.log("Hello", props);

    return (
        <div>
            <h4 style={{color: props.color}}>Message: {props.message}</h4>
            <p>This is a simple component</p>
            <p>Generated Time: {new Date().toLocaleString()}</p>
        </div>
    )

}

export default Hello;