import ReactDOM from 'react-dom';

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
    <button type="button">Добавить в корзину</button>
  </div>
);

const element = (
  <>
    <div>
      {elem1}
      {elem2}
    </div>
    {painting}
  </>
);

ReactDOM.render(element, document.querySelector('#root'));
