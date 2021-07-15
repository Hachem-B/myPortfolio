import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2 style={{fontFamily: "Apple Chancery, cursive",fontSize:"30px"}}>About Me</h2>
               <p>
               With 6+ years of Aircraft Maintenance Engineering under my belt, I yearned to learn something different. The spark that I was missing ignited the instant I started writing my first lines of code, hence, I decided to go all-in. For the time being, I am a full stack developer with great team spirit, big ambitions and enthouisisastic for contrubuting in projects that solves real-world problems. 
               </p>
               <div className="row">
               </div>
            </div>
         </div>
      </section>
    );
  }
}