import Piece from "@/components/Piece.vue";
import { GamePiece } from "@/models/Piece";
import { shallowMount } from "@vue/test-utils";

describe("Piece.vue", () => {
  it("renders the piece", () => {
    const pieceName = 'K';
    const piece: GamePiece = {
      color: 'black', name: pieceName, index: 0
    };

    const wrapper = shallowMount(Piece, {
      propsData: { piece }
    });

    expect(wrapper.text()).toContain(pieceName)
  });

  it('renders null when there is no piece', () => {
    const wrapper = shallowMount(Piece);

    expect(wrapper.text()).toEqual("");
  });
});
