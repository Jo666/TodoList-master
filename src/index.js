import React, { Component } from 'react';
import ReactDOM, { render } from "react-dom";/*
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Form from "./components/form.js"
import Button from "./components/button.js"
import Link from "./components/link.js"
import Warning from "./components/warning.js"
*/

class Form extends Component {
  render () {
    return (
      <div classname ="form">
        <label>{this.props.label}</label>
        <br></br><input type={this.props.type} className="form-control" placeholder={this.props.placeholder}/>
      </div>
    );
  }
}

function renderForm(lab,type,plaH) {
  return (
  <Form label={lab} type={type} placeholder={plaH} /> 
  );
}

/*============================*/ 

class Button extends Component {
  render () {
    return (
      <button id="btn" type="submit" classname="button" onClick={() => alert('clic')}>
        {this.props.value}
      </button>
    );
  }
}

export function renderButton(val) {
  return (
  <Button value={val} /> 
  );
}

/*============================*/ 

class Link extends Component {
  render () {
    return (
      <a href="/"><br></br>
        {this.props.value}
        <br></br></a>
    );
  }
}

export function renderLink(/*href,*/val) {
  return (
  <Link /*href={href}*/ value={val} /> 
  );
}

/*============================*/

class Warning extends Component {
  /*constructor(props) { // TODO
      super(props);      // Doit s'afficher en fontion d'un Click sur Button "Connexion"....
      this.state= {      // Rien ne s'affiche au départ
          value:null,    // retournera un message si on clique sur 'Connexion' sans avoir rempli les critères de connexion
      };
  }*/

  render () {
      return (
          <p>
            {this.props.value}
           </p>
      );
  }
}

export function renderWarning(val) {
  /*var btn = document.getElementById('btn').addEventListener("click",function(){} );
  if (<Button onClick={alert('clic')} />)*/
      return (<Warning value={val} />);
}

/*============================*/

class Login extends Component { 
    render () {
      return (
        <div>
          <div className="form-column">
            {renderForm("Adresse e-mail","email", "mail@provider.com")}
            {renderWarning("Veuillez renseigner une adresse e-mail")}
            {renderForm("Mot de passe","password", "password")}
            {renderWarning("Veuillez renseigner un mot de passe")}
            {renderButton("Connexion")}
            {renderLink(/*"/Password", */"J'ai oublié mon mot de passe")}
            {renderLink(/*"/Signup", */"Pas encore de compte ?")} 
          </div> 
        </div>
      );
    }
}

/*============================*/
class Password extends Component { 
    render () {
      return (
        <div>
          <div className="form-column">
            {renderForm("Adresse e-mail","email", "mail@provider.com")}
            {renderButton("Envoyer")}
          </div>
        </div>
      );
    }
}

/*============================*/
class Signup extends Component { 
    render () {
      return (
        <div>
          <div className="form-column">
            {renderForm("Adresse e-mail","email", "mail@provider.com")}
            {renderForm("Mot de passe","password", "password")}
            {renderForm("Répéter le mot de passe","password", "password")}
            {renderButton("Inscription")}
          </div>
        </div>
      );
    }
}

/*============================*/
function App() {
    return (
      <div>
        <Login />
      </div>
     
    );
}

render(
    <App />,
    document.getElementById('root')
);
