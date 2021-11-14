import ValutaCalc from "./ValutaCalc"
import Valuta from "./Valuta"


const ValutaCalcCard = ({facade}) => {
    return (
        <div className={"calc-card"}>
            <ValutaCalc facade={facade}/>
        </div>
    )
}

export default ValutaCalcCard
