//++++++++++++++++++++++++++++++++++Date methods+++++++++++++++++++++++++++++++++


  //++++get++++
  const d = new Date()
  console.log(d)
  console.log(d.getDate())
  console.log(d.getDay())
  console.log(d.getFullYear())
  console.log(d.getHours())
  console.log(d.getMilliseconds())
  console.log(d.getMinutes())
  console.log(d.getMonth())
  console.log(d.getSeconds())
  console.log(d.getTime())
  console.log(d.getTimezoneOffset())
  console.log(d.getUTCDate())


  //++++set++++
  d.setDate(25)
  console.log(d)
  d.setFullYear(2002)
  console.log(d)
  d.setHours(23)
  console.log(d)
  d.setMinutes(35)
  console.log(d)
  d.setSeconds(99)
  console.log(d)
  d.setTime(3)
  console.log(d)