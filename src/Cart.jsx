function Cart({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{`${index} : ${item}`}</div>
      ))}
    </div>
  );
}

export default Cart;
