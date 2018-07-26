
export const bankCardrouters = [
    //管理
    {
        path: '/bankCard/bankCard',
        name: 'bankCard',
        component: resolve => require(['pages/system-management/bank-card/bankCard'], resolve),
    },
    {
        path: '/bankCard/thirdPartyPayment',
        name: 'thirdPartyPayment',
        component: resolve => require(['pages/system-management/bank-card/thirdPartyPayment'], resolve),
    }
]