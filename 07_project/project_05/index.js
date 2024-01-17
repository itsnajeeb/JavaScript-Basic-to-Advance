let insert = document.querySelector('.insert')
console.log(insert);
document.addEventListener('keydown', (e) => {
    // alert('hello')
    // alert(insert.innerHTML = e.keyCode)
    insert.innerHTML = `
    <table border='1' width=100% style="text-align:center">
    <tr>
        <th>Key</th>
        <th>Key Code</th>
        <th>Key Name</th>
    </tr>
  <tr>
    <td>${e.key ==" "? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table> `
})