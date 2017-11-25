(() => {
  const students = document.querySelectorAll('.student-item');
  const len = students.length;
  const page = 10;
  const numOfLinks = Math.ceil(len/page);
  let i;
  
  function loadPage(){
    for(i = 0; i < page; i++)
      students[i].style.display = 'block';
  }
  
  function initPagination(){
    let links = "";
    for(i = 1; i < numOfLinks; i++)
    links += `<li><a href="#">${i}</a></li>`;
  
    document.querySelector('.pagination').innerHTML = `<ul>${links}</ul>`;
    document.querySelectorAll('.pagination li a')[0].classList.add('active'); 
  }


  loadPage();
  initPagination();

})();

