pragma solidity ^0.4.20;

contract MyContract {
    string value;

    constructor() public {
        value = "myValue";
    }

    function get() public view returns(string memory){
        return value;
    }

    function set(string memory newValue) public {
        value = newValue;
    }
}