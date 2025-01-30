import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { IndexPage } from "./components/IndexPage";
import { AboutPage } from "./components/AboutPage";
import PageLayout from "./components/Layout/PageLayout";
import { ServicePage } from "./components/Services";
import data from "./data/no.json";

function App() {
  console.log(data.services);
  // console.log(data.services.map((service) => service));
  const services = Object.keys(data.services);
  // console.log(Object.entries(data.services));
  console.log(Object.keys(data.services));
  // console.log(services.map((service) => service));
  return (
    <>
      <Router>
        {" "}
        {/* wrap the whole component in Router */}
        <header className="h-12 bg-slate-700 w-full flex-wrap flex justify-center gap-8">
          <Link className="" to="/">
            Home
          </Link>
          <Link to="/about">About</Link>
          {services.map((service) => (
            <Link key={service} to={`/${service}`}>
              {service}
            </Link>
          ))}
        </header>{" "}
        {/* header should be outside of Routes, but still inside of Router */}
        <PageLayout>
          <Routes>
            {" "}
            {/* parts of the website that should be changed should be in Routes{" "} */}
            {/* wrap the main content of the page in Routes */}
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path=":service" element={<ServicePage data={data} />} />
          </Routes>
        </PageLayout>
        <footer className="h-36 bg-slate-900">this is the footer</footer>{" "}
        {/* footer should be outside of Routes, but still inside of Router */}
      </Router>
    </>
  );
}

export default App;
