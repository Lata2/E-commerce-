import { message } from 'antd'
import API from './Api'


export const ProductCategory = async() => {
    console.log('console')
    const response = await API.get('api/getproductdata/',
    {headers : {'Content-Type':'application/json'}}).catch(
        err => message.error('regisration failed.')
    )
    return response ? response.data: {}
}

export const Locationapi = async (values) => {
    console.log('api',values)
    const response = await API.post('api/LocationView/', values,
        { headers: { 'Content-Type': 'application/json' } }).catch(
            err => message.error('Registration Failed')
        )
    return response ? response.data : {}
}
export const GetLocation = async() => {
    console.log('console',)
    const response = await API.get('api/GetLocationView/',
    {headers : {'Content-Type':'application/json'}}).catch(
        err => message.error('regisration failed.')
    )
    return response ? response.data: {}
}

// export const Empregister = async (values) => {
//     console.log('api',values)
//     const response = await API.post('api/registration', values,
//         { headers: { 'Content-Type': 'application/json' } }).catch(
//             err => message.error('Registration Failed')
//         )
//     return response ? response.data : {}
// }







