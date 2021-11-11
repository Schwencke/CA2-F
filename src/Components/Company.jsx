import { useEffect, useState } from "react"
import {Image, Col} from 'react-bootstrap';


const Company = ({facade}) => {
    const [cat, setCat] = useState({url: ''})


    const updateCatPic = (data) => {
      //if data returned isnt recognised as an object, additional parsing is needed - no explaination 
      let parsedData = JSON.parse(data)
       setCat({ url: parsedData.url });
      };

      useEffect(() => {
        facade.fetchData('cat/user', updateCatPic);
      }, [facade]);

    return (
        <div>
            <Image src={cat.url} fluid className="mb-4"/>
            <p>{cat.url}</p>
            Hello from Company router component
        </div>
    )
}

export default Company
