import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritosState = {
  favoritos: Produto[]
}

const initialState: favoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const fav = action.payload

      if (state.favoritos.find((p) => p.id === fav.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== fav.id)
      } else {
        state.favoritos.push(fav)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
