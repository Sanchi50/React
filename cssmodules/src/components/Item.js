import Styles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>{item.title}</h3>

      <img src={item.image} 
      alt={item.title} 
      className={Styles.image} />
      <p>
        <strong className={Styles.price}>
          ${item.price}
          </strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
