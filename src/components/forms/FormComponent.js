import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const initState = {
  username: "",
  userpass: "",
  useremail: "",
  usermemo: "",
};

const FormComponent = () => {
  const validationSchema = yup.object({
    username: yup.string().required("이름을 입력해주세요."),
    userpass: yup
      .string()
      .required("비밀번호를 입력해주세요.")
      .min(4, "4자 이상 입력하세요.")
      .max(16, "최대 16자까지 입니다."),
    useremail: yup
      .string()
      .required("이메일을 입력해주세요.")
      .email("이메일 형식에 맞지 않습니다."),
    usermemo: yup.string().required("메모를 입력해주세요."),
  });

  const {
    register, // input에서 값을 불러오기 위한 함수
    handleSubmit, // React-Hook-Form에서 Submit을 관리하기 위해 만든 함수
    watch, // input에서 입력하는 값을 실시간으로 확인하기 위한 함수
    formState,
  } = useForm({
    defaultValues: initState,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const handleSubmitFn = data => {
    const result = watch();
    console.log("data", data);
    console.log("result", result);
    console.log(formState.isValid);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitFn)}>
        <input type="text" {...register("username")} />
        <div>{formState.errors.username?.message}</div>
        <br />
        <input type="password" {...register("userpass")} />
        <div>{formState.errors.userpass?.message}</div>
        <br />
        <input type="email" {...register("useremail")} />
        <div>{formState.errors.useremail?.message}</div>
        <br />
        <textarea {...register("usermemo")}></textarea>
        <div>{formState.errors.usermemo?.message}</div>
        <br />
        검증 여부 : {formState.isValid ? "ok" : "no"}
        <br />
        <button type="submit">확인</button>
      </form>
    </>
  );
};
export default FormComponent;
