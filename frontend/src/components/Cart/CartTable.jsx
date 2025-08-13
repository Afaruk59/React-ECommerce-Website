import React, { useContext } from "react";
import "../../css/Cart.css";
import CartItem from "./CartItem";
import CartContext from "../../context/CartProvider.jsx";
import { Button, Table } from "antd";
function CartTable() {
  const { cart, removeFromCart } = useContext(CartContext);
  console.log(cart);
  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (text, record) => (
        <img src={record.img[0]} alt="product" style={{ width: "100px" }} />
      ),
    },
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => (
        <div>
          <s className="old-price">${record.price.discount}</s>
          <strong className="new-price"> ${record.price.current}</strong>
        </div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      render: (text, record) => (
        <div>
          <strong className="new-price">
            ${record.price.current * record.quantity}
          </strong>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Button
          type="primary"
          danger
          onClick={() => removeFromCart(record._id)}
        >
          Delete
        </Button>
      ),
    },
  ];
  return (
    <Table
      dataSource={cart}
      columns={columns}
      rowKey={(record) => record._id}
    />
  );
}

export default CartTable;
