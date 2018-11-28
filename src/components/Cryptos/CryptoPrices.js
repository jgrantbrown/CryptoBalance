import React, { Component } from 'react';

class CryptoPrices extends Component {
  render(){
    return(
      <div>
          <div style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
            <h2 style={{ padding: "10px 10px", textAlign: "center", color: "white"}}>
              ETH:
              $117.00
            </h2>
            </div>
            <div style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
              <h2 style={{ padding: "10px 10px", textAlign: "center", color: "white"}}>
                BTC:
                $117.00
              </h2>
              </div>
              <div style={{ backgroundColor: "#44014C", width: "175px", minHeight: "100px"}}>
                <h2 style={{ padding: "10px 10px", textAlign: "center", color: "white"}}>
                  LTC
                  $117.00
                </h2>
              </div>
      </div>
    )
  }

}

export default CryptoPrices;
