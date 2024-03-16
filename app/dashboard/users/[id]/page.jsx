
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  
  // const { id } = params;
  // const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
    "USERNAME"
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" />
          <label>Username</label>
          <input type="text" name="username" placeholder={"user.username"} />
          <label>Email</label>
          <input type="email" name="email" placeholder={"user.email"} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={"user.phone"} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={"user.address"} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} >Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} >Yes</option>
            <option value={false} >No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;