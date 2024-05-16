function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}
 
const container = document.getElementsByClassName('modalContainer')[0] 
// console.log(document.getElementsByClassName('modalContainer'))
addEvent(document, 'mouseout', function(evt) {
    if (evt.toElement == null && evt.relatedTarget == null) {
        container.style.display = 'block'
    };
});

const anchor = document.getElementsByClassName('close')[0]
anchor.addEventListener('click', () => {
    container.style.display = 'none'
})
