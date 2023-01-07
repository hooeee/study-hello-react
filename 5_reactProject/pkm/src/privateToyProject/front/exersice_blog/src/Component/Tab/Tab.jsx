import Grafana from "../Dashboard/Grafana.jsx";
import DBDataSave from "../DataWrite/DBDataSave.jsx";
import "./Tab.css";
function DataWrite() {
  return (
    <>
      <div className="img-main"></div>
      <DBDataSave />
    </>
  );
}

function Dashboard() {
  return (
    <>
      <div className="img-main1"></div>
      <Grafana />
    </>
  );
}

function About() {
  return <div className="img-main2">About</div>;
}

export { DataWrite, Dashboard, About };
