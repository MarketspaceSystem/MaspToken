pragma solidity 0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";


contract MaspToken is StandardToken {
    string public name = "MaspToken";
    string public symbol = "MASP";
    uint public decimals = 18;
    uint public constant INITIAL_SUPPLY = 102228579 * (10 ** uint256(decimals));

    address private owner;

    constructor() public {
        owner = msg.sender;
        totalSupply_ = INITIAL_SUPPLY;
        balances[owner] = INITIAL_SUPPLY;
    }
}
