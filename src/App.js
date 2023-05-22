import "./App.css";
import { useState} from "react";
function App() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  // const [bg,setBg]=useState('')

  // let image = [
  //   "https://wallpaperaccess.com/full/1561814.jpg",
  //   " https://wallpaperaccess.com/full/288732.jpg",
  //   "https://wallpaperaccess.com/full/1225195.jpg",
  //   "https://wallpaperaccess.com/full/1561840.jpg",
  //   "https://wallpaperaccess.com/full/1561878.jpg",
  //   "https://wallpaperaccess.com/full/1561905.jpg",
  //   " https://wallpaperaccess.com/full/1561949.jpg",
  //   "https://wallpaperaccess.com/full/1561966.jpg",
  //   "https://wallpaperaccess.com/full/31580.jpg"
  // ];

  // function Timer() {
  //   setInterval(changeImage(), 3000);
  // }
  // Timer()
  // function changeImage() {   
  //   var i = Math.floor((Math.random() * 5));
  //   setBg(image[i])
  //   console.log(bg)
  // }
  const boxes = [
    {
      url: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/tv.svg",
      title: "Enjoy on your TV",
      content:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
    },
    {
      url: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/popcorn.svg",
      title: "Watch everywhere",
      content:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    },
    {
      url: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/crystalball.svg",
      title: "Create profiles for kids",
      content:
        "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
    },
    {
      url: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/download.svg",
      title: "Download your shows to watch offline",
      content: "Save your favourites easily and always have something to watch."
    }
  ];

  const handleClickone = () => {
    setOne(!one);
  };
  const handleClicktwo = () => {
    setTwo(!two);
  };
  const handleClickthree = () => {
    setThree(!three);
  };
  const handleClickfour = () => {
    setFour(!four);
  };
  const handleClickfive = () => {
    setFive(!five);
  };
  const handleClicksix = () => {
    setSix(!six);
  };

  // style={{backgroundImage:`url(${bg})`}}
  return (
    <div id="App" >
      <header className="header">
        <div id="netlify-icon">NETFLIX</div>
        <div className="top-nav">
          <select className="select">
            <option className="option">English</option>
            <option className="option">हिंदी</option>
            <option className="option">தமிழ்</option>
          </select>
          <button className="Signin-btn">Sign In</button>
        </div>
      </header>
      <main className="main">
        <div className="content-one">Unlimited movies, TV shows and more</div>
        <div className="content-two">Watch anywhere. Cancel anytime.</div>
        <div className="content-three">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div style={{ marginTop: "20px" }}>
          <input type="text" placeholder="Email address" />
          <button className="getStarted-btn">Get Started ›</button>
        </div>
      </main>
      <hr style={{ width: "80%", fontSize: "20px", color: "white" }} />
      <div id="design-box-container">
        {boxes.map((item, index) => {
          return (
            <div className="design-box" key={index}>
              <img src={item.url} alt="404_ERROR" />
              <div className="design-title">{item.title}</div>
              <div className="design-content">{item.content}</div>
            </div>
          );
        })}
      </div>
      {/* <hr style={{width:"80%",fontSize:"20px",color:"white"}}/> */}
      <div id="question-head">Frequently Asked Questions</div>
      <div id="question-query">
        <div className="click">
          <div className="question">What is Netflix?</div>
          <div className="plus" onClick={handleClickone}>
            +
          </div>
        </div>
        {one && (
          <span className="question click span">
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices.
            <br />
            <br />
            You can watch as much as you want, whenever you want, without a
            single ad – all for one low monthly price. There's always something
            new to discover, and new TV shows and movies are added every week!
          </span>
        )}
        <div className="click">
          <div className="question">How much does Netflix cost?</div>
          <div className="plus" onClick={handleClicktwo}>
            +
          </div>
        </div>
        {two && (
          <span className="question click span">
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from ₹
            149 to ₹ 649 a month. No extra costs, no contracts.
          </span>
        )}
        <div className="click">
          <div className="question">Where can I watch?</div>
          <div className="plus" onClick={handleClickthree}>
            +
          </div>
        </div>
        {three && (
          <span className="question click span">
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles.
            <br />
            <br />
            You can also download your favourite shows with the iOS, Android, or
            Windows 10 app. Use downloads to watch while you're on the go and
            without an internet connection. Take Netflix with you anywhere.
          </span>
        )}
        <div className="click">
          <div className="question">How do I cancel?</div>
          <div className="plus" onClick={handleClickfour}>
            +
          </div>
        </div>
        {four && (
          <span className="question click span">
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </span>
        )}
        <div className="click">
          <div className="question">What can I watch on Netflix?</div>
          <div className="plus" onClick={handleClickfive}>
            +
          </div>
        </div>
        {five && (
          <span className="question click span">
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </span>
        )}
        <div className="click">
          <div className="question">Is Netflix good for kids?</div>
          <div className="plus" onClick={handleClicksix}>
            +
          </div>
        </div>
        {six && (
          <span className="question click span">
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and films
            in their own space.
            <br />
            <br />
            Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block
            specific titles you don’t want kids to see.
          </span>
        )}
      </div>
      <div id="bottom-btn">
        <div className="content-three">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div style={{ marginTop: "20px" }}>
          <input type="text" placeholder="Email address" />
          <button className="getStarted-btn">Get Started ›</button>
        </div>
      </div>
      <div style={{fontSize:"20px",paddingLeft:"8%",paddingTop:"8%",color:"white"}}>Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></div>
      <div className="link-tags">
        <a href="https://help.netflix.support.com">FAQ</a>
        <a href="https://help.netflix.com">Help Centre</a>
        <a href="https://www.netflix.com/youraccount">Account</a>
        <a href="https://media.netflix.com">Media Centre</a>
        <a href="https://ir.netflix.com">Investor Relations</a>
        <a href="https://jobs.netflix.com/jobs">Jobs</a>
        <a href="https://www.netflix.com/watch">Ways to Watch</a>
        <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
        <a href="https://help.netflix.com/legal/privacy">Privacy</a>
        <a href="https://www.netflix.com/in/#">Cookie Preferences</a>
        <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
        <a href="https://help.netflix.com/contactus">Contact Us</a>
        <a href="https://fast.com">Speed Test</a>
        <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
        <a href="https://help.netflix.com/in/browse/genre/839338">Only on Netflix</a>
      </div>

      <div style={{fontSize:"20px",paddingLeft:"6%",color:"white"}}>
      <select className="select">
            <i class="fa-sharp fa-light fa-globe"></i>
            <option className="option">English</option>
            <option className="option">हिंदी</option>
            <option className="option">தமிழ்</option>
          </select>
      <div style={{fontSize:"16px",paddingBottom:"10%"}}>Netflix India</div>
      </div>
    </div>
  );
}
export default App;

