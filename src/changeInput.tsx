import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { TPages, changeNamePages } from "./store/slices/appSlice";
import { useEffect, useRef } from "react";
interface Props {
  valueType: TPages;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  editable: boolean;
}
const ChangeInput = ({ valueType, setEdit, editable }: Props) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.app.pages[valueType]);
  const ref = useRef<HTMLInputElement>(null);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(changeNamePages({ path: valueType, title: e.currentTarget.value }));
  };

  useEffect(() => {
    if (editable && ref.current) {
      ref.current.focus();
    }
  }, [editable]);
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
        ref={ref}
        onBlur={() => setEdit(false)}
      />
      <button className={styles.button} onClick={() => setEdit(true)}>
        ok
      </button>
    </div>
  );
};

export default ChangeInput;
