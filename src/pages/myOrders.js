import styles from "@/styles/myOrders.module.css";
import UserNavbar from "@/components/usernavbar";

const MyOrder = () => {
  return (
    <div>
      <UserNavbar currentPage="myorders" />
      <h1>My Orders</h1>
    </div>
  );
};

export default MyOrder;
