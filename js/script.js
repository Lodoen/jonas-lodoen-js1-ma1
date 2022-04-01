const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1
const cat = {
    complain: function(){
        console.log("Meow!");
    }
};

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(
    paragraph => paragraph.style.color = "red"
);

//Question 6
const resultContainer = document.querySelector(".results");
resultContainer.innerHTML = "<p>New paragraph</p>";
resultContainer.style.backgroundColor = "yellow";

//Question 7
function logNames(list){
    for(let i = 0; i < list.length; i++){
        console.log(list[i].name);
    }
}

logNames(cats);

//Question 8
function createCats(cats){
    let html = "";
    
    cats.forEach(function(cat){
        let age = "Age unknown";
        if(cat.age){
            age = cat.age;
        }

        html += `
            <div>
                <h5>${cat.name}</h5>
                <p>${age}<p>
            </div>
        `;
    });

    return html;
}

const catList = createCats(cats);
document.querySelector(".cat-container").innerHTML = catList;