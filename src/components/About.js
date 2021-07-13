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
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">
               </div>
            </div>
         </div>
      </section>
    );
  }
}