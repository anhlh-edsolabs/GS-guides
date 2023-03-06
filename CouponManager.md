# Coupon manager functions

### I. Main functions
1. Owner role functions
    - `Assign user`:
        - User address: `address`
        - Role: `Role[Admin, Operator]`
    - Inherit all super admin and admin functions
---    
2. Admin role functions
    - `Create Campaign`:
        - Campaign name: `string`
        - Whitelisted NFT collections: `[address]`
        - Affiliate Sale commission: `int` (5%)
        - Royalties commission:`int` (percentage of royalty, example: 10% of 7% royalty -> 0.7%)
        - Campaign status: `bool`
    - `Assign/Unassign Campaign Admin`:
        - Campaign Id: `int`
        - Admin wallet addresses: `[address]`
        - Active status: `bool`
    - `Expire coupon batch`:
        - Batch Id: `int`
    - `Set campaign status`:
        - Campaign Id: `int`
        - Status: `bool`
    - `Set whitelisted currencies`: ?
        - Campaign Id: `int`
        - Currencies: `[address]`
        - Mint price: `[int]`
    - Inherit all Operator functions

3. Operator functions
    - `Create coupon batch`:
        - Campaign Id: `int`
        - Coupon Batch: `[Hashed_CouponCode]`
        - Multi-usage: `bool`
        - Discount: `int` (percentage; 0 - 100%)
        - Affiliate address: `[address]`
        - Start delay: `timestamp` ?
        - Expiry: `timestamp`
        - Batch status: `bool`
    - `Update coupon batch`:
    - `Get coupon batches by expiry status`: `=>[CouponBachID]`


4. Public functions
    - `BuyNFT`:
        - NFT collection: `address`
        - Currencies: `address`
        - Coupon code: `couponCode`

5. Utility functions
    - `Get campaigns by status`: `=>[Campaign]`
        - Status: `bool` (Active / Inactive)
    - `Get coupon batches by status`: `=>[CouponBatchID]`
        - Status: `bool`
    - `Get coupon batch details`: `=>[Claimed coupon],[Unclaimed coupon]`
        - CouponBatch Id: `int`
    - `Verify coupon code`: `=>bool`
        - CouponCode: `string`
    - `Check coupon code previous usages`: `=>bool`
        - CouponCode: `string`
    - `Calculate payment`: `=>int`
        - Currency: `address`
        - Discount: `int`
        - Commission: `int`
        

### II. Suggestions of coupon batch encryption
1. Solution:

2. Requirement:
    