/**** const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector(".dark");

const imageFilenames = [
    "pexels-francesco-ungaro-1525041.jpg",
    "pexels-quang-nguyen-vinh-222549-2162442.jpg",
    "pexels-quang-nguyen-vinh-222549-2145820.jpg",
    "pexels-daejeung-2734421.jpg" ,
    "pexels-jplenio-1435075.jpg"
  ];
  

**
    // Loop through the filenames array
    imageFilenames.forEach(filename => {
      // Create a new <img> element
      const img = document.createElement('img');
      // Set the src attribute to the image filename
      img.src = filename;
      // Optionally, add an alt attribute for accessibility
      img.alt = `Thumbnail of ${filename}`;
      // Append the <img> element to the thumb-bar <div>
      thumbBar.appendChild(img);

      img.addEventListener('click', event => {
        // Set the displayed-img src and alt to match the clicked thumbnail
        displayedImg.src = filename;
        displayedImg.alt = `Displaying ${filename}`;});

        btn.addEventListener("click", event=>{
            overlay.style.backgroundColor = tomato;
        })
    
    });

/*** source code **/ 
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Declaring the array of image filenames */
const imageFilenames = [
  "pexels-francesco-ungaro-1525041.jpg",
  "pexels-quang-nguyen-vinh-222549-2162442.jpg",
  "pexels-quang-nguyen-vinh-222549-2145820.jpg",
  "pexels-daejeung-2734421.jpg",
  "pexels-maxfrancis-2246476.jpg",
];
/* Declaring the alternative text for each image file */
const altImgName = [
  "francesco-ungaro",
  "quang nguyen vinh",
  "quang-nguyen vinh",
  "daejeung" ,
  "jplenio"
];
/* Looping through images */
imageFilenames.forEach(imageFilenames => {
const newImage = document.createElement('img');
newImage.setAttribute('src', imageFilenames);
newImage.setAttribute('alt', altImgName);
thumbBar.appendChild(newImage);


newImage.addEventListener('click', event => {
  displayedImage.src = imageFilenames;
  displayedImage.alt = altImgName;
  });
  
  /* Wiring up the Darken/Lighten button */
  btn.addEventListener("click", event=>{
    if (btn.getAttribute("class") === "dark") {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
      btn.style.backgroundColor = 'white';
      btn.style.backgroundColor = 'black';
    }

    else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
      btn.style.backgroundColor = 'grey';
    }
  })

});
