import { mount } from "@vue/test-utils";
import PlaceDetails from "@/components/PlaceDetails.vue";

describe("PlaceDetails.vue", () => {
  it("renders given props", () => {
    const props = {
      title: "Title",
      description: "Description",
      lastVisited: "2019-02-14",
      images: [
        {
          url:
            "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
        },
        {
          url:
            "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
        },
      ],
    };
    const wrapper = mount(PlaceDetails, { props });

    expect(wrapper.find(".title").text()).toMatch("Title");
    expect(wrapper.find(".description").text()).toMatch("Description");
    expect(wrapper.find(".last-visited").text()).toMatch("February, 2019");
    expect(wrapper.findAll(".image-tile").length).toBe(2);
  });
});
