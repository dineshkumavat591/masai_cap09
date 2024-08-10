


let isAuth = localStorage.getItem("isAuth")  || "Not Authenticated";

if(isAuth !== "Authenticated"){
    window.Location.href="./login.html";
};


