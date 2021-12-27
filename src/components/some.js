import PropTypes from 'prop-types';
import someImg from './img.jfif';
import { Button } from './some.styled';

const elem1 = <span>Hello! </span>;
const elem2 = <span>My name is Galya :)</span>;

const data = {
  id: 'id-1',
  url: 'https://image.freepik.com/free-vector/cute-tiger-christmas-hat-with-gift-sack-vector-cartoon-illustration-funny-kitten-character-with-red-open-bag-full-presents-boxes-with-ribbons-bows-isolated-white-background_107791-7824.jpg',
  title: 'Tiger with gifts',
  price: 888,
  author: { tag: 'upklyak', url: 'https://www.freepik.com/upklyak' },
  amount: 10,
};

const painting = (
  <div>
    <img src={data.url} alt={data.title} width="400" />
    <h2>{data.title}</h2>
    <p>
      Автор: <a href={data.author.url}>{data.author.tag}</a>
    </p>
    <p>Цена: {data.price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <Button>Добавить в корзину</Button>
  </div>
);

const bool = false;

const Product = ({ imgUrl = someImg, name, price }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{bool ? name : 'хтось'}</h2>
    <p>Price: {bool && price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>{book.name}</li>
      ))}
    </ul>
  );
};

const productPrice = 8888;

export const element = (
  <>
    <div>
      {elem1}
      {elem2}
    </div>
    {painting}
    <Product name="Some123 name" price={productPrice} />
    <BookList books={favouriteBooks} />
  </>
);
