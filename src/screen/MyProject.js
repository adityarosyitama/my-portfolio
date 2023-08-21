import "./MyProject.css";
import toyotaTrustImage from "../components/assets/toyotatrust.png";
import jackfixer from "../components/assets/jackfixer.png";
import contact from "../components/assets/contact.jpg";
import csi from "../components/assets/csi.png";

function Myproject(screenDimensions) {
  return (
    <div className="Myproject">
      <h1
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          paddingTop: "5%",
        }}
      >
        MY PROJECT
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: screenDimensions.screenDimensions === false ? "100%" : "80%",
          // backgroundColor: "red",
          paddingLeft: screenDimensions.screenDimensions === false ? "" : "10%",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Myprojecta
          screenDimensions={screenDimensions}
          indicator={2}
          LinkConect={
            "https://gitlab.com/pryhanantoid77/Marketplaces-Mobile-Apps"
          }
          LinkIconImage={csi}
          name={"CSI"}
          DescriptionProject={
            "This project contain Contact Market Place App. Iam as member in this project."
          }
        />
        <Myprojecta
          screenDimensions={screenDimensions}
          indicator={1}
          LinkConect={
            "https://gitlab.com/adityarosyitama/coding-test-react-native"
          }
          LinkIconImage={contact}
          name={"Contact Person"}
          DescriptionProject={
            "This project contain Contact person App. This my own project"
          }
        />
        <Myprojecta
          screenDimensions={screenDimensions}
          indicator={2}
          LinkConect={
            "https://gitlab.com/adityarosyitama/shoes-fix-and-care-company"
          }
          LinkIconImage={jackfixer}
          name={"Jack Fixer"}
          DescriptionProject={
            "This project contain Shoes Fix and Care App. This my own project, UI based on Figma"
          }
        />
        <Myprojecta
          screenDimensions={screenDimensions}
          indicator={1}
          LinkConect={"https://gitlab.com/kelompok_4/project_automotive_app"}
          LinkIconImage={toyotaTrustImage}
          name={"Internal Automotive Company"}
          DescriptionProject={
            "This project contain Mobile Apps for Internal Automotive Company. i am as project manager with 3 team other member make this project, UI based on Figma. Here User and Password for try (bohkevin@gmail.com && pass123)"
          }
        />
      </div>
    </div>
  );
}

export default Myproject;

function Myprojecta({
  screenDimensions,
  indicator,
  LinkConect,
  LinkIconImage,
  name,
  DescriptionProject,
}) {
  const coloumnrow =
    screenDimensions.screenDimensions === false ? "row" : "column";
  const style =
    indicator === 1
      ? coloumnrow === "column"
        ? "row-reverse"
        : "column-reverse"
      : coloumnrow === "row"
      ? "column-reverse"
      : "row";
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        marginBottom: 10,
        flex: screenDimensions.screenDimensions === false ? "100%" : "50%",
        boxSizing: "border-box",
        padding: 5,
      }}
    >
      <div
        style={{
          width: screenDimensions.screenDimensions === false ? "80%" : "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: style,
            borderColor: "black",
            borderWidth: 2,
            borderStyle: "solid",
            padding: 10,
          }}
        >
          <div
            style={{
              textAlign: "justify",
              marginTop: style === "column" ? 10 : 0,
              marginLeft: style === "row-reverse" ? 10 : 0,
              marginRight: style === "row" ? 10 : 0,
              fontSize:
                screenDimensions.screenDimensions === false ? "" : "20px",
              width: "100%",
            }}
          >
            {DescriptionProject}
          </div>
          <div style={{ textAlign: "center", width: "100%" }}>
            <a href={LinkConect} target="_blank" rel="noopener noreferrer">
              <img
                src={LinkIconImage}
                alt={name}
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "10%",
                  alignSelf: "center",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
