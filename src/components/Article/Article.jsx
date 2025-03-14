import { myName } from "../../App";

export const Article = () => {
  const srcPhoto =
    "https://brainlab.com.ua/wp-content/uploads/2025/01/react-js2-1024x576.jpg";

  const myFavoriteWebsite = {
    name: "Spotify",
    url: "https://open.spotify.com/",
  };

  const number1 = 10;
  const number2 = 20;

  const sum = number1 + number2;

  const colors = [
    "Червоний",
    "Синій",
    "Зелений",
    "Помаранчевий",
    "Чорний",
    "Білий",
  ];

  return (
    <article>
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={srcPhoto} alt="react and js" />
      <a href={myFavoriteWebsite.url}>{myFavoriteWebsite.name}</a>
      <p>
        Сума двох чисел - {number1} і {number2}, дорівнює {sum}.
      </p>
      <ul>
        {colors.map((color) => (
          <li>
            <p>{color}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};
