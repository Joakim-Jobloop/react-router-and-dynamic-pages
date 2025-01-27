import { useParams } from "react-router-dom";
import data from "../data/no.json";

export const ServicePage = ({ params }) => {
  const service = useParams(params);
  console.log(service.service);
  console.log(data.services);
  console.log(data.services[service.service]);
  const correctService = data.services[service.service];
  return (
    <>
      <h1>{correctService.top_title}</h1>
      <p>{correctService.top_paragraph}</p>
      <p>{correctService.bottom_paragraphs}</p>
    </>
  );
};
