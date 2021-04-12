describe("Adding places", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/places", {
      body: {
        places: [
          {
            id: 2,
            title: "Mexican DBC",
            lastVisited: "2018-01-01",
            images: [
              {
                url:
                  "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
              },
            ],
            description: "Other home",
          },
        ],
      },
    });
    cy.visit("/");
  });
  it("adds a place", () => {
    cy.get(".add").click();
    cy.url().should("include", "places/new");

    cy.get("#title").type("Title");
    cy.get("#description").type("Description");
    cy.get("#last-visited").type("2010-06-10");

    cy.get(".image-url").should("have.length", 1);

    cy.get(".image-url").eq(0).type("https://picture.com/place.jpg");

    cy.get(".add-image").click();
    cy.get(".image-url").should("have.length", 2);

    cy.get(".image-url").eq(1).type("https://picture.com/other-place.jpg");

    cy.intercept("POST", "**/places", (req) => {
      expect(req.method).equals("POST");
      expect(req.body).deep.equals({
        title: "Title",
        description: "Description",
        lastVisited: "2010-06-10",
        images: [
          {
            url: "https://picture.com/place.jpg",
          },
          {
            url: "https://picture.com/other-place.jpg",
          },
        ],
      });
    });

    cy.get(".new-place-form").submit();

    cy.url().should("not.include", "new");

    cy.get(".place-listing").should("have.length", 2);
  });
});
