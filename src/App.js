import { useState, useEffect } from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Counter />
            {/* <RenderCounter /> */}
            {/* <Timer /> */}
            {/* <FetchData /> */}
        </div>
    );
}
//% useState()
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me</button>
        </div>
    );
}

//% useEffect()
/* useEffect(() => {
    // Questo codice viene eseguito dopo ogni rendering
    });
    useEffect(() => {
        // Questo codice viene eseguito solo una volta, equivalente a componentDidMount
    }, []); // L'array vuoto significa che l'effetto non dipende da alcuna prop o stato
    useEffect(() => {
        // Questo codice viene eseguito se count cambia
    }, [count]); // L'effetto si esegue quando il valore di count cambia */


//$ Esempio 1: senza array - Contatore rendering
/* function RenderCounter() {
    const [renderCount, setRenderCount] = useState(0);
    useEffect(() => {
        setRenderCount((prevCount) => prevCount + 1);
    });
    return (
        <div>
            <h2>Render counter:</h2>
            <p>Questo componente è stato renderizzato {renderCount} volte</p>
        </div>
    );
} */


//$ Esempio 2: Con array vuoto - Timer
/* function Timer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
        // Funzione di pulizia che viene eseguita quando il componente viene smontato
        return () => clearInterval(timer);
    }, []); // Array di dipendenze vuoto significa che l'effetto viene eseguito solo una volta
    return (
        <div>
            <h2>Timer:</h2>
            <p>{seconds} secondi</p>
        </div>
    );
} */

//$ Esempio 3: array con props o status variabile - Chiamata AJAX
/* function FetchData() {
    const [id, setId] = useState(1);
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, [id]); // L'effetto viene eseguito ogni volta che 'id' cambia
    return (
        <div>
            <button onClick={() => setId(id + 1)}>Carica il prossimo post</button>
            {data && <div>{data.title}</div>}
        </div>
    );
} */










export default App;
