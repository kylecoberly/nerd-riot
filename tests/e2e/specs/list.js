describe("Listing bars", () => {
  beforeEach(() => {
    cy.intercept("**/places", {
      body: {
        places: [
          {
            id: 1,
            title: "The Lounge",
            lastVisited: "2018-01-01",
            imageUrl: "https://photos.app.goo.gl/QqpUbztDFmk6uux2A",
            description: "Home",
          },
          {
            id: 2,
            title: "Mexican DBC",
            lastVisited: "2018-01-01",
            imageUrl:
              "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
            description: "Other home",
          },
        ],
      },
    });
  });
  it("lists bars", () => {
    cy.visit("/");

    cy.get(".place").should("have.length", 2);
  });
});