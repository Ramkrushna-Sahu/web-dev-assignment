
document.addEventListener("DOMContentLoaded", function () {
    // Define an array of objects containing the information for each imgDiv
    const imgDivData = [
        {
            imgSrc: "./assets/img1.jpg",
            altText: "img1",
            mainText: [{ text: "Holistic", color: "white" }, { text: "Development", color: "rgb(255, 58, 124)" }],
            subText: "Right Mix of Curricular and Co-Curricular Activities."
        },
        {
            imgSrc: "./assets/img2.jpg",
            altText: "img1",
            mainText: [{ text: "Proven", color: "rgb(255, 58, 124)" }, { text: "and", color: "white" }, { text: "Tested", color: "rgb(255, 58, 124)" }, { text: "Centralized Curriculum", color: "white" }],
            subText: "CBSE school with balanced traditional & contemporary curriculum to foster growth in all its students."
        },
        {
            imgSrc: "./assets/img3.jpg",
            altText: "img1",
            mainText: [{ text: "Innovative", color: "rgb(255, 58, 124)" }, { text: "and", color: "white" }, { text: "Challenging", color: "rgb(255, 58, 124)" }, { text: "Centralized Curriculum", color: "white" }],
            subText: "Facilitate excellence through critical thinking and profound learning."
        },
        {
            imgSrc: "./assets/img1.jpg",
            altText: "img1",
            mainText: [{text:'Faculty', color:'rgb(255, 58, 124)'},{text:"Enhancement Program", color:"white"}],
            subText: "Regular teacher training and curriculum workshops"
        }

    ];

    // Get the container element
    const container = document.getElementById('container');
    const first = document.getElementById('first');
    // Loop through the imgDivData array and create the HTML structure dynamically
    imgDivData.forEach(data => {
        // Create elements for imgDiv, img, imgText, and subdiv
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('imgDiv');
        imgDiv.style.display = 'flex'; // Add display flex

        const img = document.createElement('img');
        img.src = data.imgSrc;
        img.alt = data.altText;
        img.classList.add('img');

        const imgText = document.createElement('div');
        imgText.classList.add('imgText');
        imgText.style.flex = '1'; // Add flex 1

        // Create parent <p> element for main text
        const mainText = document.createElement('p');
        mainText.classList.add('mainText');

        // Loop through each word in the main text and create <span> elements with respective colors
        data.mainText.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word.text;
            span.style.color = word.color; // Set color for each word
            mainText.appendChild(span);
            mainText.appendChild(document.createTextNode(' ')); // Add space between words
        });
        imgText.appendChild(mainText);

        const subdiv = document.createElement('div');
        subdiv.classList.add('subdiv');
        subdiv.style.flex = '1'; // Add flex 1
        subdiv.innerHTML = `
            <p class="title">${data.mainText.map(word => word.text).join(' ')}</p>
            <p class="description">${data.subText}</p>
        `;

        // Append img, imgText, and subdiv to imgDiv
        imgDiv.appendChild(img);
        imgDiv.appendChild(imgText);
        imgDiv.appendChild(subdiv);

        first.appendChild(imgDiv)
        container.appendChild(first);
    });
});
