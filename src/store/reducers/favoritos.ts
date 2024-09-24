import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adiciona: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      const produtoExiste = state.itens.find((p) => p.id === favorito.id)

      if (produtoExiste) {
        state.itens = state.itens.filter((p) => p.id !== favorito.id)
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { adiciona } = favoritoSlice.actions
export default favoritoSlice.reducer

/*function favoritar(produto: Produto) {
  if (favoritos.find((p) => p.id === produto.id)) {
    const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
    setFavoritos(favoritosSemProduto)
  } else {
    setFavoritos([...favoritos, produto])
  }
}*/
