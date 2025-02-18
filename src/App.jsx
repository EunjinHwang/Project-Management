import DefaultPage from "./components/DefaultPage";
import ProjectSideBar from "./components/ProjectSideBar";
import AddProject from "./components/AddProject";

import { useState } from "react";
function App() {
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);
  const [isDefaultPage, setIsDefaultPage] = useState(true);
  function handleAddButtonClick(){
    setIsAddButtonClicked(prevState => !prevState)
    setIsDefaultPage(prev => !prev)
}

  return (
    <>
      <main className="h-screen my-8">
        <ProjectSideBar onClick={handleAddButtonClick}/>
        {isAddButtonClicked && <AddProject />}
        {isDefaultPage && <DefaultPage onClick={handleAddButtonClick}/>}
      </main>
    </>
  );
}

export default App;
