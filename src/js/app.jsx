import React from 'react';

export default class App extends React.Component {
  constructor (props) {
    super(props);
      this.state = {
        balance: "",
        rate: "",
        term: 15,
        payment: ""
      };   
    this.handleChange=this.handleChange.bind(this);
    this.calculate=this.calculate.bind(this);
  }

  calculate(){
    const balance=Number(this.state.balance);   
    const rate=Number(this.state.rate / 12 / 100);   
    const term=Number(this.state.term * 12);
    const topCalc = rate * Math.pow((1 + rate), term);
    const bottomCalc = (Math.pow((1 + rate), term)) - 1;
    const monthlyPayment = (balance * (topCalc / bottomCalc)).toFixed(2);
    console.log(balance);
    console.log(rate);
    console.log(term);
    console.log(topCalc);
    console.log(bottomCalc);
    console.log(monthlyPayment);
    this.setState({
      payment: monthlyPayment
    });

  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  

  render() {
    return (
      <div>
      <div className='container'>
        <h1>Mortgage Calculator</h1>
          <div className="form-horizontal">

            <label className="control-label col-sm-2" htmlFor="balance">Loan Balance</label>
            
            <input name="balance" type="number" className="form-control" value={this.state.balance} onChange={this.handleChange}/>
           
            <label className="control-label col-sm-2" htmlFor="rate">Interest Rate (%)</label>
                     
            <input name="rate" type='number' className="form-control"  value={this.state.rate} onChange={this.handleChange}/>
               
            <label className="control-label col-sm-2" htmlFor="loan term">Loan Term (years)</label>
              
            <select name="term" className="form-control" value={this.state.term} onChange={this.handleChange}>
              <option value="15">15 year</option>
              <option value="30">30 year</option>
            </select>

            <br/>

            <button name="submit" className="btn btn-primary" onClick={this.calculate}>Calculate</button>

            <br/>
            <br/>
            <hr/>
            <label className="control-label col-sm-2">Monthly Payment</label>
         
            <output name="output" id="output">${this.state.payment} is your monthly payment.</output>
            
          </div> 
       </div>
       </div>
    );
  }
}
  

