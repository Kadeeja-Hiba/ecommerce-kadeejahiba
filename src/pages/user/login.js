import styles from "@/styles/userLogin.module.css";
import Input from "@/components/input";
import Button from "@/components/button";

const UserLogin = () => {
  return (
    <div className={styles.userLogin}>
      <h1 className={styles.heading}>Shopy Login</h1>
      <Input type="text" placeholder="eg: 7736562695" label="Phone Number" />
      <Input type="password" placeholder="********" label="password " />
      <Button name="Login" />
    </div>
  );
};
export default UserLogin;
