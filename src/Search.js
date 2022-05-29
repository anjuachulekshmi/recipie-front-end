import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Search = () => {
    const [data,setData]=useState([{"cgpa":"","name":""}])
    const [title,setTitle]=useState("")
const callSearch=()=>{
    const valueRead={"title":title}
    console.log(valueRead)
    axios.post("http://localhost:4500/api/searchrecipie",valueRead).then(
        (response)=>{
        console.log(response.data)
        setData(response.data)
    })
    

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
                    <button onClick={callSearch} class="btn btn-danger">SEARCH</button>
                </div>
                {
                data.map((value,key)=>{
                    return <div className='col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12'>
                        <label for="" class="form-label">Catagory</label>
                        
                        <input className='form-control' value={value.catagory}/>
                        <label for="" class="form-label">Description</label>
                        <input className='form-control' value={value.discription}/>
                        <label for="" class="form-label">Prepared By</label>
                        <input className='form-control' value={value.pepared}/>
                    
                        <img  src={value.image}  alt=" " />
                    
            
                    </div>
                    

                })
            }
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Search