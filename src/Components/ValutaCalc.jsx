import { useState, useEffect } from "react"
import facade from "../apiFacade"
import Calcinput from "./Calcinput"

const ValutaCalc = ({selcValuta1, selcValuta2}) => {

    const [val1, setVal1] = useState('')
    const [val2, setVal2] = useState('')
    const [isBase1, setIsbase1] = useState(false)
    const [isBase2, setIsbase2] = useState(false)
    const [calc1, setCalc1] = useState(0)
    const [calc2, setCalc2] = useState(0)
   
    const isActiveBase1 = (e) => {
        setIsbase1(true)
        setIsbase2(false)
       }
    const isActiveBase2 = (e) => {
        setIsbase2(true)
       setIsbase1(false)
   }

   const getConversion1 = (data) => {
       setCalc1(data) 
       setVal2(data)
    }
   const getConversion2 = (data) => {
       setCalc2(data)
       setVal1(data)
    }


    const handleChangeVal1 = (e) => {
        if (isBase1) { setVal1(e.target.value)}
        //else setVal2(calc1)
    }
    const handleChangeVal2 = (e) => {
        if (isBase2) setVal2(e.target.value)
        //else setVal1(calc2)
    }

    useEffect(()=>{
        if (isBase2 && val2 !== 0) facade.fetchData('valuta/convert/'+selcValuta2.code+'/'+selcValuta1.code+'/'+val2,getConversion2)
        else if (isBase1 && val1 !==0) facade.fetchData('valuta/convert/'+selcValuta1.code+'/'+selcValuta2.code+'/'+val1,getConversion1)
        console.log(calc1, calc2, val2)
    },[isActiveBase2, isActiveBase1])




    return (
        <div>
            <Calcinput placeholder={"Skriv beløb.."} handleChange={handleChangeVal1} onKeyDown={isActiveBase1} value={val1}/>
            <Calcinput placeholder={"Skriv beløb.."} handleChange={handleChangeVal2} onKeyDown={isActiveBase2} value={val2}/>
        </div>
    )
}

export default ValutaCalc
