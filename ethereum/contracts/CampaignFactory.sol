// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

import "./Campaign.sol";

contract CampaignFactory {
  struct DeployedCampaigns {
    string title;
    uint submissionDate;
    address link;
  }
  mapping (uint => DeployedCampaigns) deployedCampaigns;
  uint private campaignCount = 0;

  function createCampaign(
    string memory title,
    string memory description,
    uint minimum
  ) public {
    // Deploy new Campaign
    address newCampaignAddress = address(new Campaign(msg.sender, title, description, minimum));

    DeployedCampaigns storage newCampaign = deployedCampaigns[campaignCount];

    newCampaign.title = title;
    newCampaign.submissionDate = block.timestamp;
    newCampaign.link = newCampaignAddress;

    campaignCount++;
  }

  function getDeployedCampaigns() public view returns (DeployedCampaigns[] memory) {
    DeployedCampaigns[] memory campaigns = new DeployedCampaigns[](campaignCount);

    for (uint i = 0; i < campaignCount; i++) {
      campaigns[i] = deployedCampaigns[i];
    }

    return campaigns;
  }
}