import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    lists: []
}

const listSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addLista: {
            reducer: (state, action) => {
                state.lists.push(action.payload)
            },
            prepare: ( value ) => {
                return {
                    payload: {
                        ...value,
                        id: nanoid(),
                        products:[]
                    }
                }
            }
        },
        deleteList: ( state, action ) => {
            state.lists = state.lists.filter(list => list.id !== action.payload.listId)
        },
        addProduct: (state, {payload} ) => {
             state.lists.filter(list => {   
                if(list.id === payload.listaId) {
                    list.products.push(payload.productos)
                }
            })
        },
        deleteProduct: (state, action ) => {
            state.lists.filter(list => {
                if(list.id === action.payload.listaId) {
                    list.products.filter(product => product.productId !== action.payload.productId)
                }
            })
        },
        updateTitle: (state, action) => {
            state.lists.filter(list => {
                if(list.id === action.payload.listId) {
                    list.title = action.payload.newTitle
                }
            })
        }
    }
})

export const selectListState = (state) => state.lists.lists

export const { addLista, deleteList, addProduct,updateTitle, deleteProduct } = listSlice.actions

export default listSlice.reducer