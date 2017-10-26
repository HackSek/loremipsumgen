import React, { Component } from 'react';
import $ from 'jquery'; 
import Output from './Components/Output';
import Text from './Components/Controls/Text';
import Select from './Components/Controls/Select';
import './App.css';

class App extends Component {

  constructor(props) {

   super(props);

   
   this.state = {

     format: '',
     text: '',
     paras: 3

   }

   this.getText = this.getText.bind(this);
   this.switchFormat = this.switchFormat.bind(this);
   this.changeParas = this.changeParas.bind(this);

  }

  componentWillMount() {

    this.getText();

  }

  getText() {

   $.ajax({

    url: 'https://baconipsum.com/api/?type=all-meat&paras=' + this.state.paras + '&start-with-lorem=1&format=' + this.state.format,
    method: 'GET'


   }).done((response) => {
     

       this.setState({text: response}, function(){

         console.log(this.state);

       });

     }

   ).fail((error) => {
     console.log(error);
   });

  }

  switchFormat(switched) {

    this.setState({format: switched}, this.getText);

  }

  changeParas(number) {

    this.setState({paras: number}, this.getText);

  }



  render() {

    return (

      <div className="App container">
       
         <div className="row">

          <div className="col-xs-6" id="left">

            <h4 className="text-center">Sélectionnez vos choix:</h4>

            <hr />
            
            <form className="inline-form text-center">

            <div>

              <label>No. de paragraphes:</label>
              <Text value={this.state.paras} onChange={this.changeParas} />

            </div>

            <br />
            <br />
            <br />

            <div>

              <label >format de texte:</label>
              <Select value={this.state.format} onChange={this.switchFormat} />

            </div>

            </form>

          </div>

          <div className="col-xs-6" id="right">
            
            <h4 className="text-center">Voici votre "Dummy Text":</h4>

            <hr />

            <Output value={this.state.text} />

          </div>

         </div>

      </div>

    );
  }
}

export default App;
