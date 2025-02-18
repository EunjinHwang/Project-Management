import DefaultPage from "./components/DefaultPage";
import ProjectSideBar from "./components/ProjectSideBar";
import AddProject from "./components/AddProject";

import { useState } from "react";
function App() {
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);
  const [isDefaultPage, setIsDefaultPage] = useState(true);

  
  function handleCancelButtonClick(){
    setIsAddButtonClicked(false);
    setIsDefaultPage(true);
  }

  function handleAddButtonClick(){
    setIsAddButtonClicked(true);
    setIsDefaultPage(false);
  } 

  return (
    <>
      <main className="h-screen my-8">
        <ProjectSideBar onClick={handleAddButtonClick}/>
        {isAddButtonClicked && <AddProject onClick={handleCancelButtonClick}/>}
        {isDefaultPage && <DefaultPage onClick={handleAddButtonClick}/>}
      </main>
    </>
  );
}

export default App;
