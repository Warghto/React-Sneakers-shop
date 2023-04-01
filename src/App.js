import "./index.scss";
import Card from './conponents/Card'
import Header from "./conponents/Header";

function App() {
  return (
      <div className="App clear">
        <div style={{display: 'none'}} className="overlay">
          <div className="drawer">
            <h2 className="d-flex justify-between mb-30 ">Shopping cart <img className="cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>
            <div className="items">

            <div className="cartItem d-flex align-center mb-20">
              <div
                  style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                  className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Nike Blazer Mid Suede</p>
                <b>199 eur.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>



            <div className="cartItem d-flex align-center mb-20">
              <div
                  style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
                  className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Nike Blazer Mid Suede</p>
                <b>199 eur.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>
            </div>
              <div className="cartTotalBlock">
                <ul>
                <li>
                  <span>Total price:</span>
                  <div></div>
                  <b> 405 eur.</b>
                </li>

                <li>
                  <span>Fee 5%:</span>
                  <div></div>
                  <b> 7 eur.</b>
                </li>
              </ul>
                <button className="greenButton">Proceed to checkout<img src="/img/arrow.svg" alt="Arrow" />.</button>
              </div>

          </div>
        </div>


        <Header />
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>All Sneakers</h1>
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
              <input placeholder="Search..." />
            </div>
          </div>

          <div className="d-flex">
            <Card />

          </div>
        </div>
      </div>
  );
}

export default App;
//шапка, карточки товаров,