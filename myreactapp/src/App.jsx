
import React from "react";
import Header from "./components/Header";




import ClickButton from "./components/ClickButton";
import Footer from "./components/footer";
import GreetUser from "./components/GreetUser";
import Counter from "./components/hooks/Counter";
// export default function App() {
//   return(
//     <div>
//       <h1>My application on react</h1>
      
      
//       <Header/>
//       <Footer/>
//     </div>
//   )};  
function App() {
    const battyAya= "Welcome to me React App";
    const year= new Date().getFullYear;
    return (
      <div id="container">
        <Header title={battyAya}/>
        <main>
          <p>this is a simple react application</p>
         
           <ClickButton />
           <GreetUser/>
           <Counter/>
       <Footer/>
       
        </main>
      </div>
    )
  }
  export default App