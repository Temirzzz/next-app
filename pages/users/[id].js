import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();
  console.log(query);
  return (
    <MainContainer keywords={"Страница одного пользователя"}>
      <h2>Я пользователь c id {query.id}</h2>
      <div>{user.name}</div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  console.log(params);
  return {
    props: {
      user,
    }, // will be passed to the page component as props
  };
}
