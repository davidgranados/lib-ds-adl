const chai = require("chai");
const lib = require("../src/lib.js");

const { expect } = chai;

chai.use(require("chai-string"));

describe("Tests index", () => {
  it("verifies successful sayCpuReport", async () => {
    const result = await lib.sayCpuReport();
    expect(result).to.be.an("string");
  });

  it("verifies successful sayInterval", async () => {
    const result = await lib.sayInterval();
    expect(result).to.be.an("string");
  });
});
