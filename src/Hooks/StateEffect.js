import React, { useState, useEffect } from 'react';
import axios from 'axios';
const StateEffect = () => {
    return (
        <>
            <h1>useState e useEffect</h1>
            {/* <Counter /> */}
            {/* <RenderCounter /> */}
            {/* <Timer /> */}
            {/* <FetchData /> */}
            <ConditionalRendering />
        </>
    )
}


//% useState()
/* function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me</button>
        </div>
    );
}
 */

//% useState come oggetto
/* function Counter() {
    const [state, setState] = useState({
        count: 0,
        name: 'Counter',
    });
    const incrementCount = () => {
        setState(prevState => ({
            ...prevState,
            count: prevState.count + 1,
        }));
    };
    return (
        <div>
            <p>{state.name} clicked {state.count} times</p>
            <button onClick={incrementCount}>
                Click me
            </button>
        </div>
    );
}
 */





//% Sintassi useEffect()
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



//% Altro su useEffect
//$ Hooks in strutture di controllo

/* if (state.count > 0) {
    useEffect(() => {
        document.title = `${state.name} cliccato ${state.count} volte.`;
    }, [state]);
} else {
    document.title = `Contatore mai cliccato.`;
}
 */

/* function Counter() {
    const [state, setState] = useState({ count: 0, name: 'Counter' });
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const incrementCount = () => {
        setState(prevState => ({
            ...prevState,
            count: prevState.count + 1
        }));
    };

    useEffect(() => {
        if (state.count > 0) {
            setState(prevState => ({
                ...prevState,
                name: `Counter cliccato ${prevState.count} volte.`,
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                name: `Counter non ancora cliccato.`,
            }))
        } return () => {
            console.log('Eseguo la pulizia.');
        };
    }, [state.count]);

    useEffect(() => { //$ Cleanup function
        window.addEventListener('resize', resizing);
        return () => {
            window.removeEventListener('resize', resizing);
        }
    });

    function resizing() {
        setWindowHeight(window.innerHeight); // Setta l'altezza della finestra
    }

    return (
        <div>
            <p>{state.name}</p>
            <button onClick={incrementCount}>
                Cliccami
            </button>
            <p>Altezza finestra: {windowHeight}px.</p>
        </div>
    );
}
 */

//$ Rendering condizionale

const ConditionalRendering = () => {
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const getData = async () => {
        try {
            const response = await axios.get(url);
            if (response.status !== 200) { //* Se la risposta non è ok, lancia un errore.
                throw new Error(`Errore nella richiesta: ${response.status}`);
            }
            console.log(response)
            const data = response.data; //* Axios mette i dati della risposta nella proprietà data.
            setPosts(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    /* if (loading) {
        //return <p>Caricamento…</p>;
        return <Loading />;
    }
 */
    /* if (error) {
        //return <p>Errore nella richiesta: 404.</p>;
        return <Error />;
    } */
    /* return (
        <>
            <h2>Dati in arrivo</h2>
            <ul>
                {posts.map(({ title, body, id }) => {
                    return (
                        <li key={id}>
                            <h3>Titolo: {title}</h3>
                            <p>Descrizione: {body}</p>
                            <p>ID: {id}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    ) */

//$ Short-circuit evaluation
/* return (
    <>
        {loading && <Loading />}
        {error && <Error />}
        {loading || error ||
            <>
                <h2>Dati in arrivo</h2>
                <ul>
                    {posts.map(({ title, body, id }) => {
                        return (
                            <li key={id}>
                                <h3>Titolo: {title}</h3>
                                <p>Descrizione: {body}</p>
                                <p>ID: {id}</p>
                            </li>
                        )
                    })}
                </ul>
            </>
        }
    </>
) */


//$ Ternary operator
    /* return (
        <>
            {loading ?
                <Loading /> :
                error ?
                    <Error /> :
                    <>
                        <h2>Dati in arrivo</h2>
                        <ul>
                            {posts.map(({ title, body, id }) => {
                                return (
                                    <li key={id}>
                                        <h3>Titolo: {title}</h3>
                                        <p>Descrizione: {body}</p>
                                        <p>ID: {id}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </>
            }
        </>
    ) */
}

const Loading = () => {
return <p>Caricamento…</p>;
}
const Error = () => {
return <p>Errore nella richiesta: 404.</p>;
}


export default StateEffect;