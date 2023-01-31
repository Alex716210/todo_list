 function loadPage(name) {

     const list = getList(name);

     localStorage.setItem('pageName', name)
     document.getElementById('title').textContent = name;

     showList(list);
         
     createPagination(list, document.getElementById('pagination'), rows);
 }