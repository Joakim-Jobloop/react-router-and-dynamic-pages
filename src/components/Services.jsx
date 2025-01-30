import { useParams } from "react-router-dom";
// import data from "../data/no.json";

export const ServicePage = ({ params, data }) => {
  const service = useParams(params);
  console.log(service.service);
  console.log(data.services);
  console.log(data.services[service.service]);
  const correctService = data.services[service.service];
  return (
    <>
      <section className="text-white grid gap-24">
        <div className="grid gap-8">
          <h1>{correctService.top_title}</h1>
          <p>{correctService.top_paragraph}</p>
        </div>
        <div className="grid gap-8">
          <h2 className="text-4xl">
            Hvorfor velge meg til å lage din nye nettside:
          </h2>
          <ul className="flex flex-wrap bg-slate-950">
            {correctService.bullitins.map((bullet) => (
              <li className="p-6 w-full text-start hover:bg-slate-800 border-b-slate-50 border-b">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <p>{correctService.bottom_paragraphs}</p>
      </section>
    </>
  );
};
