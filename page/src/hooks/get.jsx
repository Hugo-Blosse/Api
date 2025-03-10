import { useEffect, useState } from "react";

const GetData = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        const getData = async() =>
        {await fetch(url, {method: "GET"})
            .then(res => {
              return res.json();
            })
            .then(data => {
              setData(data);
              setIsPending(false);
            })}
        getData()
      }, [])
      return { data, isPending}
}
export default GetData;