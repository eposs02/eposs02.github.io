const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["img/pic1.JPG", 
                "img/pic2.JPG", 
                "img/pic3.JPG", 
                "img/pic4.JPG", 
                "img/pic5.JPG"]


/* Declaring the alternative text for each image file */
const altText = {
    "image1": "Alley", 
    "image2": "Deer",
    "image3": "Mountains",
    "image4": "Sidewalk",
    "image5": "Backyard",
}
console.log(altText["image4"])

/* Looping through images */
// other option for the loop:  for (let i = 0; i < images.length; i++){}
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image' + (i + 1)]);
    thumbBar.appendChild(newImage);

    function displayImage() {
        displayedImage.setAttribute('src', images[i]);
        displayedImage.setAttribute('alt', altText['image' + (i + 1)]);
    }

    newImage.addEventListener("click", displayImage);
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=> {
    if (btn.getAttribute("class") == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        return

    }
    else if (btn.getAttribute("class") == "light") {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        return

    }
}
)





