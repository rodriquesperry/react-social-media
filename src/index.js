import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [developer, setDeveloper] = React.useState({
    language: "Python",
    yearsOfExperience: 0,
    isEmployed: false,
  });
  // const [language, setLanguage] = React.useState("python");
  // const [yearsOfExperience, setYearsOfExperience] = React.useState(0);
  function handleBUttonClick(e) {
    setDeveloper({
      language: "JavaScript",
      yearsOfExperience: 0,
    });
  }

  function years(e) {
    setDeveloper({
      ...developer,
      yearsOfExperience: e.target.value,
    });
  }

  function handleToggleEmployment() {
    setDeveloper((prevState) => ({
      ...prevState,
      isEmployed: !prevState.isEmployed,
    }));
  }

  return (
    <div>
      <div>
        <button onClick={handleToggleEmployment}>
          Toggle Employment Status
        </button>
      </div>
      <button onClick={handleBUttonClick}>Button Language</button>
      <div>
        <input type="number" onChange={years} />
      </div>

      <p>I am learning {developer.language}</p>
      <p>
        I have {developer.yearsOfExperience} in {developer.language}
      </p>
      <p>
        Employment Status:{" "}
        {developer.isEmployed === true ? "employed" : "not employed"}
      </p>
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
