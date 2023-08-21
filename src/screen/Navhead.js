import { Link } from "react-scroll";
import "./Navhead.css";

function Navhead(props) {
  const { screenDimensions, seModal, modal } = props;
  // console.log("screenDimensions navhead : ",screenDimensions)
  return (
    <div className="Navhead">
      <div className="Navhead-header">
        <div>Aditya Rosyitama</div>
        {screenDimensions === true ? (
          <div className="Navhead-list">
            <ButtonHeadNav
              linknav={"home"}
              text={"Home"}
              colortext={"black"}
              marginlefttext={10}
              seModal={seModal}
            />
            <ButtonHeadNav
              linknav={"myproject"}
              text={"My Project"}
              colortext={"black"}
              marginlefttext={10}
              seModal={seModal}
            />
            <ButtonHeadNav
              linknav={"about"}
              text={"About"}
              colortext={"black"}
              marginlefttext={10}
              seModal={seModal}
            />
            <ButtonHeadNav
              linknav={"profile"}
              text={"Profile"}
              colortext={"black"}
              marginlefttext={10}
              seModal={seModal}
            />
          </div>
        ) : (
          <button
            style={{
              borderColor: "transparent",
              backgroundColor: "transparent",
            }}
            onClick={() => seModal(modal === true ? false : true)}
          >
            =
          </button>
        )}
      </div>
    </div>
  );
}

export default Navhead;

export const ButtonHeadNav = ({
  text,
  linknav,
  colortext,
  marginlefttext,
  seModal,
}) => {
  return (
    <nav>
      <Link
        to={linknav}
        smooth={true}
        duration={500}
        onClick={() => seModal(false)}
        style={{ marginLeft: marginlefttext, color: colortext }}
      >
        {text}
      </Link>
    </nav>
  );
};

export const HeadNavModal = ({ modal, seModal }) => {
  return (
    <>
      {modal === true ? (
        <div className="HeadNavModal">
          <div>
            <ButtonHeadNav
              linknav={"home"}
              text={"Home"}
              colortext={"white"}
              marginlefttext={0}
              seModal={seModal}
            />
            <div style={{ marginTop: 10 }} />
            <ButtonHeadNav
              linknav={"myproject"}
              text={"My Project"}
              colortext={"white"}
              marginlefttext={0}
              seModal={seModal}
            />
            <div style={{ marginTop: 10 }} />
            <ButtonHeadNav
              linknav={"about"}
              text={"About"}
              colortext={"white"}
              marginlefttext={0}
              seModal={seModal}
            />
            <div style={{ marginTop: 10 }} />
            <ButtonHeadNav
              linknav={"profile"}
              text={"Profile"}
              colortext={"white"}
              marginlefttext={0}
              seModal={seModal}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
