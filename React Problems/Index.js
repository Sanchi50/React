//Create h1 heading called react and list what is react.
const aboutReact = <React.Fragment>
                     <h1>React</h1>
                     <p>React is a JAVASCRIPT LIBRARY for building UI.</p>
                     <ul><li>React is declarative language</li>
                     <li>React describe the desired outcome, not the specific step to achieve it.</li>
                     <li>react allows for more efficient updates to the DOM</li>
                     </ul>
                     </React.Fragment>

                   function Name(){
                        return( <>
                        <h1>JSX is JavaScript XML</h1>
                        <p>I have to finish learning this in this month.</p></>);
                        
                     }

                     const root = ReactDOM.createRoot(document.getElementById("root"));
                     root.render(
                        <>{aboutReact}
                            <Name />
                        </>);





