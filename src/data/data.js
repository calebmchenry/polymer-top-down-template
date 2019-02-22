let DATA = Window.DATA || {};

DATA.CHORES = [
  {
    dueDate: new Date(),
    assignee: 'Timy',
    rating: 5,
    title: 'Get Work Done',
    id: '123a',
    isComplete: false
  },
  {
    dueDate: new Date(),
    assignee: 'Jane',
    rating: 4,
    title: 'Clean Gutters',
    id: '478-333',
    isComplete: false
  },
  {
    dueDate: new Date(),
    assignee: 'Mark',
    rating: 2,
    title: 'Clean Bedroom',
    id: '89389-3',
    isComplete: false
  },
  {
    dueDate: new Date(),
    assignee: 'Jamie',
    rating: 3,
    title: 'Vacuum',
    id: '456k',
    isComplete: true
  }
];

DATA.PEOPLE = [
  {
    "_id": "5c6f28b901acea3fb8811c77",
    "index": 0,
    "guid": "fb2409ea-8e68-49a7-9a28-19ab0e6fe079",
    "isActive": false,
    "balance": "$3,673.73",
    "age": 27,
    "eyeColor": "green",
    "name": "Norris Summers",
    "company": "POLARAX",
    "email": "norrissummers@polarax.com",
    "phone": "+1 (918) 439-2024",
    "address": "413 Humboldt Street, Saticoy, Maine, 6069",
    "about": "Tempor proident sunt veniam duis enim pariatur. Officia nulla aute irure dolor culpa esse labore incididunt anim quis voluptate. Velit enim dolor nulla eiusmod proident officia aliquip anim officia amet veniam et. Nulla minim incididunt anim irure. Ad adipisicing occaecat in voluptate sit sunt esse reprehenderit Lorem incididunt laboris tempor ea. Ut aute elit amet voluptate velit eu laboris anim ex occaecat dolor officia sunt velit.\r\n",
    "registered": "2017-11-23T01:05:01 +05:00"
  },
  {
    "_id": "5c6f28b918cb465432b4c986",
    "index": 1,
    "guid": "0ccf18f7-0e3f-4b36-a6a0-62efc17d0ac4",
    "isActive": true,
    "balance": "$2,948.16",
    "age": 27,
    "eyeColor": "brown",
    "name": "Wolfe Odom",
    "company": "NEUROCELL",
    "email": "wolfeodom@neurocell.com",
    "phone": "+1 (955) 438-3164",
    "address": "541 Dekoven Court, Brutus, Florida, 5370",
    "about": "Dolore cupidatat in deserunt Lorem non fugiat qui officia culpa. Officia nostrud in ut veniam commodo id aute aute. Mollit incididunt ipsum quis culpa amet excepteur occaecat magna amet proident veniam. Cupidatat eiusmod commodo elit velit cillum deserunt cillum consequat exercitation cupidatat. Veniam amet laboris Lorem et. Deserunt mollit adipisicing aliquip ullamco do.\r\n",
    "registered": "2017-12-31T10:32:16 +05:00"
  },
  {
    "_id": "5c6f28b9b3db100e461d74e9",
    "index": 2,
    "guid": "903b6e1b-c425-4f05-9f75-43d30ed37921",
    "isActive": true,
    "balance": "$1,305.23",
    "age": 25,
    "eyeColor": "brown",
    "name": "Cash Holder",
    "company": "VOLAX",
    "email": "cashholder@volax.com",
    "phone": "+1 (955) 486-2553",
    "address": "787 Bush Street, Ahwahnee, Virgin Islands, 5211",
    "about": "Cillum eiusmod velit culpa culpa reprehenderit. Fugiat esse in deserunt veniam non irure non. Anim laboris dolore irure minim Lorem id occaecat dolore exercitation minim laborum. Dolor et aliqua reprehenderit amet nulla in mollit sint. Eiusmod mollit eiusmod nulla consequat laboris est incididunt duis velit labore do sunt. Laboris excepteur labore do consectetur aute tempor. Velit elit ullamco amet pariatur ex ullamco aute ullamco elit.\r\n",
    "registered": "2017-11-15T05:32:45 +05:00"
  },
  {
    "_id": "5c6f28b951a74167319753ca",
    "index": 3,
    "guid": "3353d1a5-5768-47e3-a739-88cd74e600e4",
    "isActive": false,
    "balance": "$2,225.37",
    "age": 31,
    "eyeColor": "blue",
    "name": "Sophia Barry",
    "company": "RECOGNIA",
    "email": "sophiabarry@recognia.com",
    "phone": "+1 (855) 453-3478",
    "address": "732 Bogart Street, Chilton, Wisconsin, 8169",
    "about": "Ipsum ullamco commodo incididunt anim quis enim tempor deserunt ea velit amet ex esse. Ipsum adipisicing cupidatat do cupidatat veniam reprehenderit dolore consectetur velit voluptate duis adipisicing ipsum eiusmod. Et irure fugiat mollit eiusmod esse dolore do.\r\n",
    "registered": "2018-09-02T09:19:07 +04:00"
  },
  {
    "_id": "5c6f28b98c677f8322fcccd3",
    "index": 4,
    "guid": "36a776d3-fff9-4a5f-bac2-65035eac5cd8",
    "isActive": false,
    "balance": "$2,893.54",
    "age": 33,
    "eyeColor": "green",
    "name": "Sofia Hardin",
    "company": "EXERTA",
    "email": "sofiahardin@exerta.com",
    "phone": "+1 (819) 552-3786",
    "address": "542 Channel Avenue, Crisman, Oklahoma, 5074",
    "about": "Adipisicing est veniam sit proident cillum officia aliquip sit. Est id aliquip voluptate qui laborum aliqua nisi reprehenderit sunt. Incididunt irure non do id commodo excepteur irure veniam deserunt. Nisi irure deserunt eu non amet laborum sunt. Cupidatat in magna voluptate non excepteur reprehenderit. Nulla aliqua sit magna elit irure exercitation laboris ut eiusmod commodo exercitation ex aliquip. Occaecat et laboris fugiat minim excepteur ut dolor quis nisi sunt ut.\r\n",
    "registered": "2018-03-07T05:13:41 +05:00"
  },
  {
    "_id": "5c6f28b94776a29ae3fb8ebe",
    "index": 5,
    "guid": "e61ab4d8-ba25-49a5-bcf2-e4eca9e4a007",
    "isActive": false,
    "balance": "$1,483.82",
    "age": 25,
    "eyeColor": "green",
    "name": "Mamie Velazquez",
    "company": "TRANSLINK",
    "email": "mamievelazquez@translink.com",
    "phone": "+1 (891) 420-3807",
    "address": "233 Furman Street, Caledonia, Northern Mariana Islands, 9944",
    "about": "Aliquip do aliqua est fugiat ullamco id nostrud. Sunt laboris sit anim in reprehenderit veniam in laboris ut qui tempor velit. Magna minim dolor nisi Lorem eu velit qui nisi in sunt adipisicing laboris in fugiat.\r\n",
    "registered": "2018-12-29T02:59:53 +05:00"
  },
  {
    "_id": "5c6f28b9af3fc18adc3b58ca",
    "index": 6,
    "guid": "eb78dd5a-6789-4ee7-b5ac-c708c95aa100",
    "isActive": false,
    "balance": "$1,572.00",
    "age": 32,
    "eyeColor": "blue",
    "name": "Blake Juarez",
    "company": "BARKARAMA",
    "email": "blakejuarez@barkarama.com",
    "phone": "+1 (908) 411-3456",
    "address": "722 Halleck Street, Jessie, Indiana, 6932",
    "about": "Nostrud labore aliqua esse pariatur quis velit minim excepteur et qui pariatur id. In reprehenderit incididunt eu deserunt Lorem deserunt anim sit. Excepteur ullamco do non duis ad anim sunt id sit magna quis ipsum nulla. Fugiat excepteur quis enim velit qui ut. Dolore nisi voluptate dolore consequat labore eiusmod eiusmod sunt amet commodo magna.\r\n",
    "registered": "2017-04-20T03:52:40 +04:00"
  }
]

Window.DATA = DATA;
