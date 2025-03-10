const DeleteData = (url, id) =>{
    const handleDelete = async(id) => {

        await fetch(url + id,
        {
        method: "DELETE"
        }).then(window.location.reload())
    }
    return handleDelete(id)
}
export default DeleteData;