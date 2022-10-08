import { useAppDispatch } from "@redux/hooks";
import React from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  firstName: string;
  lastName: string;
  password: number;
}

const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => dispatch(data);

  return (
    <div className="h-screen flex items-center justify-center bg-sky-200">
      <form
        className="form flex flex-col justify-center"
        onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          className="block p-2 font-nunito rounded-md"
          placeholder="Email"
        />

        <input
          {...register("firstname")}
          className="block mt-4 p-2 font-nunito rounded-md"
          placeholder="Ваше имя"
        />

        <input
          {...register("lastname")}
          className="block mt-4 p-2 font-nunito rounded-md"
          placeholder="Ваша фамилия"
        />

        <input
          {...register("password")}
          className="block mt-4 p-2 font-nunito rounded-md"
          placeholder="Пароль"
        />

        <input
          className="form__input cursor-pointer block mt-4 p-2 font-nunito bg-sky-700 text-white rounded-md"
          type="submit"
        />
      </form>
    </div>
  );
};

export default LoginScreen;
