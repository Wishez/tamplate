$(window).resize(() => {
  let $navList = $('#navList'),
      navListStyle = $navList[0].style;
  
  if (window.innerWidth > 767) 
    navListStyle.display = 'inline-flex';
  else  
    navListStyle.display = 'none';
});


$(document).on('click', '.not-follow', openUrlInNewWindow);

function openUrlInNewWindow(e) {
  e.preventDefault();
  
  let $target = $(e.target);
  
  $target = $target[0].tagName === 'A' ? $target : $target.parent();
    
  let url = $target.prop('href');
  
  console.log(url, e.target);
  window.open(url);
}