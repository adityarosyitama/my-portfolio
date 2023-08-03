import React from "react";

export default function HomeComponent() {
  return (
    <div style={{ paddingLeft: 16, paddingRight: 16 }}>
      <h1
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "grey",
        }}
      >
        MY PORTFOLIO
      </h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "75%" }}>
          <h3>About</h3>
          <>
            As a highly motivated and committed Mobile Developer and Data
            Scientist, I'm seeking an opportunity to apply my expertise in
            Mobile Engineering. With comprehensive experience in React Native,
            JavaScript, and GIT, I have a proven history of creating
            high-quality, user-friendly mobile apps and websites. I remain
            dedicated to keeping up with the most recent industry trends and
            technologies, eager to continue my growth in the ever-evolving tech
            landscape.
          </>
        </div>
        <img
          src={"https://i.ibb.co/bQhj9cF/1690985718646.jpg"}
          alt={"my_photo"}
          width={"25%"}
          height={"20%"}
          style={{ borderRadius: "100%", alignSelf: "center" }}
        />
      </div>
      <div>
        <h1
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "grey",
            marginTop:'10%'
          }}
        >
          MY PROJECT
        </h1>
      </div>
    </div>
  );
}
