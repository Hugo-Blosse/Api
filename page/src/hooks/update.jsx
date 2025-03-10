const UpdateData = async(url, u, id) => {
    console.log(u)
    await fetch(url + id,
          {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(u)
          })
            .then((res) => {
                if(res.ok)
                {
                  console.log(res);
                    return res.json()
                }
                throw new Error(res.status)
            })
}
export default UpdateData;