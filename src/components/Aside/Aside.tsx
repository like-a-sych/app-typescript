import { navList } from "../../constants/navigation";
import Nav from "./components/Nav/Nav";
import style from "./Aside.module.scss";

export default function Aside() {
  return (
    <aside className={style["aside"]}>
      <ul className={style["aside__list"]}>
        {navList.map((item) => (
          //выводим весь список категорий aside
          <Nav
            key={item.name}
            picture={item.picture}
            name={item.name}
            href={item.href}
          />
        ))}
      </ul>
    </aside>
  );
}
