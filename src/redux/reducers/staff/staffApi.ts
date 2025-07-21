import {api} from "../../api/api"

export const fetchStaff = async (staffId: string) => {
    const response = await api.get(`/Staff/get-by-id/${staffId}`)
    return response.data
}
export const fetchAllStaff = async () => {
    const response = await api.get('/Staff/get-all')
    return response.data
}

export const createStaff = async (staffData: any) => {
    const response = await api.post('/Staff/create', staffData)
    return response.data
}
export const uptadeStaff = async (staffData: any) => {
    const response = await api.put(`/Staff/update/${staffData.id}`, {...staffData, userId: 1})
    return response.data
}
export const removeStaff = async (staffId: any) => {
    await api.delete(`/Staff/delete/${staffId}`)
    return staffId
}