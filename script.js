document.addEventListener("DOMContentLoaded", function () {
    // Navigation entre les pages
    const goBackBtn = document.getElementById("goBack");
    if (goBackBtn) {
        goBackBtn.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
    });
    const goToCV = document.getElementById("goToCV");
    if (goToCV) {
        goToCV.addEventListener("click", function () {
            window.location.href = "cv.html";
        });
    }
// Animation des barres de compétence
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress").forEach((bar) => {
        bar.style.width = bar.classList.contains("html") ? "90%" :
                          bar.classList.contains("laravel") ? "75%" :
                          bar.classList.contains("java") ? "60%" : "0%";
    });
});

// Changer la couleur du CV
function changeColor(color){
    document.documentElement.style.setProperty('--bgcl', color);
}

// Télécharger en PDF (simulation)
document.getElementById("downloadBtn").addEventListener("click", () => {
    document.getElementById('hide').style.display = 'none';
    var element = document.getElementById('cv');
    var opt = {
    margin: 1,
    filename:     'mon_cv.pdf',
    image:        { type: 'png', quality: 0.98 },
    html2canvas:  { 
        scale: 2 ,
        scrollY:0,
        useCORS:true
    },
    jsPDF:{ unit: 'px', format: [595,850], orientation: 'portrait' }
    };
    
    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
});