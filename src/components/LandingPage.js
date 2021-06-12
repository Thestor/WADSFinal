import React, { Component } from "react";
import './LandingPage.css';


class LandingPage extends Component {

    render() {
        return (
            <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>BuqMarq</title>
            <link rel="stylesheet" href="LandingPage.css" />
            <link rel="icon" href="buqmarqlogo.png" />
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#feature">Features</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li style={{"float":"right"}}><a href="/login">Login/Sign up</a></li>
            </ul>
            <div className="bgimg-1">
              <div className="caption">
                <span id="home" className="border">We are BuqMarq</span>
              </div>
            </div>
            <div style={{"color":"#777","background-color":"white","-webkit-text-align":"justify","text-align":"justify","padding":"50px 80px"}}>
              <h3 className="landing"id="about" style={{"-webkit-text-align":"center","text-align":"center"}}>About Us</h3>
              <p>Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
            </div>
            <div className="bgimg-2">
              <div className="caption">
                <span className="border" style={{"background-color":"transparent","font-size":"25px","color":"#f7f7f7"}}>Browse Bookmarks Like Never Before</span>
              </div>
            </div>
            <div style={{"position":"relative"}}>
              <div style={{"color":"#ddd","background-color":"#282E34","-webkit-text-align":"justify","text-align":"justify","padding":"50px 80px"}}>
                <h3 className="landing" id="feature" style={{"color":"white","-webkit-text-align":"center","text-align":"center"}}>Features</h3>
                <p>Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
              </div>
            </div>
            <div className="bgimg-3">
              <div className="caption">
                <span className="border" style={{"background-color":"transparent","font-size":"25px","color":"#f7f7f7"}}>Innovative and Inspirational</span>
              </div>
            </div>
            <div style={{"position":"relative"}}>
              <div style={{"color":"#ddd","background-color":"#282E34","-webkit-text-align":"justify","text-align":"justify","padding":"50px 80px"}}>
                <h3 className="landing" id="contact" style={{"color":"white","-webkit-text-align":"center","text-align":"center"}}>Contact Us</h3>
                <p>Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
              </div>
            </div>
            <div className="bgimg-1">
              <div className="caption">
                <span className="border"><a href="/login">Sign up Now!</a></span>
              </div>
            </div>
          </div>
        );
    };
}
 
export default LandingPage;