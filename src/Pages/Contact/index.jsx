import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
const Contact =()=>{
   
    const {contactid} = useParams()
    useEffect(()=>{
        // console.log({param})
    },[])
    return(
        <>
            <h1>Contact us :{contactid} </h1>
        </>
    )
}

export default Contact