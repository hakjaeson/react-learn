# react-hook-form 과 yup 활용

## react-hook-form 활용

- [react-hook-form](https://www.react-hook-form.com/)
- `npm install react-hook-form`

### 1.1. form 기본 코드

```js
import React from "react";
const FormComponent = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("전송");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <br />
        <input type="password" name="userpass" />
        <br />
        <input type="email" name="useremail" />
        <br />
        <textarea name="usermemo"></textarea>
        <br />
        <button type="submit">확인</button>
      </form>
    </>
  );
};
export default FormComponent;
```

### 1.2. form 기본 코드(이벤트 걸기)

```js
import React from "react";
const FormComponent = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("전송");
  };
  const handleChange = e => {
    console.log(e.target.name, e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleChange} />
        <br />
        <input type="password" name="userpass" onChange={handleChange} />
        <br />
        <input type="email" name="useremail" onChange={handleChange} />
        <br />
        <textarea name="usermemo" onChange={handleChange}></textarea>
        <br />
        <button type="submit">확인</button>
      </form>
    </>
  );
};
export default FormComponent;
```

### 1.3. form 기본 코드(state 관리하기)

```js
import React, { useState } from "react";
const initState = {
  username: "",
  userpass: "",
  useremail: "",
  usermemo: "",
};
const FormComponent = () => {
  const [userInfo, setUserInfo] = useState(initState);
  const handleSubmit = e => {
    e.preventDefault();
    console.log("전송", userInfo);
  };
  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    userInfo[e.target.name] = e.target.value;
    setUserInfo({ ...userInfo });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={userInfo.username}
        />
        <br />
        <input
          type="password"
          name="userpass"
          onChange={handleChange}
          value={userInfo.userpass}
        />
        <br />
        <input
          type="email"
          name="useremail"
          onChange={handleChange}
          value={userInfo.useremail}
        />
        <br />
        <textarea
          name="usermemo"
          onChange={handleChange}
          value={userInfo.usermemo}
        ></textarea>
        <br />
        <button type="submit">확인</button>
      </form>
    </>
  );
};
export default FormComponent;
```

### 1.4. form 기본 코드(리랜더링 문제)

```js
import React, { useState } from "react";
const initState = {
  username: "",
  userpass: "",
  useremail: "",
  usermemo: "",
};
const FormComponent = () => {
  console.log("리랜더링....");
  const [userInfo, setUserInfo] = useState(initState);
  const handleSubmit = e => {
    e.preventDefault();
    console.log("전송", userInfo);
  };
  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    userInfo[e.target.name] = e.target.value;
    setUserInfo({ ...userInfo });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={userInfo.username}
        />
        <br />
        <input
          type="password"
          name="userpass"
          onChange={handleChange}
          value={userInfo.userpass}
        />
        <br />
        <input
          type="email"
          name="useremail"
          onChange={handleChange}
          value={userInfo.useremail}
        />
        <br />
        <textarea
          name="usermemo"
          onChange={handleChange}
          value={userInfo.usermemo}
        ></textarea>
        <br />
        <button type="submit">확인</button>
      </form>
    </>
  );
};
export default FormComponent;
```

### 2. react-hook-form 기본 코드(리랜더링 문제)

```js
import React from "react";
const FormComponent = () => {
  return (
    <>
      <form>
        <input type="text" name="username" />
        <br />
        <input type="password" name="userpass" />
        <br />
        <input type="email" name="useremail" />
        <br />
        <textarea name="usermemo"></textarea>
        <br />
        <button type="submit">확인</button>
      </form>
    </>
  );
};
export default FormComponent;
```

### 2.1 react-hook-form 기본 코드(리랜더링 문제)

```js
import React from "react";
import { useForm } from "react-hook-form";

const FormComponent = () => {
  const {} = useForm();
  return (
    <>
      <form>
        <input type="text" name="username" />
        <br />
        <input type="password" name="userpass" />
        <br />
        <input type="email" name="useremail" />
        <br />
        <textarea name="usermemo"></textarea>
        <br />
        <button type="submit">확인</button>
      </form>
    </>
  );
};
export default FormComponent;
```

### 2.2 react-hook-form 기본 코드(리랜더링 문제)

```js
import React from "react";
import { useForm } from "react-hook-form";

const FormComponent = () => {
  const { register, handleSubmit } = useForm();
  const handleSubmitFn = data => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitFn)}>
        <input type="text" {...register("username")} />
        <br />
        <input type="password" {...register("userpass")} />
        <br />
        <input type="email" {...register("useremail")} />
        <br />
        <textarea {...register("usermemo")}></textarea>
        <br />
        <button type="submit">확인</button>
      </form>
    </>
  );
};
export default FormComponent;
```

### 2.3 react-hook-form 기본 코드(기본값)

```js
import React from "react";
import { useForm } from "react-hook-form";

const initState = {
  username: "a",
  userpass: "b",
  useremail: "c",
  usermemo: "d",
};

const FormComponent = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: initState,
  });
  const handleSubmitFn = data => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitFn)}>
        <input type="text" {...register("username")} />
        <br />
        <input type="password" {...register("userpass")} />
        <br />
        <input type="email" {...register("useremail")} />
        <br />
        <textarea {...register("usermemo")}></textarea>
        <br />
        <button type="submit">확인</button>
      </form>
    </>
  );
};
export default FormComponent;
```

## 2. yup 활용 (검증라이브러리)

- [react-hook-form/yup](https://react-hook-form.com/advanced-usage#CustomHookwithResolver)
- [yup](https://www.npmjs.com/package/yup)
- `npm i yup`
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
- `npm i @hookform/resolvers`

### 2.1. yup 과 react-hook-form 연결하기

```js
import { yupResolver } from "@hookform/resolvers/yup";
```

```js
const { register, handleSubmit } = useForm({
  defaultValues: initState,
  resolver: yupResolver(),
});
```

### 2.2. yup 검증 코드 넣기

```js
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
```

```js
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
```

### 2.3. 연결하기

```js
const { register, handleSubmit } = useForm({
  defaultValues: initState,
  resolver: yupResolver(validationSchema),
});
```

### 2.3. 검사시점

```js
const { register, handleSubmit } = useForm({
  defaultValues: initState,
  resolver: yupResolver(validationSchema),
  mode: "onChange",
});
```

### 2.4. 에러 보여주기

- formState 추가

```js
const { register, handleSubmit, formState } = useForm({
  defaultValues: initState,
  resolver: yupResolver(validationSchema),
  mode: "onChange",
});
```

```js
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
  <button type="submit">확인</button>
</form>
```

### 2.5. 검사 완료 여부

```js
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
  ...
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitFn)}>
        ...
        <br />
        검증 여부 : {formState.isValid ? "ok" : "no"}
        <br />
        <button type="submit">확인</button>
      </form>
    </>
  );
};
export default FormComponent;
```

### 2.6. 전체 코드

```js
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

  const { register, handleSubmit, formState } = useForm({
    defaultValues: initState,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const handleSubmitFn = data => {
    console.log(data);
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
```

```js
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
```
