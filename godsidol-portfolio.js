var menuItems = document.querySelectorAll("#grid-center-menu a");

for(var i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener("mouseover", function(){
        // add the class styling
        var menuItem = this;
        menuItem.classList.add("hovered-menu-item");
    });
    menuItems[i].addEventListener("mouseout", function(){
        // remove the class styling
        var menuItem = this;
        menuItem.classList.remove("hovered-menu-item");
    });

    menuItems[i].addEventListener("mousedown", function(){
        // item gets scaled slightly smaller
        // stroke enlarged
        var menuItem = this;
        menuItem.classList.add("clicked-menu-item");
    });

    menuItems[i].addEventListener("mouseup", function(){
        // item goes back to regular scale
        // stroke returns to normal
        var menuItem = this;
        menuItem.classList.remove("clicked-menu-item");
    });
}