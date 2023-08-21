import "./Home.css";

function Home(screenDimensions) {
  return (
    <div className="Home">
      <div className="Home-div">
        <h1>MY PORTFOLIO</h1>
        <Description screenDimensions={screenDimensions.screenDimensions} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonLink
            LinkIconImage={"https://i.ibb.co/c6CMDbf/pngwing-com.png"}
            LinkConect={"https://gitlab.com/adityarosyitama"}
            text={"React"}
            screenDimensions={screenDimensions.screenDimensions}
          />
          <ButtonLink
            LinkIconImage={"https://i.ibb.co/DV1FS08/pngwing-com-1.png"}
            LinkConect={"https://gitlab.com/adityarosyitama"}
            text={"Gitlab"}
            screenDimensions={screenDimensions.screenDimensions}
          />
          <ButtonLink
            LinkIconImage={
              "https://i.ibb.co/4RVh1D2/vecteezy-linkedin-logo-png-linkedin-icon-transparent-png-18930587-72.png"
            }
            LinkConect={"https://www.linkedin.com/in/adityarosyitama/"}
            text={"Linkedin"}
            screenDimensions={screenDimensions.screenDimensions}
          />
        </div>
      </div>
    
    </div>
  );
}

export default Home;

function Description(screenDimensions) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:
          screenDimensions.screenDimensions === false ? "column" : "row",
      }}
    >
      {screenDimensions.screenDimensions === false ? (
        <Profile screenDimensions={screenDimensions.screenDimensions} />
      ) : (
        ""
      )}
      <div
        style={{
          width: screenDimensions.screenDimensions === false ? "100%" : "75%",
        }}
      >
        <h3
          style={{
            fontSize: screenDimensions.screenDimensions === false ? "" : "25px",
          }}
        >
          Headline
        </h3>
        <div
          style={{
            fontSize: screenDimensions.screenDimensions === false ? "" : "25px",
          }}
        >
          Mobile Enginer (React Native) || Web Enginer (React) || Data Science
        </div>
      </div>

      {screenDimensions.screenDimensions === false ? (
        ""
      ) : (
        <Profile screenDimensions={screenDimensions.screenDimensions} />
      )}
    </div>
  );
}

function Profile(screenDimensions) {
  return (
    <img
      src={"https://i.ibb.co/bQhj9cF/1690985718646.jpg"}
      alt={"my_photo"}
      width={screenDimensions.screenDimensions === false ? "40%" : "30%"}
      style={{ borderRadius: "100%", alignSelf: "center" }}
    />
  );
}

function ButtonLink({ LinkIconImage, LinkConect, text, screenDimensions }) {
  const size = screenDimensions === false ? "20%" : "10%";
  return (
    <div style={{ width: size, height: size }}>
      <a href={LinkConect} target="_blank" rel="noopener noreferrer">
        <img
          src={LinkIconImage}
          alt={text}
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: "100%", alignSelf: "center" }}
        />
      </a>
    </div>
  );
}


