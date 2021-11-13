import { useEffect, useState } from "react"
import {Image, Col} from 'react-bootstrap';
import Valuta from "./Valuta";
import ValutaSymbolSelecter from "./ValutaSymbolSelecter";


const Company = ({facade}) => {
   
    return (
        <div>
          <ValutaSymbolSelecter/>
            Hello from Company router component
        </div>
    )
}

export default Company
