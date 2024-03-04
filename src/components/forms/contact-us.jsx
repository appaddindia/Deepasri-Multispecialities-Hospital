import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Number is required")
    .matches(/^\d+$/, "Invalid number"),
  email: yup.string().email("Invalid email").required("Email is required"),
  department: yup.string().required("Message is required"),
  message: yup.string().required("Message is required"),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    data.toemail = ["vinayak@appaddindia.com", "deepasrimh@gmail.com"];
    data.toke = "1dytfchtgfghvyhvvhvh";
    try {
      const response = await axios.post(
        "https://emailer-phi.vercel.app/hospital",
        data
      );
      data.name = "";
      alert("We will contact you soon.");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <>
      <div className="contactform__list mb-60">
        <form onSubmit={handleSubmit(onSubmit)} id="contact-form" method="post">
          <div className="row">
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  {...register("name")}
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                />
                {errors.name && (
                  <p style={{ color: "red" }}>{errors.name.message}</p>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  {...register("email")}
                  name="email"
                  type="email"
                  placeholder="Enter your mail"
                />
                {errors.email && (
                  <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  {...register("phone")}
                  name="phone"
                  type="text"
                  placeholder="Enter your number"
                />
                {errors.number && (
                  <p style={{ color: "red" }}>{errors.phone.message}</p>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  {...register("department")}
                  name="department"
                  type="text"
                  placeholder="Enter the department name"
                />
                {errors.department && (
                  <p style={{ color: "red" }}>{errors.department.message}</p>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30">
                <textarea
                  {...register("message")}
                  name="message"
                  placeholder="Type your comment"
                ></textarea>
                {errors.message && (
                  <p style={{ color: "red" }}>{errors.message.message}</p>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30-btn">
                <button type="submit" className="tp-btn">
                  Send Massage
                </button>
              </div>
              <p className="ajax-response"></p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
