fetch('https://harf.roshan-ai.ir/api/requests/', {
  headers: {
    'Authorization': 'Token a85d08400c622b50b18b61e239b9903645297196'
  }
})
.then(async res => {
  const text = await res.text();
  console.log(text);             
})
.catch(err => console.error(err));