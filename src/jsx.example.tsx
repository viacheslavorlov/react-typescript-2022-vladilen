import {createElement as e, useState} from 'react';


function App() {
    const [count, setCount] = useState(0)
    // без JSX
    return e('div', {className: 'container'}, [
        e('h1',{key: 1, className: 'font-bold underline mb-5 m-10'},`Typescrypt + React ${count}`),
        e('button', {key: 2, className: 'py-2 px-4 border m-10', onClick: () => setCount(count => count+1)}, 'click me!')])
        ;}

export default App;
