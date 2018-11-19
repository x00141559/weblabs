import React, { Component } from 'react';

//Define SearchForm Class
export default class SearchForm extends Component {
//constructor accepts props and initialises stat
constructor(props){
    super(props);
    this.state = {

    };
}
// an event handler for form sublit

formSubmitted = (event) => {
    //Validate input value
    if(event.target.source.value != ""){
        //setsource is a function passed from parent via props
        //It is used as a way to pass the input value back up to the parent
        //This is called state lifting
        this.props.setNewsSource(event.target.source.value);

    }
    //prevent page reload
   event.preventDefault();
}
//Render the form
render(){ 
    return (
        <div>
            {/*Search Input */}
            <div id="search">
            <h3> Enter newsapi.org source</h3>
            {/* Note event handler*/}
            <form onSubmit={this.formSubmitted}>
            <input name="source" placeholder="News source name" type="text" />
            {/*Button click will trigger submit */}
            <button>Update News</button>
            </form>
            </div>
        </div>
    );
}

}