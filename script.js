appDrop = document.getElementById('app-dropdown');
dropDownMenu = document.getElementById('dropdown-menu');

appDrop.style.display = "none";
dropDownMenu.addEventListener("click",()=>{
    if(appDrop.style.display == "none"){
        console.log("changed to block");
        appDrop.style.display='block';
    }else{
        console.log("changed to none");
        appDrop.style.display='none';
    }
})