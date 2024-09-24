import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import * as S from './styles'

type Props = {
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent: React.FC<Props> = ({ favoritos, favoritar }) => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            favoritar={() => favoritar(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
