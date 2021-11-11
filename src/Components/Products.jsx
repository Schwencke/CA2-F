import { useEffect, useState } from "react"



const Products = ({facade}) => {
    const [dog, setDog] = useState({facts:''})


    const updateDogFact = (data) => {
       //if data returned isnt recognised as an object, additional parsing is needed - no explaination 
       let parsedData = JSON.parse(data)
        setDog({ facts: parsedData.facts });
      };

      useEffect(() => {
        facade.fetchData('cat/admin', updateDogFact);
      }, [facade]);

    return (
        <div>
            Hello from Products
            <p>{dog.facts}</p>
        </div>
    )
}

export default Products
