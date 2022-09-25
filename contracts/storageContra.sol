// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;
contract storageContra{
    uint data;
    function updateData(uint _data) external {
        data = _data;
    }
    function readData() external view returns(uint){
        return data;
    }
}