// import logo from './logo.svg';
// import './App.css';
// import {useState,useEffect} from 'react';
// import axios from 'axios';

// function App() {
//   const [message,setMessage]=useState("")

//   // fetch('http://localhost:8090/')
//   //     .then(res=>res.json())
//   //     .then(data=>console.log(data))

//   // useEffect(() => {
//   //   axios
//   //   .post("http://localhost:8090/")
//   //   .then(res=>setMessage(res.data.message))
//   // }, [message])

//   const handleClick=()=>{

//     async function fetching(){
//       await fetch('https://dummy.restapiexample.com/api/v1/employees')
//       .then((res)=>res.json())
//       .then((data)=>setMessage(data))
//       .catch((error)=>{
//         console.log("ERROR",error)
//       })
//     }

//     fetching()

//      //FInding the Factorial:

// //1 ---using WHile Loop
//     //  const num=5;
//     //  var fact=1;
//     //  var i=1;
//     //  while(i<=num){
//     //    fact=fact*i;
//     //    i++;
//     //  }
//     //  console.log(fact)

// //2  ---using for Loop
//     //  const num=20;
//     //  var fact=1;
//     //  for(let i=1;i<=num;i++){
//     //       fact=fact*i
//     //  }
//     //   console.log(fact)

// //3 ---using recursion
//     // function factorial(n){
//     //    if(n===0){
//     //     return 1;
//     //    }else{
//     //      return factorial(n-1)
//     //    }
//     // }
//     // const ans=factorial(10)
//     // console.log(ans)

// //4 //Fibonacci
//   //  function Fibonacci(n){
//   //   let fibo=[0,1];
//   //   for(let i=2;i<n;i++){
//   //       fibo[i]=fibo[i-1]+fibo[i-2]
//   //   }
//   //   console.log(fibo)
//   //  }
//   //  Fibonacci(10);
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//           Learn React
//           <form action="http://localhost:8090/" method="post">
//               <input type="text" placeholder="Enter name" name="Name" required/>
//               <button type="submit">Submit</button>
//           </form>

//        <button onClick={handleClick}>Click</button>
//       </header>
//     </div>
//   );
// }

// export default App;
