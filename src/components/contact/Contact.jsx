import { useForm } from "react-hook-form";
import Header from "../header/Header";
import styles from "./Contact.module.css";

export const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <section className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.box}>
            <div className={styles.title}>
              <h2>Contact Me</h2>
            </div>
            <div className={styles.form}>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                name="name"
              />
            </div>
            <div>
              <input
                type="text"
                {...register("lastName", { required: true })}
                placeholder="LastName"
                name="lastName"
              />
            </div>
            <div>
              <select
                id="dragonball"
                className="choose "
                {...register("namecharacter")}
              >
                <option label="Goku" value="Goku" name="Goku"></option>
                <option label="Vegeta" value="Vegeta" name="Vegeta"></option>
              </select>
            </div>
            <div className="buttonbox">
              <input type="submit" value="Send" />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
