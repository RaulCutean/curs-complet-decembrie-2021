import React from "react";
import { PublicLayout, Button } from "../components";
import { useForm } from "react-hook-form";
import { emailRegExp, colors } from "../consts";
import { apiFactory } from "../api";

const inputStyle = {
  fontSize: "1.6rem",
  lineHeight: "2.4rem",
  color: colors.text.primary,
  display: "block",
  width: "100%",
  padding: "0.7rem 1.6rem",
  borderRadius: "2rem",
  border: `1px solid ${colors.text.secondary}`,
  margin: "5px 0",
};

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (JSON.stringify(errors) !== "{}") {
        throw new Error("Validation failed");
      }
      const { data: response, status } = await apiFactory().auth().login(data);

      status === 200 && localStorage.setItem("token", response.token);
      window.location.reload();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <PublicLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>LoginPage</h1>
        <div>
          <input
            {...register("email", {
              required: { value: true, message: "Email address is required." },
              pattern: {
                value: emailRegExp,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Email address"
            type="email"
            autoComplete="email"
            style={inputStyle}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            {...register("password", {
              required: { value: true, message: "Password is required." },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters.",
              },
            })}
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            style={inputStyle}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <Button type="submit" label="Log in" />
        <Button to="/register" label="Create account" />
      </form>
    </PublicLayout>
  );
}
