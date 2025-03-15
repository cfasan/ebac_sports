import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type carrinhoState = {
  itens: Produto[]
}

const initialState: carrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const prod = action.payload

      if (state.itens.find((p) => p.id === prod.id)) {
        alert('Item já adicionado ao carrinho')
      } else {
        state.itens.push(prod)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
