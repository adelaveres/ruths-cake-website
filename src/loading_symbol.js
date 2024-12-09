window.addEventListener('load',()=>{
    const spinner = document.getElementById("loading-symbol");
    spinner.style.opacity = "0";
    setTimeout(() => spinner.style.display = "none", 500); // Wait for fade-out
    document.getElementById("page-content").style.display="block";
});