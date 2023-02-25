import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import NewNavbar from "./NewNavbar";

const Data = ({ Data, URL }) => {

    const [data, setData] = useState(Data)
    const getData = (data) => setData(data)

    return (
        <>
            <NewNavbar Data={getData} URL={URL} />
            <Pagination data={data} />

        </>
    )


}

export default Data;