// import React from "react";
// import {
//   BrowserRouter, Switch,
//   Route,
//   Link
// } from "react-router-dom";



// class Pricing extends React.Component {
//   state = {
//     priceInputValue: "1",
//     priceInput: {
//       0: "1,000",
//       1: "1,250",
//       2: "1,500",
//       3: "2,000",
//       4: "2,500",
//       5: "3,500",
//       6: "6,000",
//       7: "15,000",
//       8: "50,000",
//       9: "50,000+"
//     },
//     priceOutput: {
//       plan1: {
//         0: ["", "Free", ""],
//         1: ["$", "13", "/m"],
//         2: ["$", "17", "/m"],
//         3: ["$", "21", "/m"],
//         4: ["$", "25", "/m"],
//         5: ["$", "42", "/m"],
//         6: ["$", "58", "/m"],
//         7: ["$", "117", "/m"],
//         8: ["$", "208", "/m"],
//         9: ["", "Contact Us", ""]
//       },
//       plan2: {
//         0: ["$", "13", "/m"],
//         1: ["$", "17", "/m"],
//         2: ["$", "21", "/m"],
//         3: ["$", "25", "/m"],
//         4: ["$", "42", "/m"],
//         5: ["$", "58", "/m"],
//         6: ["$", "117", "/m"],
//         7: ["$", "208", "/m"],
//         8: ["$", "333", "/m"],
//         9: ["", "Contact Us", ""]
//       },
//       plan3: {
//         0: ["$", "13", "/m"],
//         1: ["$", "17", "/m"],
//         2: ["$", "21", "/m"],
//         3: ["$", "25", "/m"],
//         4: ["$", "42", "/m"],
//         5: ["$", "58", "/m"],
//         6: ["$", "117", "/m"],
//         7: ["$", "208", "/m"],
//         8: ["$", "333", "/m"],
//         9: ["", "Contact Us", ""]
//       }

//     }
//   };

//   slider = React.createRef();
//   sliderValue = React.createRef();

//   componentDidMount() {
//     this.slider.current.setAttribute("min", 0);
//     this.slider.current.setAttribute(
//       "max",
//       Object.keys(this.state.priceInput).length - 1
//     );
//     this.thumbSize = parseInt(
//       window
//         .getComputedStyle(this.sliderValue.current)
//         .getPropertyValue("--thumb-size"),
//       10
//     );
//     this.handleSliderValuePosition(this.slider.current);
//   }

//   handlePricingSlide = e => {
//     this.setState({ priceInputValue: e.target.value });
//     this.handleSliderValuePosition(e.target);
//   };

//   handleSliderValuePosition = input => {
//     const multiplier = input.value / input.max;
//     const thumbOffset = this.thumbSize * multiplier;
//     const priceInputOffset =
//       (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
//     this.sliderValue.current.style.left =
//       input.clientWidth * multiplier - thumbOffset + priceInputOffset + "px";
//   };

//   getPricingData = (obj, pos) => {
//     return pos !== undefined
//       ? obj[this.state.priceInputValue][pos]
//       : obj[this.state.priceInputValue];
//   };



//   render() {

//     return (
    
//         <div className="pricing">
//           <div className="pricing-slider center-content">
//             <label className="form-slider">
//               <span>How many users do you have?</span>
//               <input
//                 type="range"
//                 ref={this.slider}
//                 defaultValue={this.state.priceInputValue}
//                 onChange={this.handlePricingSlide}
//               />
//             </label>
//             <div ref={this.sliderValue} className="pricing-slider-value">
//               {this.getPricingData(this.state.priceInput)}
//             </div>
//           </div>

//           <div className="pricing-items">
//             <div className="pricing-item">
//               <div className="pricing-item-inner">
//                 <div className="pricing-item-content">
//                   <div className="pricing-item-header center-content">
//                     <div className="pricing-item-title">Silver</div>
//                     <div className="pricing-item-price">
//                       <span className="pricing-item-price-currency">
//                         {this.getPricingData(this.state.priceOutput.plan1, 0)}
//                       </span>
//                       <span className="pricing-item-price-amount">
//                         {this.getPricingData(this.state.priceOutput.plan1, 1)}
//                       </span>
//                       {this.getPricingData(this.state.priceOutput.plan1, 2)}
//                     </div>
//                   </div>
//                   <div className="pricing-item-features">
//                     <ul className="pricing-item-features-list">
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                       <li>Excepteur sint occaecat</li>
//                       <li>Excepteur sint occaecat</li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="pricing-item-cta">
//                   <Link to="/buy" className="button">Buy</Link>
//                 </div>
//               </div>
//             </div>

//             <div className="pricing-item">
//               <div className="pricing-item-inner">
//                 <div className="pricing-item-content">
//                   <div className="pricing-item-header center-content">
//                     <div className="pricing-item-title">Silver</div>
//                     <div className="pricing-item-price">
//                       <span className="pricing-item-price-currency">
//                         {this.getPricingData(this.state.priceOutput.plan2, 0)}
//                       </span>
//                       <span className="pricing-item-price-amount">
//                         {this.getPricingData(this.state.priceOutput.plan2, 1)}
//                       </span>
//                       {this.getPricingData(this.state.priceOutput.plan2, 2)}
//                     </div>
//                   </div>
//                   <div className="pricing-item-features">
//                     <ul className="pricing-item-features-list">
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="pricing-item-cta">
//                   <Link to="/buy" className="button">Buy</Link>
//                 </div>
//               </div>
//             </div>

//             <div className="pricing-item">
//               <div className="pricing-item-inner">
//                 <div className="pricing-item-content">
//                   <div className="pricing-item-header center-content">
//                     <div className="pricing-item-title">Gold</div>
//                     <div className="pricing-item-price">
//                       <span className="pricing-item-price-currency">
//                         {this.getPricingData(this.state.priceOutput.plan3, 0)}
//                       </span>
//                       <span className="pricing-item-price-amount">
//                         {this.getPricingData(this.state.priceOutput.plan3, 1)}
//                       </span>
//                       {this.getPricingData(this.state.priceOutput.plan3, 2)}
//                     </div>
//                   </div>
//                   <div className="pricing-item-features">
//                     <ul className="pricing-item-features-list">
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                       <li className="is-checked">Excepteur sint occaecat</li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="pricing-item-cta">
//                   <Link to="/buy" className="button">Buy</Link>
//                 </div>

//               </div>
//             </div>
//           </div>
//           {/* <Switch>
//             <Route exact path="/" component={App} />
//             <Route exact path="/buy" component={Buy} />
//           </Switch> */}
//         </div>
     
//     );
//   }
// }

// export default Pricing;
