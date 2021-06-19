import React from 'react'
import Card from '../components/card'
import NavBar from '../components/navbar';
import Footer from '../components/Footer';
const event = ({title, imageURL, body, bill, setBill}) => {
    return (
     <React.Fragment>
    <NavBar />
    <div class="container-fluid" >
    <div class="row justify-content-center">
     <div class="col d-flex justify-content-center align-items-center">
     <Card title={title} imageURL={imageURL} body={body}/>
     </div>
     <div class="col d-flex justify-content-center align-items-center">
     <Card title={title} imageURL={imageURL} body={body}/>
     </div>
     <div class="col d-flex justify-content-center align-items-center">
     <Card title={title} imageURL={imageURL} body={body}/>
     </div>
     </div>
     <div class="row justify-content-center">
     <div class="col d-flex justify-content-center align-items-center">
     <Card title={title} imageURL={imageURL} body={body}/>
     </div>
     <div class="col d-flex justify-content-center align-items-center">
     <Card title={title} imageURL={imageURL} body={body}/>
     </div>
     <div class="col d-flex justify-content-center align-items-center">
     <Card title={title} imageURL={imageURL} body={body}/>
     </div>
     </div>
     <div class="row justify-content-center">
     <div class="col d-flex justify-content-center align-items-center">
     <Card title={title} imageURL={imageURL} body={body}/>
     </div>
     <div class="col d-flex justify-content-center align-items-center">
     <Card title={title} imageURL={imageURL} body={body}/>
     </div>
     <div class="col d-flex justify-content-center align-items-center">
     <Card title={title} imageURL={imageURL} body={body}/>
     </div>
     </div>
     </div>
     <Footer />
     </React.Fragment>
    
    )
        
}
export default event
