import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const View = () => {
    var [viewrecipie,setView]=useState([])
        axios.get("http://localhost:4500/api/viewrecipie").then(
            (response)=>{
                console.log(response.data)
                setView(response.data)
                
    
            }
        )
        const deleteCallApi=(id)=>{
          const data={"_id":id}
          console.log(data)
          axios.post("http://localhost:4500/api/deleterecipie",data).then(
              (response)=>{
              if(response.data.status=="success"){
                  alert("Successfully deleted")
          
              }
              else{
                  alert("error in deletion")
          
              }
          })
          }
  return (
    <div>
      <Nav/>
        <div>
        
        <div class="container">
    <div class="row ">
        <div class="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className='row-3'>
            
                    {
                        viewrecipie.map((value,key)=>{
                       return <div class='col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3'>
                       <div class='card'>
                           <img  src={value.image} class="card-image-top" alt=" " />
                           <div class="card-body">
                               <h5 class="card-title">
                                   Recipie Title:{value.title}
                               </h5>
                               
                               <p class="card-text">Category:{value.catagory}</p>
                               <p class="card-text">Description:{value.discription}</p>
                               <p class="card-text">Prepared By:{value.pepared}</p>
                               <button onClick={ ()=>{deleteCallApi(value._id)}} className='btn btn-danger'>Delete</button>
                          
                                </div>
                       </div>
                   </div>
                        })}
                
                </div>
        </div>
    </div>
</div>
    </div>
    </div>
  )
}

export default View