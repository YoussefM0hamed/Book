import images from '~/assets/images';
import {Book} from '~/types';

const books: Book[] = [
  {
    id: 1,
    name: 'Análise de Dados',
    price: 223,
    image: images.books.analise_de_dados,
    description: 'TODO',
    category_id: 3,
  },
  {
    id: 2,
    name: 'Código Limpo',
    price: 125,
    image: images.books.codigo_limpo,
    description: 'TODO',
    category_id: 3,
  },
  {
    id: 3,
    name: 'O nome do vento',
    price: 40,
    image: images.books.o_nome_do_vento,
    description: 'TODO',
    category_id: 1,
  },
  {
    id: 4,
    name: 'A revolução dos bichos teste teste teste',
    price: 50,
    image: images.books.a_revolucao_dos_bichos,
    description: 'TODO',
    category_id: 1,
  },
  {
    id: 5,
    name: 'Duna',
    price: 100,
    image: images.books.duna,
    description: 'TODO',
    category_id: 2,
  },
  {
    id: 6,
    name: 'O conto da Aia',
    price: 33.6,
    image: images.books.o_conto_da_aia,
    description: 'TODO',
    category_id: 2,
  },
];

export default books;
