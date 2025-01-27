import { useParams } from "react-router";

export const AboutPage = ({ params }) => {
  const service = useParams(params);
  console.log(service.service);
  //   console.log(params);
  return (
    <>
      <h1>This is the aboutPage, as you can see by the different text</h1>
      <p>Some different text than before</p>
    </>
  );
};
