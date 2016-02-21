var navbar = document.getElementById('bs-navbar');
var activeContainer;
showContainer(window.location.hash.substring(1) || 'description');
navbar.querySelector('a[href="' + (window.location.hash || '#description') + '"]').parentNode.classList.add('active');

navbar.addEventListener('click', function(e) {
    var target = e.target;
    
    if (target && target.tagName === 'A') {
        e.preventDefault();
        var listItem = target.parentNode;

        if (!listItem.classList.contains('active')) {
            for (var i = 0; i < listItem.parentNode.children.length; i++) {
                listItem.parentNode.children[i].classList.remove('active');
            }
            listItem.classList.add('active');
            showContainer(target.hash.substring(1));
            if(history.pushState) {
                history.pushState(null, null, target.hash);
            }
            else {
                location.hash = target.hash;
            }
        }       
        
        
        
    }
});

function showContainer(id) {
    if (activeContainer) hideContainer();
    activeContainer = document.getElementById(id);
    console.log(id);
    activeContainer.classList.add('active');
}

function hideContainer() {
    activeContainer.classList.remove('active');
    activeContainer = undefined;
}