import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://reactjs.org",
//         target: "_blank",
//         rel: "noopener noreferrer"
//     },
//     children: "React"
// } // It will not work because react library creates props for each element but above mentioned props is created by us not react library. so issue is our probs != react library props.


// const reactElement = (
//     <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>Visit React web</a>
// ) // Now it will work because here we just give a function not a object. Now it will create props as per library.


const userName = ' Rishab Kshetri' // injecting dynamic data
const reactElement = React.createElement(
    'a',
    { href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer' },
    'Visit React web', userName
) // This will also work because here we use createElement using react library syntax.


ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    reactElement
)
