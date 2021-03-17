//json Object data => Java Script object notation
// it holds data in key & value pair
var obj = {
    fname: 'Sumit',
    "lname": "Raokhande",
    id: 2
};
// console.log(`
//     First Name :: ${obj.fname}
//     Last Name  :: ${obj.lname}
//     ID         :: ${obj.id}
//  `);
var obj1 = {
    fname: 'Sumit',
    lname: 'Raokhande',
    id: 2,
    address: {
        area: 'Ambegaon',
        city: 'pune',
        state: 'MH'
    }
};
// console.log(`
//     First Name :: ${obj1.fname}
//     Last Name  :: ${obj1.lname}
//     ID         :: ${obj1.id}
//     ----------Address------
//     Area :: ${obj1.address.area}
//     City :: ${obj1.address.city}
//     State:: ${obj1.address.state}
//  `);
//Array of Object(json)
var arrobj = [
    {
        fname: 'Sumit',
        lname: "Raokhande",
        id: 2,
        marks: [40, 55, 66],
        address: {
            area: 'Ambegaon',
            city: 'pune',
            state: 'MH'
        },
        data: [
            {
                month: 'Jan'
            },
            {
                month: 'Feb'
            },
            {
                month: 'March'
            }
        ]
    },
    {
        fname: 'Kiran',
        lname: "Raokhande",
        id: 3,
        marks: [45, 85, 56],
        address: {
            area: 'Ambegaon',
            city: 'pune',
            state: 'MH'
        },
        data: [
            {
                month: 'Jan'
            },
            {
                month: 'Feb'
            },
            {
                month: 'March'
            }
        ]
    },
    {
        fname: 'Spruha',
        lname: "Raokhande",
        id: 4,
        marks: [45, 57, 76],
        address: {
            area: 'Ambegaon',
            city: 'pune',
            state: 'MH'
        },
        data: [
            {
                month: 'Jan'
            },
            {
                month: 'Feb'
            },
            {
                month: 'March'
            }
        ]
    }
];
// console.log(`
// ----------------------------------
//     First Name :: ${arrobj[1].fname}
//     Last Name  :: ${arrobj[1].lname}
//     ID         :: ${arrobj[1].id}
//     1st Index Data :: ${arrobj[1]}
// `);
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n----------------------------------\n    First Name :: " + arrobj[i].fname + "\n    Last Name  :: " + arrobj[i].lname + "\n    ID         :: " + arrobj[i].id + "\n    Marks      :: " + arrobj[i].marks + "\n    ----------Address-----------\n    Area    :: " + arrobj[i].address.area + "\n    City    :: " + arrobj[i].address.city + "\n    State   :: " + arrobj[i].address.state + "\n   \n");
    for (var j = 0; j < arrobj[i].data.length; j++) {
        console.log("\n    ---------Month-----------------\n        Month   :: " + arrobj[i].data[j].month + "\n    ");
    }
}
