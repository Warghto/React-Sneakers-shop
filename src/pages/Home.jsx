import Card from "../components/Card";


function Home({items, cartItems ,searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}){
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

                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                    <Card
                        key={index}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCart(obj) }
                        added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}
export default Home;