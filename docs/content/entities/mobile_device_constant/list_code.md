---
type: list_code
entity: MobileDeviceConstant
title: List MobileDeviceConstant
order: 3.1
---

```javascript
// Listing all the mobileDeviceConstants in the account
let result = await customer.mobileDeviceConstants.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.mobileDeviceConstants.list({
  constraints: [
    {
      key: 'mobile_device_constant.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'mobile_device_constant.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    mobile_device_constant: {
      resource_name: 'mobileDeviceConstants/610508',
      id: 610508,
      manufacturer_name: 'Microsoft',
      name: 'windows rt tablet',
      operating_system_name: 'Other/Unknown',
      type: 3,
    },
  },
]
```