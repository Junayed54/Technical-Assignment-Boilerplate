function profileShow(){
    profileId = document.getElementById("profileMenu")
    if (profileId.classList.contains("hidden")){
        profileId.classList.remove("hidden");
    }
    else profileId.classList.add("hidden");
}