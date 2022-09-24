import React from "react";
import "../styles/Bit.css";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="container-fluid mr-4">
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <div
            className="card mt-4 p-3 mb-5 bg-body rounded card_box"
            style={{ backgroundColor: "#DADCE0" }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-lg-1 col-sm-1">
                  <img
                    src={image}
                    alt="bitcoin"
                    className="img-con mt-2 pt-3"
                  />
                </div>

                <div className="col-lg-2 pt-3">
                  <p className="ml-5 name">Name</p>
                  <hr />
                  <h4 className="name_c">
                    <strong>{name}</strong>
                  </h4>
                </div>

                <div className="col-lg-1 pt-3">
                  <p className="symbol">Symbol</p>
                  <hr />
                  <h5 className="font-italic symbol_c">
                    <strong>{symbol}</strong>
                  </h5>
                </div>

                <div className="col-lg-2 pt-3">
                  <p className="price">Price</p>
                  <hr />
                  <p className="price_c">
                    <strong>₱{price.toLocaleString()}</strong>
                  </p>
                </div>

                <div className="col-lg-2 pt-3">
                  <p className="tvolume">Total Volume</p>
                  <hr />
                  <p className="tvolume_c">
                    <strong>₱{volume.toLocaleString()}</strong>
                  </p>
                </div>

                <div className="col-lg-2 pt-3">
                  <p className="pchange">Price Change</p>
                  <hr />
                  {priceChange < 0 ? (
                    <p className="text-danger pchange_c">
                      <strong>{priceChange.toFixed(2)}%</strong>
                    </p>
                  ) : (
                    <p className="text-success pchange_c">
                      <strong>{priceChange.toFixed(2)}%</strong>
                    </p>
                  )}
                </div>

                <div className="col-lg-2 pt-3">
                  <p className="mcap">Market Cap</p>
                  <hr />
                  <p className="mcap_c">
                    <strong>₱{marketcap.toLocaleString()}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
