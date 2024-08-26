import axios from "axios"

export const imageUpload = async(image)=>{
    
    // create form instance
    const formData = new FormData()
    // append image in form data
    formData.append('image',image)
     const {data} = await  axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api_key}`,formData)
     console.log(data?.data?.display_url)
     return data
}