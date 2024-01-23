// 타이틀 콤포넌트
const Title = function ({ month, day, myname, gogo, say, today, children }) {
//   console.log(props);
  return (
    <h1 onClick={() => gogo("반갑지롱!!!")}>
      {month}월{day}일 {myname} {today} {children}
    </h1>
  );
};
export default Title;
