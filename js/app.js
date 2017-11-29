(() => {
  const students = document.querySelectorAll('.student-item');
  const len = students.length;
  const page = 10, pages = Math.ceil(len/page);
  
  showStudents();
  paginator();
  
  let links = document.querySelectorAll('.pagination a');  
  links.forEach((link) => {
    link.addEventListener('click',(e) => {
      links.forEach((link) => link.classList.remove('active'));      
      link.classList.add('active');
      students.forEach((student) => student.style.display = "" )
      showStudents(link.dataset.page);
      e.preventDefault();
    });
  });

  function showStudents(to = 1) {
    let ii = 0;
    to = page * to;
    if (to > 10) ii = to - page;
    if (to > len) to = len;

    for(; ii < to; ii++)
      students[ii].style.display = 'block';
  }

  function paginator() {
    let li = "";
    for(let ii = 1; ii <= pages; ii++)
       li += `<li><a href="#" data-page="${ii}">${ii}</a></li>`;

    document.querySelector('.pagination').innerHTML = `<ul>${li}</ul>`;
    document.querySelectorAll('.pagination a')[0].classList.add('active'); 
  }
  
})();

