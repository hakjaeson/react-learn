type Student = {
  nickName: string;
  age: number;
};

type Human = {
  nickName: string;
  job: string;
};

type ISType = Student & Human;
const who: ISType = { nickName: "홍", age: 20, job: "학생" };
