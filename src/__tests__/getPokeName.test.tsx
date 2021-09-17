import { FARZANEH_POKE_NAME, PIKACHU } from "../components/constants";
import { getPokeName } from "../components/util";


describe("getPokeName() function", () => {
  test("should return the correct pokemon name string", async () => {
    const pokeName = getPokeName(FARZANEH_POKE_NAME)
    
    expect(pokeName).toBe(PIKACHU)
  })
});




