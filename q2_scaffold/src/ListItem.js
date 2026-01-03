function ListItem({ name, href, bgColor, img }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        textDecoration: "none",
        color: "black"
      }}
    >
      <img src={img} alt={name} width="24" />
      <span>{name}</span>
    </a>
  );
}

export default ListItem;
