//  App = () => {
//   return(
//     <h1>Hello World!</h1>
//   )
// }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      form: 'home' //keeps track of current form: home/f1/f2/f3/confirmation
    }
  }
  render() {
    if(this.state.form === 'home'){
      return (
        <h1>home</h1>
      )
    } else if (this.state.form === 'f1'){
     return (
        <h1>f1</h1>
     )
    } else if (this.state.form === 'f2') {
      return (
      <h1>f2</h1>
      )
    } else if (this.state.form === 'f3') {
      return (
      <h1>f3</h1>
      )
    } else if (this.state.form ==='confirmation'){
      return (
      <h1>confirmation</h1>
      )
    }
}
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

