import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Footer } from './Footer';
import PostList from './Posts';
import DataJson from './data/posts.json'
import './data/mystyle.css'


const user = {
  userName: 'Max'
}

const App = () => {
  return (
    <div className="App">
      <h1>Hello {user.userName}</h1>
      <PostList />
      <Footer copyright='C' />
      {DataJson.map((postDetail, index) => {
        return (
          <div className='container'>
            <h3 className='title'>{postDetail.firstName}</h3>
            <p className='text'>{postDetail.shortBiography}</p>
            <a href="http://localhost:3000/" className='contact'>{postDetail.phoneNumber}</a>
          </div>
        )
      })}
    </div>
  )
}



export default App;

      // function App() {
      //   return (
      //     <div className="App">
      //       <h1>Hello world</h1>
      
      //       {/* <header className="App-header">
      //         <img src={logo} className="App-logo" alt="logo" />
      //         <p>
      //           Edit <code>src/App.tsx</code> and save to reload.
      //         </p>
      //         <a
      //           className="App-link"
      //           href="https://reactjs.org"
      //           target="_blank"
      //           rel="noopener noreferrer"
      //         >
      //           Learn React
      //         </a>
      //       </header> */}
      //     </div>
      //   );
      // }