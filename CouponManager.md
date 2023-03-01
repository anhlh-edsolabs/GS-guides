# Coupon manager functions

### I. Access Control
1. Owner role functions
    - Can assign super admin
    - Inherit all super admin and admin functions
---    
2. Super Admin role functions
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
    - `Get campaigns by status`: `=>[Campaign]`
        - Status: `bool` (Active / Inactive)
    - `Get coupon batches by status`: `=>[CouponBatchID]`
        - Status: `bool`
    - `Get coupon batch details`: `=>[Claimed coupon],[Unclaimed coupon]`
        - CouponBatch Id: `int`
    - `Set whitelisted currencies`: ?
        - Campaign Id: `int`
        - Currencies: `[address]`
        - Mint price: `[int]`


3. Admin functions
    - `Create coupon batch`:
        - Campaign Id: `int`
        - Coupon Batch: `[CouponCode]`
        - Multi-usage: `bool`
        - Discount: `int` (percentage; 0 - 100%)
        - Affiliate address: `[address]`
        - Start delay: `timestamp` ?
        - Expiry: `timestamp`
    - `Get coupon batches by expiry status`: `=>[CouponBachID]`
