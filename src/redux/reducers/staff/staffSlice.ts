import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchStaff, fetchAllStaff, createStaff, removeStaff, uptadeStaff } from './staffApi'


export interface Employee {
    $id: string;
    address: string;
    birthDate: string;
    fullName: string;
    gender: number;
    groupSubjects: null;
    groups: null;
    id: number;
    phoneNumber: string;
    position: string;
    salary: number;
    staffSubjects: null;
    user: null;
    userId: number;
}

export interface IStaffForm {
    id?: number;
    fullName: string;
    position: string;
    phoneNumber: string;
    address: string;
    birthDate: string;
    gender: number;
    salary: number | null;
}

interface StaffState {
    data: Employee[]
    loading: boolean,
    error: null | string
    singleStaff: Employee
}

export const getStaff = createAsyncThunk(
    'staff/getStaff',
    async (staffId: string) => {
        return await fetchStaff(staffId)
    }
)
export const getAllStaff = createAsyncThunk(
    'staff/getAllStaff',
    async () => {
        return await fetchAllStaff()
    }
)

export const addStaff = createAsyncThunk(
    'staff/addStaff',
    async (staffData: any) => {
        return await createStaff(staffData)
    }
)

export const editStaff = createAsyncThunk(
    'staff/editStaff',
    async (staffData: any) => {
        return await uptadeStaff(staffData)
    }
)

export const deleteStaff = createAsyncThunk(
    'staff/deleteStaff',
    async (staffId: any) => {
        return await removeStaff(staffId)
    }
)

const initialState: StaffState = {
    data: [] as Employee[],
    loading: false,
    error: null,
    singleStaff: {} as Employee
}

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStaff.pending, (state) => {
                state.loading = true
            })
            .addCase(getStaff.fulfilled, (state, action) => {
                state.loading = false
                state.singleStaff = action.payload
            })
            .addCase(getStaff.rejected, (state) => {
                state.loading = false
            })

            .addCase(addStaff.pending, (state) => {
                state.loading = true
            })
            .addCase(addStaff.fulfilled, (state, action) => {
                state.loading = false
                state.data.push(action.payload)
                console.log(action.payload);
                
            })
            .addCase(addStaff.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Xatolik'
            })

            .addCase(editStaff.pending, (state) => {
                state.loading = true
            })
            .addCase(editStaff.fulfilled, (state, action) => {
                let idx = state.data.findIndex(item=> item.id === action.payload.id)
                state.loading = false
                state.data[idx] = action.payload

            })
            .addCase(editStaff.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Xatolik'
            })

            .addCase(getAllStaff.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllStaff.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(getAllStaff.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Xatolik'
            })

            .addCase(deleteStaff.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteStaff.fulfilled, (state, action) => {
                let idx = state.data.findIndex(item => item.id === action.payload)
                state.data.splice(idx, 1)
            })
            .addCase(deleteStaff.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Xatolik'
            })

    }
})

export default staffSlice.reducer
