import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import ChangeInput from "./changeInput";
import { TPages } from "./store/slices/appSlice";
import { useAppSelector } from "./store/hooks";
import Meta from "./meta";
const MainComponent = () => {
  let { pathname } = useLocation();
  const [edit, setEdit] = useState<boolean>(false);
  const pathTitle = useAppSelector((state) => state.app.pages[pathname as TPages]);
  return (
    <div className={styles.container}>
      <Meta title={pathTitle} />
      <div className={styles.navigations}>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : styles.link;
          }}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : styles.link;
          }}
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : styles.link;
          }}
          to={"/contacts"}
        >
          Contacts
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : styles.link;
          }}
          to={"/news"}
        >
          News
        </NavLink>
      </div>
      <div className={styles.main}>
        {edit ? (
          <ChangeInput editable={edit} valueType={pathname as TPages} setEdit={setEdit} />
        ) : (
          <h1 onClick={() => setEdit(true)}>{pathTitle}</h1>
        )}
      </div>
    </div>
  );
};
export default MainComponent;
