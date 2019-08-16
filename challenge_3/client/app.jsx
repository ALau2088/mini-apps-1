// const Home = (props) => {
//   return (
//     <button onClick={props.onClick('f1')}>BEGIN CHECKOUT</button>

// }

class Home extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this)
  }
  onClick(){
    this.props.onClick('f1')
  }

  render(){
    return(
    <button onClick={this.onClick}>Check Out</button>
    )
  }
}

class F1 extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e){
    e.preventDefault()
    // console.log(e)
    this.props.onClick('f2')
  }

  onChange(e){
    // console.log(e.target.name)
    this.props.onChange(e)
  }

  render(){
    return(
    <form onSubmit={this.onSubmit}>
      <label>
        name:
      <input type="text" name="name" onChange={this.onChange}/></label><br/>
      <label>email:<input type="text" name="email" onChange={this.onChange}/></label><br/>
      <label>password:
      <input type="text" name="password" onChange={this.onChange}/></label><br/>
      <input type="submit" name="SUBMIT"/>
    </form>
    )
  }
}

class F2 extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e){
    e.preventDefault()
    this.props.onClick('f3')
  }

  onChange(e){
    // console.log(e.target.name)
    this.props.onChange(e)
  }

  render(){
    return(
    <form onSubmit={this.onSubmit}>
      <label>
        address(line1):
      <input type="text" name="address_line1" onChange={this.onChange}/></label><br/>
      <label>
        address(line2):
      <input type="text" name="address_line2" onChange={this.onChange}/></label><br/>
      <label>
        city:
      <input type="text" name="city" onChange={this.onChange}/></label><br/>
      <label>state:<input type="text" name="state" onChange={this.onChange}/></label><br/>
      <label>zip code:
      <input type="text" name="zip_code" onChange={this.onChange}/></label><br/>
      <input type="submit" name="SUBMIT"/>
    </form>
    )
  }
}
class F3 extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e){
    e.preventDefault()
    this.props.onClick('confirmation')
  }

  onChange(e){
    // console.log(e.target.name)
    this.props.onChange(e)
  }

  render(){
    return(
    <form onSubmit={this.onSubmit}>
      <label>
        credit card #:
      <input type="text" name="credit_card_num" onChange={this.onChange}/></label><br/>
      <label>expiry date:<input type="text" name="expiry_date" onChange={this.onChange}/></label><br/>
      <label>CVV:
      <input type="text" name="CVV" onChange={this.onChange}/></label><br/>
      <label>Billing Zip Code:
      <input type="text" name="billing_zip_code" onChange={this.onChange}/></label><br/>
      <input type="submit" name="SUBMIT"/>
    </form>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this)
  }
  onClick(){
    console.log('Submit')
  }

  render(){
    return(
    <form action="/transaction" method="post">
      <label>name:<input readOnly={true} type="text" name="name" onChange={this.onChange} value={this.props.transaction.name}/></label><br/>
      <label>email:<input readOnly={true} type="text" name="email" onChange={this.onChange} value={this.props.transaction.email}/></label><br/>
      <label>password:<input readOnly={true} type="text" name="password" onChange={this.onChange} value={this.props.transaction.password}/></label><br/>
      <label>address(line1):<input readOnly={true} type="text" name="address_line1" onChange={this.onChange} value={this.props.transaction.address_line1}/></label><br/>
      <label>address(line2):<input readOnly={true} type="text" name="address_line2" onChange={this.onChange} value={this.props.transaction.address_line2}/></label><br/>
      <label>city:<input readOnly={true} type="text" name="city" onChange={this.onChange} value={this.props.transaction.city}/></label><br/>
      <label>state:<input readOnly={true} type="text" name="state" onChange={this.onChange} value={this.props.transaction.state}/></label><br/>
      <label>zip code:<input readOnly={true} type="text" name="zip_code" onChange={this.onChange} value={this.props.transaction.zip_code}/></label><br/>
      <label>credit card #:<input readOnly={true} type="text" name="credit_card_num" onChange={this.onChange} value={this.props.transaction.credit_card_num}/></label><br/>
      <label>expiry date:<input readOnly={true} type="text" name="expiry_date" onChange={this.onChange} value={this.props.transaction.expiry_date}/></label><br/>
      <label>CVV:<input readOnly={true} type="text" name="CVV" onChange={this.onChange} value={this.props.transaction.CVV}/></label><br/>
      <label>Billing Zip Code:<input readOnly={true} type="text" name="billing_zip_code" onChange={this.onChange} value={this.props.transaction.billing_zip_code}/></label><br/>
      <button onClick={this.onClick}>Confirmation</button>
    </form>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //keeps track of current form: home/f1/f2/f3/confirmation,
      form: 'home',
      name: '',
      email: '',
      password: '',
      address_line1: '',
      address_line2: '',
      city: '',
      state: '',
      zip_code: '',
      credit_card_num: '',
      expiry_date: '',
      CVV: '',
      billing_zip_code: ''
    }
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onClick(form){
    this.setState({
      form
    })
    console.log(this.state)
  }

  onChange(e){
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    }, () => {console.log(this.state)})
  }

  render() {
    if(this.state.form === 'home'){
      return (
        <Home onClick={this.onClick}/>
      )
    } else if (this.state.form === 'f1'){
     return (
        <F1 onClick={this.onClick} onChange={this.onChange}/>
     )
    } else if (this.state.form === 'f2') {
      return (
        <F2 onClick={this.onClick} onChange={this.onChange}/>
      )
    } else if (this.state.form === 'f3') {
      return (
        <F3 onClick={this.onClick} onChange={this.onChange}/>
      )
    } else if (this.state.form ==='confirmation'){
      return (
        <Confirmation transaction ={this.state} onClick={this.onClick}/>
      )
    }
  }
}



ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

