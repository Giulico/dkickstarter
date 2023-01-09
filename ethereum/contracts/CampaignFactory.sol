// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

import "./Campaign.sol";

contract CampaignFactory {
  address[] public deployedCampaigns;

  function createCampaign(
    string memory title,
    string memory description,
    uint minimum
  ) public {
    // Deploy new Campaign
    address newCampaignAddress = address(new Campaign(msg.sender, title, description, minimum));
    deployedCampaigns.push(newCampaignAddress);
  }

  function getDeployedCampaigns() public view returns (address[] memory) {
    return deployedCampaigns;
  }
}