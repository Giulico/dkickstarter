// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

contract Campaign {
  struct Request {
    string description;
    uint value;
    address payable recepient;
    bool isComplete;
    mapping(address => bool) approvers;
    uint approvalCount;
  }

  address public manager;
  uint public minimumContribution;
  string public title;
  string public description;
  uint public submissionDate;

  mapping(uint => Request) public requests;
  uint public requestCount = 0;

  mapping(address => bool) public funders;
  uint public fundersCount = 0;

  modifier restricted() {
    require(msg.sender == manager);
    _;
  }

  constructor(address creator, string memory _title, string memory _description, uint minimum) {
    manager = creator;
    title = _title;
    description = _description;
    minimumContribution = minimum;
    submissionDate = block.timestamp;
  }

  function contribute() public payable {
    // Check the amount of money
    require(msg.value > minimumContribution);

    funders[msg.sender] = true;
    fundersCount++;
  }

  function createRequest(string memory _description, uint value, address payable recepient) public restricted {
    Request storage newRequest = requests[requestCount];
    
    newRequest.description = _description;
    newRequest.value = value;
    newRequest.recepient = recepient;
    newRequest.isComplete = false;
    newRequest.approvalCount = 0;

    requestCount++;
  }

  function approveRequest(uint requestIndex) public {
    Request storage currentRequest = requests[requestIndex];

    // Only contributors address
    require(funders[msg.sender] && !currentRequest.approvers[msg.sender]);

    currentRequest.approvers[msg.sender] = true;
    currentRequest.approvalCount++;
  }

  function finalizeRequest(uint requestIndex) public payable restricted {
    Request storage currentRequest = requests[requestIndex];

    // This request is not already mark as complete && If there are enough approvers
    require(!currentRequest.isComplete && currentRequest.approvalCount > fundersCount / 2);

    // Transaction to recipent
    currentRequest.recepient.transfer(currentRequest.value);

    currentRequest.isComplete = true;
  }
}