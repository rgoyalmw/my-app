import exampleData from "./data/exampleData";

const ExampleComponent = () => {
    return (
        <div className="example-container">
            <h1>Example Component</h1>
            <ul className="example-list">
                {
                    exampleData.map((example,index) => (
                        <li key={index}> 
                            {example.number}. {example.name} 
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ExampleComponent;