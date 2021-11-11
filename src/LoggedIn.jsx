import { useEffect, useState } from "react"


export default function LoggedIn({facade}) {
    const [dataFromServer, setDataFromServer] = useState("Loading...")
    const [errorMsg, setErrorMsg] = useState("All is OK!")
    useEffect(() => { facade.fetchData('info/user', getDataFromServer)
        .catch(err => {
            if(err.status){
                err.fullError.then(e=> setErrorMsg(e.code + e.message))
            }else console.log("Network Error")
        })
        ;}, [facade])

        const getDataFromServer = (data) => {
          setDataFromServer(data.msg)
        }
   
    return (
      <div>
        <h2>Data Received from server</h2>
        <h3>{dataFromServer}</h3>
        <p>{errorMsg}</p>
      </div>
    )
   
  }