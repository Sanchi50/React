import ListItem from "./ListItem";

function List() {
    const data = [
        {
             name: "LinkedIn",
      href: "https://linkedin.com",
      bgColor: "#ff9e8f",
      img: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
        },

        {
            name: "GitHub",
      href: "https://github.com",
      bgColor: "#f5f7a1",
      img: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        },

        {
      name: "Twitter",
      href: "https://twitter.com",
      bgColor: "#c6c4f4",
      img: "https://cdn-icons-png.flaticon.com/512/733/733579.png"
    }
    ];

    return (
        <div>
            {data.map((item, index) => (
               <ListItem
          key={index}
          name={item.name}
          href={item.href}
          bgColor={item.bgColor}
          img={item.img}
        />
            ))}
        </div>
    )

}

export default List;