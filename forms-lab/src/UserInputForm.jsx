import React from 'react'
class UserInputForm extends React.Component{
  handleFormSubmit=(event)=>{
     event.preventDefault() 
  }
    render(){
        return(
            <form onSubmit = {this.handleFormSubmit}>
                <h2>Enter each number in the array, separated by a comma</h2>
              <select value ={type} onChange={this.handleType}>
                  <option value="sum"></option>
                  <option value="Average"></option>
                  <option value="mode"></option>
                  </select> 

            </form>
        )
       
    }
}

export default UserInputForm;