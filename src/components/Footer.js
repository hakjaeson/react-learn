const Footer = (props) => {
  console.log(props.children);
  // js코드자리
  const tags = "안녕";
  return <footer>{props.children}</footer>;
};

export default Footer;
