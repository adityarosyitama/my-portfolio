import { Link } from "react-scroll";

function Navhead(props) {
  const { screenDimensions, seModal, modal } = props;
  // console.log("screenDimensions navhead : ",screenDimensions)
  return (
    <div style={{  paddingLeft: '10%',
      paddingRight: '10%',
      paddingTop: '1%',
      paddingBottom: '1%',
      position: 'sticky',
      top: 0,
      backgroundColor: 'white',}}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>Aditya Rosyitama</div>
        {screenDimensions === true ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
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
              linknav={"aboutme"}
              text={"About"}
              colortext={"black"}
              marginlefttext={10}
              seModal={seModal}
            />
            {/* <ButtonHeadNav
              linknav={"profile"}
              text={"Profile"}
              colortext={"black"}
              marginlefttext={10}
              seModal={seModal}
            /> */}
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
        <div
          style={{
            width: "80%",
            position: "fixed",
            top: 0,
            marginTop: "15%",
            marginLeft: "15%",
            alignContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingTop: "5%",
            paddingBottom: "5%",
            borderColor: "grey",
            borderWidth: 2,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
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
              linknav={"aboutme"}
              text={"About me"}
              colortext={"white"}
              marginlefttext={0}
              seModal={seModal}
            />
            {/* <div style={{ marginTop: 10 }} />
            <ButtonHeadNav
              linknav={"profile"}
              text={"Profile"}
              colortext={"white"}
              marginlefttext={0}
              seModal={seModal}
            /> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
