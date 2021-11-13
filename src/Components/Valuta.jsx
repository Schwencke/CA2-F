import { useEffect, useState } from "react"
import ValutaCalc from "./ValutaCalc"


const Valuta = ({facade}) => {

    const [allValutas, setAllValutas] = useState([])
    const [allSymbols, setAllSymbols] = useState([])

    const getSymbols = (data) => {setAllSymbols(data.all)}
    const getValutas = (data) => {setAllValutas(data)}

       
        useEffect(()=>{
          facade.fetchData('valuta/symbols', getSymbols);
          facade.fetchData('valuta/latest/DKK',getValutas);
        },[])

        let mergedValutas = allValutas.map(val => {
            let symbols = allSymbols.find(item => item.code === val.code)
            return {...val, ...symbols}
        })

        let val1 = {code: 'DKK'}
        let val2 = {code: 'USD'}

    return (
        <div>
            <ValutaCalc selcValuta1={val1} selcValuta2={val2}/>
            {mergedValutas.map((item) => (
            <tr key={item.code}>
            <td>{item.description}</td> <td>{Math.round((item.value + Number.EPSILON)*100) /100}</td>
            </tr>
             ))}
            
        </div>
    )
}

export default Valuta
