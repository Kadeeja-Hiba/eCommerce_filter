import styles from "./checkbox.module.css";
import Checkbox from "@mui/material/Checkbox";

const CustomCheckBox = (props) => {
  return (
    <div className={styles.customCheckbox}>
      <Checkbox onChange={(e) => props.onCheckboxClicked(e, props.label)} />
      <p>{props.label}</p>
    </div>
  );
};
export default CustomCheckBox;
