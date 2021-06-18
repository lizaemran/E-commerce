import React from 'react'
import Card from '../components/card'

const event = ({title, imageURL, body}) => {
    return (
     <React.Fragment>
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
     </React.Fragment>
   
    )
        
}
export default event
