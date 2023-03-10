import ReactDOM from 'react-dom/client'
import 'assets/styles/index.scss'
import 'assets/styles/main.scss'
import App from './views/App'
import { RecoilRoot } from 'recoil'
// import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
