import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import Header from "../Navbar/Header";

const Data = ({ Data, URL }) => {

    const [data, setData] = useState(Data)
    const getData = (data) => setData(data)

    return (
        <>
            <Header Data={getData} URL={URL} />
            <Pagination data={data} />

        </>
    )


}

export default Data;