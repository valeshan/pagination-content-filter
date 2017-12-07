//function showPage(/* arguments here for page number and student list */) {
    // first hide all students on the page
    // Then loop through all students in our student list argument
       // if student should be on this page number
       	// show the student


const $stList = $(".student-list").children();


function showPage(pageNum, studentList){
  studentList.hide();
  for(let i=0; i<=pageNum; i++){
    if(i=pageNum){
    studentList.slice(`${[i-1]}0`, `${[i-1]}9`).show();
    }
  }
};

showPage(2, $stList);


function appendPageLinks(studentList){
  const numberOfPages = Math.ceil(studentList.length /10);
  $(".page").append($("<div class = 'pagination'><ul>"));
  for(let i = 1; i <= numberOfPages; i++){
    $(".pagination").append($("<li><a href='#'>"+[i]+"</a></li>"));
  }
  $(".pagination").append($("</ul></div>"));
}

appendPageLinks($stList);

$(".pagination a").click(()=>{
  const pageNum = $(this).innerHTML;
  console.log(pageNum);
});
