import Card from "../components/Card";
import React from "react";

function Home({items, searchValue, setSeacrhValue, onChangeSearchInput, onAddToFavorite, onAddToCart}){
    return(
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>
                    {searchValue ? `Search for "${searchValue}"` : "All Sneakers"}
                </h1>
                <div className="Search-block d-flex">
                    <img width={20} height={40} src="img/search.svg" alt="searchIcon" />
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue("")}
                            className=" clear cu-p"
                            src="/img/btn-remove.svg"
                            alt="Clear"
                        />
                    )}
                    <input
                        onChange={onChangeSearchInput}
                        value={searchValue}
                        placeholder="Search..."
                    />
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
    );
}
export default Home;