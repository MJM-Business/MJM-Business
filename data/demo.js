
window.MJM_DEMO = {
  users: [
    {id:"ceo",name:"CEO",role:"CEO",password:"1234",access:["*"]},
    {id:"finance",name:"Finance Manager",role:"Finance",password:"1234",access:["dashboard","records","payments","transfers","reports"]},
    {id:"transport",name:"Transport Manager",role:"Transportation",password:"1234",access:["dashboard","transportation","cargo","assets"]},
    {id:"hr",name:"HR Manager",role:"Human Resources",password:"1234",access:["dashboard","employees","contracts"]},
    {id:"operations",name:"Operations Manager",role:"Operations",password:"1234",access:["dashboard","records","cargo","travel","transportation"]},
    {id:"employee",name:"Employee",role:"Employee",password:"1234",access:["dashboard","records"]}
  ],
  records:[
    {id:"SRV-99281",customer:"Afaq Trading Co.",service:"Government Services",amount:3500,status:"Completed",date:"2026-09-13"},
    {id:"SRV-99280",customer:"Saad Faisal",service:"Residence Renewal",amount:1200,status:"Pending Payment",date:"2026-09-13"},
    {id:"SRV-99279",customer:"General Retirement Org.",service:"Municipality Follow-up",amount:2500,status:"Completed",date:"2026-09-13"},
    {id:"SRV-99278",customer:"Elite Logistics",service:"Business File Follow-up",amount:4800,status:"In Progress",date:"2026-09-12"}
  ],
  payments:[
    {id:"INV-10021",customer:"Afaq Trading Co.",amount:3500,method:"Bank Transfer",status:"Paid",date:"2026-09-13"},
    {id:"INV-10020",customer:"Saad Faisal",amount:1200,method:"Cash",status:"Pending",date:"2026-09-13"},
    {id:"INV-10019",customer:"Elite Logistics",amount:4800,method:"Bank Transfer",status:"Paid",date:"2026-09-12"}
  ],
  transfers:[
    {id:"TRF-7011",beneficiary:"Afaq Trading Co.",amount:3500,bank:"Al Rajhi",status:"Completed",date:"2026-09-13"},
    {id:"TRF-7010",beneficiary:"Elite Logistics",amount:4800,bank:"SNB",status:"Processing",date:"2026-09-12"}
  ],
  contracts:[
    {id:"CTR-9021",customer:"Al Azeem Real Estate",type:"Real Estate",start:"2026-01-15",end:"2027-01-14",amount:12500,status:"Active"},
    {id:"CTR-8843",customer:"International Transport",type:"Vehicles",start:"2026-02-01",end:"2026-10-31",amount:8200,status:"Expiring Soon"},
    {id:"CTR-6522",customer:"Ahl Commercial Est.",type:"Property",start:"2026-08-10",end:"2027-08-09",amount:9800,status:"Active"}
  ]
};
