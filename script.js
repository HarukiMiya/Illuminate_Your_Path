function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
} 
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

//var startElement = document.getElementsById('ds'),
//  endElement = document.getElementsById('emd');
//
//// New leader line has red color and size 8.
//new LeaderLine(startElement, endElement, {color: 'red', size: 8});
  

//function myHandler(e){
//    e = e || event;
//    var el = e.srcElement || e.target;
//    // no action for #B
//    if (el.id && /b/i.test(el.id)){ return true; }
//    alert(el.id || 'no id found');
//}
//// handler assignment (note: inline handler removed from html)
//document.querySelector('#A').onclick = myHandler;

