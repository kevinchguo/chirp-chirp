describe("The Letter Counter", function() {
  it(`should have 26 a's`, function() {
    expect(counter["a"]).toBe(29);
  });

  it(`should have 3 b's`, function() {
    expect(counter["b"]).toBe(3);
  });

  it(`should have 16 c's`, function() {
    expect(counter["c"]).toBe(16);
  });

  it(`should have 19 d's`, function() {
    expect(counter["d"]).toBe(19);
  });

  it(`should have 38 e's`, function() {
    expect(counter["e"]).toBe(38);
  });

  it(`should have 3 f's`, function() {
    expect(counter["f"]).toBe(3);
  });

  it(`should have 3 g's`, function() {
    expect(counter["g"]).toBe(3);
  });

  it(`should have 1 h's`, function() {
    expect(counter["h"]).toBe(1);
  });

  it(`should have 43 i's`, function() {
    expect(counter["i"]).toBe(43);
  });

  it(`should have 0 j's`, function() {
    expect(counter["j"]).toBe(0);
  });

  it(`should have 0 k's`, function() {
    expect(counter["k"]).toBe(0);
  });

  it(`should have 22 l's`, function() {
    expect(counter["l"]).toBe(22);
  });

  it(`should have 17 m's`, function() {
    expect(counter["m"]).toBe(17);
  });

  it(`should have 24 n's`, function() {
    expect(counter["n"]).toBe(24);
  });

  it(`should have 29 o's`, function() {
    expect(counter["o"]).toBe(29);
  });

  it(`should have 11 p's`, function() {
    expect(counter["p"]).toBe(11);
  });

  it(`should have 5 q's`, function() {
    expect(counter["q"]).toBe(5);
  });

  it(`should have 22 r's`, function() {
    expect(counter["r"]).toBe(22);
  });

  it(`should have 18 s's`, function() {
    expect(counter["s"]).toBe(18);
  });

  it(`should have 32 t's`, function() {
    expect(counter["t"]).toBe(32);
  });

  it(`should have 29 u's`, function() {
    expect(counter["u"]).toBe(29);
  });

  it(`should have 3 v's`, function() {
    expect(counter["v"]).toBe(3);
  });

  it(`should have 0 w's`, function() {
    expect(counter["w"]).toBe(0);
  });

  it(`should have 3 x's`, function() {
    expect(counter["x"]).toBe(3);
  });

  it(`should have 0 y's`, function() {
    expect(counter["y"]).toBe(0);
  });

  it(`should have 0 z's`, function() {
    expect(counter["z"]).toBe(0);
  });

  it(`should have 26 keys in total`, function() {
    expect(Object.keys(counter).length).toBe(26);
  });
});
