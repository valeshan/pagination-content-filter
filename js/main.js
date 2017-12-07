//select ul, and determine length
//show just first 10 of length
//create button

//function showPage(/* arguments here for page number and student list */) {
    // first hide all students on the page
    // Then loop through all students in our student list argument
       // if student should be on this page number
       	// show the student


const $stList = $(".student-list").children();


if($stList.length >10){
  $stList.hide();
  $stList.slice(1,10).show();
};


function appendPageLinks(studentList){
  const numberOfPages = Math.ceil(studentList.length /10);
  $(".page").append($("<div class = 'pagination'><ul>"));
  for(let i = 1; i <= numberOfPages; i++){
    $(".pagination").append($("<li><a href='#'>"+[i]+"</a></li>"));
  }
  $(".pagination").append($("</ul></div>"));
}

appendPageLinks($stList);


function showPage(pageNum, studentList){
  studentList.hide();
  for(let i=0; i<=pageNum; i++){
    studentList.slice(`${[i-1]}0`, `${[i-1]}9`).show()
  }
};
