import { shallowMount } from "@vue/test-utils";
import PlaceListing from "@/components/PlaceListing.vue";

describe("PlaceListing.vue", () => {
  it("renders given props", () => {
    const props = {
      title: "Title",
      imageUrl:
        "https://cdn.vox-cdn.com/thumbor/u1qB-aTPA5Fot_EcCD4QaVNoRhc=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10728787/JTP_8542.jpg",
    };
    const wrapper = shallowMount(PlaceListing, { props });

    expect(wrapper.find(".title").text()).toMatch(props.title);
    // Inline styles can't be detected
  });
});
