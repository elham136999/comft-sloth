import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev--4dg827p.us.auth0.com
//9Blmu0iojOY5fr8R1hzyJ5DR73JAD6Op

ReactDOM.render(
  <Auth0Provider
    domain='dev--4dg827p.us.auth0.com'
    clientId='9Blmu0iojOY5fr8R1hzyJ5DR73JAD6Op'
    redirectUri={window.location.origin}
    cacheLocation='localstrage'>
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
