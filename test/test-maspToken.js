const BigNumber = require('bignumber.js');
const MaspToken = artifacts.require('MaspToken');

const decimals = 18;
const INITIAL_SUPPLY = new BigNumber(102228579 * 10 ** decimals);

contract('MaspToken', async accounts => {
  const owner = accounts[0];
  let token;

  before(async function() {
    token = await MaspToken.deployed();
  });

  it('should return the correct totalSupply after construction', async () => {
    const totalSupply = await token.totalSupply();

    assert.equal(totalSupply.toString(16), INITIAL_SUPPLY.toString(16));
  });

  it("owner's balance should equal totalSupply", async () => {
    const ownerBalance = await token.balanceOf(owner);

    assert.equal(ownerBalance.toString(16), INITIAL_SUPPLY.toString(16));
  });

  it('transfer updates balance of counterparties', async () => {
    const transferResult = await token.transfer(accounts[1], 100);

    const ownerBalance = await token.balanceOf(owner);
    const account1Balance = await token.balanceOf(accounts[1]);

    assert.equal(
      ownerBalance.toString(16),
      INITIAL_SUPPLY.minus(100).toString(16),
    );
    assert.equal(parseInt(account1Balance, 10), 100);
  });
});
