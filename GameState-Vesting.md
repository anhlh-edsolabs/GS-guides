# GameState Vesting guide

#### I. Functions overview:
1. `setERC20Token(address erc20Contract)`
    - Set an ERC20 contract address as the vesting token
    - Restriction: **Owner**

2. `setSecondsOfDay(uint256 secondsOfDay_)
    - Set the length of day in seconds. This function is only for testing purpose.
    - Restriction: **Owner**

3. `setOperator(address operator, bool isOperator_)`
    - Set an address as the contract operator
    - An operator can be any EOA (wallet) or contract address
    - Restriction: **Owner**

4. `setEmergencyWallet(address _emergencyWallet)`
    - Set an address as the Emergency wallet that will receive the tokens in case of Emergency withdrawal.
    - Emergency wallet can be an EOA or a multisig wallet that GameState controls.
    - Restriction: **Owner**

5. `setUpgradeWallet(address wallet)`
    - Give an address the Upgrade role for upgrading contract
    - Restriction: **Owner**

6. `addScheme(string memory schemeName, uint256 vestingDuration, uint256 vestingFrequency, SchemeType schemeType)
    - Create a vesting scheme with the following parameters:
      -  `schemeName`: Name of the vesting scheme
      -  `vestingDuration`: The duration of the vesting scheme in days, ie. 360
      -  `vestingFrequency`: The claim interval in days. For daily linear vesting, the input value is `1`
      -  `schemeType`: There are 2 types of scheme: **Investor** and **Team member**. Set schemeType = `0` for vesting scheme that applies to Investor, and schemeType = `1` for Team member
    - Restriction: **Operator**

7. `getScheme(uint256 schemeId)`
    - Query the information of a scheme specified by the given `schemeId`
    - Restriction: none

8. `addSubscription(uint256 schemeId, address wallet, uint256 cliffTime, uint256 depositAmount)
    - Subscribe a user (wallet) to a vesting scheme with the following input:
      -  `schemeId`: The id of an existing vesting scheme
      -  `wallet`: The subscriber's wallet for receiving tokens on each claim.
      -  `cliffTime`: The cliff duration of this subscription in days, ie. 90
      -  `depositAmount`: The initial amount of tokens deposited to this particular subscription.
    - Restriction: **Operator**

9. `getSubscription(uint256 subscriptionId)`
    - Query the information of a subscription specified by the given `subscriptionId`
    - Restriction: none

10. 
