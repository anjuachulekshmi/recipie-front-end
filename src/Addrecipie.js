import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Addrecipie = () => {
    var [title,setTitle]=useState("")
    var [cat,setCat]=useState("")
    var [des,setDes]=useState("")
    var [prepare,setPrepare]=useState("")
    var [image,setImage]=useState("")
    const setData=()=>{
    var data={"title":title,"catagory":cat,"discription":des,"pepared":prepare,"image":image}
    console.log(data)
    axios.post("http://localhost:4500/api/addrecipie",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("Successfully Added")
                }
                else{
                    alert("Something went Wrong!")
                }
                
            }
        )
    }
  return (
    <div>
        <Nav/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Recipie Title</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Catagory</label>
                    <select onChange={(e)=>{setCat(e.target.value)}}  class="form-select" aria-label="Default select example">
                          <option selected>select</option>
                           <option value="Veg">Veg</option>
                           <option value="NonVeg">Non Veg</option>
                           </select>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Discription</label>
                    <textarea onChange={(e)=>{setDes(e.target.value)}} name="" id="" cols="30" rows="4" class="form-control"></textarea>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Prepared By</label>
                    <input onChange={(e)=>{setPrepare(e.target.value)}} type="text" class="form-control"/>
                    
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Image </label>
                    <input onChange={(e)=>{setImage(e.target.value)}} type="text" class="form-control"/>
                    
                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={setData} class="btn btn-danger">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addrecipie