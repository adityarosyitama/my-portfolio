function Aboutme({ screenDimensions }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.1)",
        paddingBottom:'5%',
      }}
    >
      <div style={{width: screenDimensions === false ? "80%" : "60%",}}>
        <h1>About me</h1>
        <div style={{textAlign:'justify'}}>
          As a highly motivated and committed Mobile Engineer, Web Engineer
          and Data Scientist. I'm seeking an opportunity to apply my expertise
          in Mobile Engineer and Web Engineer. With
          comprehensive experience in React Native, React js, and GIT, I have a
          proven history of creating high-quality, user-friendly mobile apps and
          websites. I remain dedicated to keeping up with the most recent
          industry trends and technologies, eager to continue my growth in the
          ever-evolving tech landscape.
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
