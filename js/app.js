(() => {
  const data = [].slice.call(document.querySelectorAll('.student-item'));
  let dataFiltered = [];
  const input = document.getElementById('search');
  const page = 10; 
  
  search();
  input.addEventListener("keyup", search);

  function display(arr, numpage) {
    let len = arr.length;
    let students = [];
    let to = page * numpage;
    let from = (to > 10) ? to - page : 0;
    if (to > len) to = len;

    for(let ii = from; ii < to; ii++)
        students.push(arr[ii]);
    
    printlist(students);
  }

  function printlist(students) {
    let html = "";
    let list = document.querySelector('.student-list');
    students.forEach((student) => html += student.outerHTML);   
    list.innerHTML = "";
    list.innerHTML = html;
  }

  function pagination(len) {
    let li = "";
    let pages = Math.ceil(len/page)
    for(let ii = 1; ii <= pages; ii++)
       li += `<li><a href="#" data-page="${ii}">${ii}</a></li>`;

    document.querySelector('.pagination').innerHTML = `<ul>${li}</ul>`;
    document.querySelectorAll('.pagination a')[0].classList.add('active');
    bindLinks();
  }
    
  function bindLinks(){
    let links = document.querySelectorAll('.pagination a');  
    links.forEach((link) => {
      link.addEventListener('click',(e) => {
        links.forEach((link) => link.classList.remove('active'));      
        link.classList.add('active');
        display(dataFiltered, link.dataset.page);
        e.preventDefault();
      });
    });
  }

  function search(){
    let filter = input.value.toUpperCase();
    
    dataFiltered = data.filter((student) => {
      let h3 = student.getElementsByTagName("h3")[0];
      if (h3.innerHTML.toUpperCase().indexOf(filter) > -1)
        return student;
    });
    
    display(dataFiltered, 1)
    pagination(dataFiltered.length);
   }
})();

