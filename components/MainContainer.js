import Head from "next/head";
import CustomLink from "../UI/CustomLink";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"Тимыч " + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <nav className="navbar">
        <CustomLink className="navbar__link" href="/" text="Главная" />
        <CustomLink
          className="navbar__link"
          href="/users"
          text="Пользователи"
        />
      </nav>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          background: teal;
          min-height: 50px;
          width: 100%;
        }
        .navbar__link {
          text-decoration: none;
          color: #fff;
          font-size: 18px;
          margin: 20px;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
