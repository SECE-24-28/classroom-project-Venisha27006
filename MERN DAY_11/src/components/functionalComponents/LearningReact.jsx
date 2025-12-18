import State from './State.jsx';
import Props from './props.jsx';
const LearningReact = () => {
   
    return (
        <div>
            <h1>Learning React</h1>
            <p>This page is all about Learning React</p>
                 
            <hr />
            
            <h2>Props Example</h2>
            <Props hi="Hello Venisha!!" grade="12th" age={18} img="\vite.svg" />
        

            <hr />
            <h2>State Management</h2>
            <State />
    

           
        </div>
    )
}
export default LearningReact;