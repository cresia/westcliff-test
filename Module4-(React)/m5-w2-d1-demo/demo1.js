class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      
      //add handle
      
    }
    
    // add handleChange here
    
    // add handleSubmit here
    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );