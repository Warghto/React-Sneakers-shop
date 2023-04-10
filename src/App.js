import React from "react";
import "./index.scss";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);


  React.useEffect(() => {
    axios.get('https://643062f7b289b1dec4c76583.mockapi.io/items').then(res =>{
      setItems(res.data);
    });
    axios.get('https://643062f7b289b1dec4c76583.mockapi.io/cart').then(res =>{
      setCartItems(res.data);
    });
  }, []);


  const onAddToCart = (obj) => {
    axios.post('https://643062f7b289b1dec4c76583.mockapi.io/cart', obj);
    setCartItems([...cartItems, obj]);
  };


  const onAddToFavorite = (obj) => {
    axios.post('', obj);
    setFavorites([...cartItems, obj]);
  };

  const onRemoveItem = (id) =>{
    axios.delete(`https://643062f7b289b1dec4c76583.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    // setCartItems([...cartItems, obj]);
  }
  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value);
  }

  return (
    <div className="App clear">
      { cartOpened && <Drawer items ={cartItems} onClose={()=> setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Search for "${searchValue}"` : 'All Sneakers' }</h1>
          <div className="Search-block d-flex">
            <svg
              width="20"
              height="40"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                stroke="#E4E4E4"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            {searchValue && <img onClick={() => setSearchValue('')} className=" clear cu-p" src="/img/btn-remove.svg" alt="Clear"/>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
            <Card
              key={item.title}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj) }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
