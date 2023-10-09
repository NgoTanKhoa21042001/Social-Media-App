/* eslint-disable no-unused-vars */
import React from "react";
import { TbSocial } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { BsShare } from "react-icons/bs";
import { ImConnection } from "react-icons/im";
import { AiOutlineInteraction } from "react-icons/ai";
import { CustomButton, Loading } from "../components";
import { BgImage } from "../assets";
const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {};

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6 ">
      <div className="w-full md:w-2/3 h-fit lg:h-full py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl">
        {/* Left */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center">
          {/* Logo */}
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-[#065ad8] rounded text-white">
              <TbSocial />
            </div>
            <span className="text-2xl text-[#065ad8] font-semibold">
              ShareFun
            </span>
          </div>
          <p className="text-ascent-1 text-base font-semibold">
            Create to your account
          </p>
          {/* Form */}
          <form
            className="py-8 flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="firstName"
                placeholder="First Name"
                error={errors.firstName ? errors.firstName.message : ""}
                label="First Name"
                type="text"
                register={register("email", {
                  required: "Email Address is required",
                })}
                styles="w-full"
              />
              <TextInput
                placeholder="Last Name"
                error={errors.firstName ? errors.firstName.message : ""}
                label="Last Name"
                type="lastName"
                register={register("email", {
                  required: "Email Address is required",
                })}
                styles="w-full"
              />
            </div>
            <TextInput
              name="email"
              placeholder="email@example.com"
              error={errors.email ? errors.email.message : ""}
              label="Email Address"
              type="email"
              register={register("email", {
                required: "Email Address is required",
              })}
              styles="w-full rounded-full"
              labelStyle="ml-2"
            />
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="password"
                placeholder="password"
                label="Password"
                type="password"
                register={register("password", {
                  required: "Password is required",
                })}
                styles="w-full rounded-full"
                labelStyle="ml-2"
                error={errors.password ? errors.password.message : ""}
              />
              <TextInput
                label="Confirm Password"
                placeholder="Password"
                type="password"
                styles="w-full"
                register={register("cPassword", {
                  validate: (value) => {
                    const { password } = getValues();

                    if (password != value) {
                      return "Password do no match";
                    }
                  },
                })}
                error={
                  errors.cPassword && errors.cPassword.type === "validate"
                    ? errors.cPassword?.message
                    : ""
                }
              />
            </div>
            <Link
              to="/reset-password"
              className="text-sm text-right text-blue font-semibold"
            >
              Forgot Password ?
            </Link>
            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status == "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                }mt-0.5`}
              ></span>
            )}

            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                title="Login"
                containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium tex-white outline-none`}
                type="submit"
              />
            )}
          </form>

          <p className="text-ascent-2 text-sm text-center pb-5">
            Dont have an account?
            <Link
              to="/register"
              className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
            >
              Create Account
            </Link>
          </p>
        </div>
        {/* Right */}
        <div className="hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue">
          <div className="relative w-full flex items-center justify-center">
            <img
              src={BgImage}
              alt="Bg Image"
              className="w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover"
            />
            <div className="absolute flex items-center right-10 top-10 bg-white py-2 px-5 rounded-full gap-1  ">
              <BsShare size={14} />
              <span className="text-xs font-medium">Share</span>
            </div>
            <div className="absolute flex items-center left-10 top-6 bg-white py-2 px-5 rounded-full gap-1  ">
              <ImConnection size={14} />
              <span className="text-xs font-medium">Connect</span>
            </div>
            <div className="absolute flex items-center left-12 bottom-6 bg-white py-2 px-5 rounded-full gap-1  ">
              <AiOutlineInteraction size={14} />
              <span className="text-xs font-medium">Interact</span>
            </div>
          </div>
          {/* footer */}
          <div className="mt-16 text-center">
            <p className="text-white text-base">
              Connect with friends & have share for fun
            </p>
            <span className="text-sm text-white/80">
              Share memories with friends and world
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
