/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "./TextInput";
import Loading from "./Loading";
import CustomButton from "./CustomButton";
import { UpdateProfile } from "../redux/userSlice";

const EditProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [picture, setPicture] = useState(null);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: { ...user },
  });
  const handleSelect = (e) => {};
  //   const handleClose = () => {
  //     dispatch(UpdateProfile(false));
  //   };
  const onSubmit = async (data) => {};
  return (
    <>
      <div className="fixed z-50 inset-0 overflow-y-auto transition ease-in-out delay-200">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-[#000] opacity-70"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          {/* Ngoài ra, đoạn mã HTML này còn đặt các thuộc tính role, aria-modal và aria-labelledby cho div. Các thuộc tính này được sử dụng để làm cho modal có thể truy cập được bởi các trình đọc màn hình và các công cụ hỗ trợ khác. */}
          <div
            className="inline-block align-bottom bg-primary rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="flex justify-between px-6 pt-5 pb-2">
              <label
                htmlFor="name"
                className="block font-medium text-xl text-ascent-1 text-left"
              >
                Edit Profile
              </label>
              <button
                className="text-ascent-1"
                onClick={() => dispatch(UpdateProfile(false))}
              >
                <MdClose size={22} />
              </button>
            </div>
            <form
              className="px-4 sm:px-6 flex flex-col gap-3 2xl:gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextInput
                label="First Name"
                type="text"
                placeholder="First Name"
                styles="w-full"
                register={register("first name", {
                  required: "First Name does not match",
                })}
              />
              <TextInput
                label="Last Name"
                type="text"
                placeholder="Last Name"
                styles="w-full"
                register={register("last name", {
                  required: "Last Name does not match",
                })}
              />
              <TextInput
                label="Profession"
                type="text"
                placeholder="Profession"
                styles="w-full"
                register={register("profession", {
                  required: "Profession does not match",
                })}
              />
              <TextInput
                label="Location"
                type="text"
                placeholder="Location"
                styles="w-full"
                register={register("location", {
                  required: "Location does not match",
                })}
              />
              <label
                className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer my-4"
                htmlFor="imgUpload"
              >
                <input
                  type="file"
                  className=""
                  id="imgUpload"
                  onChange={(e) => handleSelect(e)}
                  accept=".jpg, .png, .jpeg"
                />
              </label>
              <div className="py-5 sm:flex sm:flex-row-reverse border-t border-[#66666645]">
                {isSubmitting ? (
                  <Loading />
                ) : (
                  <CustomButton
                    type="submit"
                    containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
                    title="Submit"
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
