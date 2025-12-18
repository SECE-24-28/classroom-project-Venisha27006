import Props from './props.jsx';

const PropsPage = () => {
    return (
        <div>
            <h1>Props Example</h1>
            <p>This page demonstrates React Props concepts</p>
            <hr />
            <Props hi="Hello Sankari!!" grade="12th" age={18} img="\vite.svg" />
        </div>
    )
}

export default PropsPage;