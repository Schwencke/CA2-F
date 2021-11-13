import { useEffect, useState } from "react"
import {Image, Col} from 'react-bootstrap';
import Valuta from "./Valuta";


const Company = ({facade}) => {
   
    return (
        <div>
            <Valuta facade={facade}/>
            Hello from Company router component
        </div>
    )
}

export default Company
