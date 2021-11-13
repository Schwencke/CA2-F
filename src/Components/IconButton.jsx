import { Image} from 'react-bootstrap'

const IconButton = ({code}) => {
    return (
        <div>
        <button className="icon_button">
            <Image className="icon" src={`https://valutakurser.dk/images/flags/${code}.svg`}/>
             <div className="icon_text"><span>DKK</span></div>
            </button>
            </div>
    )
}
export default IconButton
