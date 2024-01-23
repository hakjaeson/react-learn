import Footer from "../components/Footer";
import Header from "../components/Header";
import "../scss/main.css";
import { WrapCss } from "../styles/sample";

const Main = () => {
  

  return (
    // <div className="wrap" >
    <div className="wrap" style={WrapCss}>
      {/* 상단 내용 고정 */}
      <Header>
        <a href="#">로고</a>
        <nav>
          <ul>
            <li>
              <a href="#">Menu-1</a>
              <ul>
                <li>
                  <a href="#">SubMenu-1</a>
                </li>
                <li>
                  <a href="#">SubMenu-2</a>
                </li>
                <li>
                  <a href="#">SubMenu-3</a>
                </li>
                <li>
                  <a href="#">SubMenu-4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Menu-2</a>
              <ul>
                <li>
                  <a href="#">SubMenu-1</a>
                </li>
                <li>
                  <a href="#">SubMenu-2</a>
                </li>
                <li>
                  <a href="#">SubMenu-3</a>
                </li>
                <li>
                  <a href="#">SubMenu-4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Menu-3</a>
              <ul>
                <li>
                  <a href="#">SubMenu-1</a>
                </li>
                <li>
                  <a href="#">SubMenu-2</a>
                </li>
                <li>
                  <a href="#">SubMenu-3</a>
                </li>
                <li>
                  <a href="#">SubMenu-4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Menu-4</a>
              <ul>
                <li>
                  <a href="#">SubMenu-1</a>
                </li>
                <li>
                  <a href="#">SubMenu-2</a>
                </li>
                <li>
                  <a href="#">SubMenu-3</a>
                </li>
                <li>
                  <a href="#">SubMenu-4</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </Header>
      {/* 내용은 자주 변함 */}
      <main className="main">
        <section className="slide">
          <div className="inner">이미지슬라이드</div>
        </section>
        <section className="community">
          <div className="inner">
            <div className="community-notice">
              <div>공지사항</div>
              <div>갤러리</div>
            </div>
            <div className="community-banner">배너</div>
            <div className="community-link">바로가기</div>
          </div>
        </section>
      </main>
      {/* 하단 고정 */}
      <Footer>
        <div>
          <a href="#">로고</a>
        </div>
        <div>카피라이터</div>
        <div>
          <ul>
            <li>
              <a href="#">인스타그램</a>
            </li>
            <li>
              <a href="#">페이스북</a>
            </li>
            <li>
              <a href="#">카카오오픈채팅</a>
            </li>
            <li>
              <a href="#">네이버블러그</a>
            </li>
            <li>
              <a href="#">트위터(X)</a>
            </li>
          </ul>
        </div>
      </Footer>
    </div>
  );
};

export default Main;
