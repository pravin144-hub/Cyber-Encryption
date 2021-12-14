function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
$(document).ready(function() {
    $('#upload-file').change(function() {
        var filename = $(this).val();
        $('#file-upload-name').html(filename);
        if (filename != "") {
            setTimeout(function() {
                $('.upload-wrapper').addClass("uploaded");
            }, 600);
            setTimeout(function() {
                $('.upload-wrapper').removeClass("uploaded");
                $('.upload-wrapper').addClass("success");
            }, 1600);
        }
    });
});
$(document).ready(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {
            //clearHeader
            $(".header").addClass("bg-dark");
        } else {
            $(".header").removeClass("bg-dark");
        }
    });
});

function relocate_home() {

    location.href = "cyber.html";

}