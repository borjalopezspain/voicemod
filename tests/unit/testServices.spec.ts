import { IVoiceItem } from "@/models";
import VoiceService from "@/services/implementations/VoicesService";

const mockList: IVoiceItem[] = [
  {
    id: "1",
    name: "1x2",
    icon: "icon.svg",
    tags: ["tag1"],
  },
];

describe("test Services", () => {
  it("has getVoicesList in VoicesService", async () => {
    const service = new VoiceService();

    service.getVoicesList = jest.fn().mockResolvedValue(mockList);

    const result = await service.getVoicesList();

    expect(result).toBe(mockList);
  });
});
