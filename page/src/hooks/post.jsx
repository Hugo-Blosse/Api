const PostData = async(url, u) => {
    await fetch(url,
        {
            method: "POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(u)
        })
            .then((res) => {
                if(res.ok){
                    return res.json()
                }
                throw console.error(res.error);
            })
}
export default PostData;