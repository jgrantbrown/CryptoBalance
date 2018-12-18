import React, { Component } from 'react';

class About extends Component {
  render() {
    const aboutstyle ={
      // textDecoration: 'none',
      color: 'black',
      padding: '10px',
      margin: '15px',
      backgroundColor: "orange",
      display: "inline-block",
      fontFamily: "monospace",
      width: '80%',
      height: 'auto',
      }
      
    return (
      <div style={aboutstyle}>
        <h1>ABOUT THIS APP</h1>
          <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum felis, dictum sed porta lobortis, euismod non lacus. Sed euismod mi eu scelerisque lacinia. Pellentesque efficitur libero a justo molestie fringilla sit amet vitae justo. Nullam vel felis vestibulum, vulputate ante vel, gravida nisi. In pretium diam interdum nulla fringilla feugiat. Nam eu magna ligula. Aliquam vitae lorem ac tellus ultricies porta sed eget massa. Donec sed dignissim ligula. Donec rutrum maximus enim vel finibus. Vestibulum vel commodo felis, ac venenatis enim. Nulla at augue velit. Proin condimentum consequat consectetur. Ut aliquet lacus non fermentum pellentesque. Nulla consequat nibh vel nulla venenatis imperdiet.
            </p>
        </div>
    )
  }}
export default About;
