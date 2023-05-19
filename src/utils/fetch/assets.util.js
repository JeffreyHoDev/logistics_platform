export const add_assets_async = async(input) => {
    let response = await fetch("http://localhost:9999/add-asset", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(input)
    })
    
    let data = await response.json()

    return data
    

} 

export const update_asset_async = async(input) => {
    let response = await fetch("http://localhost:9999/update-asset", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(input)
    })
    
    let data = await response.json()
    return data
}