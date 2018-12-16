import React from 'react';

class Form extends React.Component {

    state = {
        name: '',
        age: '',
        city: '',
        district: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.addEl(this.state)
        this.setState({
            name: '',
            age: '',
            city: '',
            district: ''
        })
    };

    handleClickRem = (e) => {
        e.preventDefault();
        this.props.remEl(this.state)
        this.setState({
            name: '',
            age: '',
            city: '',
            district: ''
        })
console.log("form");
    }

   render(){
     return (
         <form>
             <input value={this.state.name} onChange={this.handleChange} className="ml-5" type="text" name="name" placeholder="name" />
             <input value={this.state.age} onChange={this.handleChange} type="text" name="age" placeholder="age" />
             <input value={this.state.city} type="text" name="city" onChange={this.handleChange} placeholder="city" />
             <input value={this.state.district} type="text" name="district" onChange={this.handleChange} placeholder="district" />
             <input onClick={this.handleClick} className="ml-5" type="submit" value="Add walk" />
             {/*<input onClick={this.handleClickRem} className="mr-5" type="submit" value="remove walk" />*/}
         </form>

     )
   }
 }

export default Form;