import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Buttons } from "./components/buttons/Buttons";
import { FilesList } from "./components/files_list/FilesList";

function App() {
  const [files, setFiles] = useState([]);

  return (
    <div className="app">
      <Buttons files={files} setFiles={setFiles} />

      <div className="files_list">
        <TransitionGroup>
          {files.length > 0 &&
            files.map((el) => (
              <CSSTransition key={el.name} timeout={500} classNames="item">
                <FilesList file={el} files={files} setFiles={setFiles} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
