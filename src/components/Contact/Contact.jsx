import React from "react";
import PageContainer from "../../shared/PageContainer";
import {
  HeaderContainerMain,
  HeaderContainerSub,
} from "../../shared/HeaderContainer";
import { HeaderMain } from "../../shared/Header";

const Contact = (props) => {
  return (
    <PageContainer>
      <HeaderContainerMain>
        <HeaderMain>Contact</HeaderMain>
      </HeaderContainerMain>
      <HeaderContainerSub>
        <form
          id="contact-form"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </HeaderContainerSub>
    </PageContainer>
  );
};

export default Contact;
