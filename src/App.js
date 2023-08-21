import "./App.css";
import Navhead, { HeadNavModal } from "./screen/Navhead";
import { useEffect, useState } from "react";
import Splashscreen from "./screen/Splashscreen";
import Home from "./screen/Home";
import { Element } from "react-scroll";
import Myproject from "./screen/MyProject";

function App() {
  const [modal, seModal] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState(true);
  const hadlewidth = () => {
    if (window.innerWidth > window.innerHeight) {
      setScreenDimensions(true);
    } else {
      setScreenDimensions(false);
      seModal(false)
    }
    // console.log('screenDimensions',screenDimensions)
  };
  window.addEventListener("resize", hadlewidth);

  const [cek, setCek] = useState(false);
  useEffect(() => {
    if (cek === false) {
      setTimeout(() => {
        setCek(true);
        localStorage.setItem("isLoggedIn", true);
      }, 2000);
    } else {
    }
  }, []);

  return cek === false ? (
    <Splashscreen />
  ) : (
    <div className="App">
      <Navhead
        screenDimensions={screenDimensions}
        seModal={seModal}
        modal={modal}
      />
      <HeadNavModal seModal={seModal} modal={modal} />
      <Element name="home">
          <Home screenDimensions={screenDimensions} />
        </Element>
      <Element name="myproject">
          <Myproject screenDimensions={screenDimensions} />
        </Element>
      <div className="App-body">this is body</div>
      <div className="App-body">this is body2</div>
      <div className="App-body">this is body3</div>
    </div>
  );
}

export default App;
