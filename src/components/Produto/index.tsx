import { useDispatch } from 'react-redux';
import { Produto as ProdutoType } from '../../App';
import * as S from './styles';

import { adicionar } from '../../store/reducers/carrinho';
import { RootState } from '../../store';

type Props = {
  produto: ProdutoType;
  favoritar: (produto: ProdutoType) => void; // Usando ProdutoType para ser consistente
};

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

const ProdutoComponent = ({ produto, favoritar }: Props) => {
  const dispatch = useDispatch();

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {}
        + Adicionar aos favoritos
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  );
}

export default ProdutoComponent;
