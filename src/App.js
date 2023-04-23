import React from "react";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

import "./index.scss";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://643062f7b289b1dec4c76583.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://643062f7b289b1dec4c76583.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
        .get("https://643806eac1565cdd4d6435e6.mockapi.io/favorites")
        .then((res) => {
          setFavorites(res.data);
        });
  }, []);

  const onAddToCart = (obj) => {
    try{
      if(cartItems.find((item) => Number(item.id) === Number(obj.id))){
        axios.delete(`https://643062f7b289b1dec4c76583.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item  => Number(item.id) !== Number(obj.id) ));
      }else{
        axios.post('https://643062f7b289b1dec4c76583.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    }catch (error){
      alert('Error with products in cart')
    }
  };

  const onAddToFavorite = async (obj) => {
  try{
    if(favorites.find((favObj) => favObj.id === obj.id)){
      axios.delete(`https://643806eac1565cdd4d6435e6.mockapi.io/favorites/${obj.id}`)
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    }else{
      const {data} = await axios.post('https://643806eac1565cdd4d6435e6.mockapi.io/favorites', obj);
      setFavorites((prev) => [...prev, data]);
    }
  }catch (error){
    alert('Error, can`t add to favorites')
  }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://643062f7b289b1dec4c76583.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    // setCartItems([...cartItems, obj]);
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (

    <div className="App clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route path="/" element={<Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}/>} />
        <Route path="/favorites" element={<Favorites
            items={favorites}
            onAddToFavorite={onAddToFavorite}
        />} />
      </Routes>

    </div>

  );
}
export default App;
