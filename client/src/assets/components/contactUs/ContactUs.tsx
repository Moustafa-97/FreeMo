import { useState } from "react";
import ButtonAction from "../buttons/ButtonAction";
import "./contactUs.css";
import PageLayout from "../../Layout/PageLayout";

export default function ContactUs() {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLInputElement> | any) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <PageLayout>
        <section className="emailForm">
          <span>Get in touch</span>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => handleChange(e)}
              aria-describedby="emailHelp"
            />
            <div className="emailBtn">
              <ButtonAction
                text="Submit"
                isFunction={true}
                theFunction={(e) => {
                  handleSubmit(e);
                }}
              />
            </div>
          </form>
        </section>
      </PageLayout>
    </>
  );
}
