import React from 'react';
 
export default class Form extends React.Component {
    state= {
      email:'',
      password:'',
}


change=e=> {
   this.setState({
    [e.target.name] : e.target.value
 });
};

onSubmiit=e =>{
e.preventDefault();
console.log(this.state);
};

render() {
    return (

       <form>
          <input 
         name="email"
          placeholder="E-mail" value={this.state.email}
          onChange={e => this.change(e)}
           />
         <br />
          <input
          name="password"
          type="password"  
           placeholder="password" value={this.state.password} 
           onChange={e=> this.change(e)}
           />
           <br />
        <button onClick={e => this.onSubmit(e)}>Submit </button>
      </form>
);
}

}