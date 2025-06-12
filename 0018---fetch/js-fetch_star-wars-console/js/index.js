console.clear();
// fetch r2d2 eye color

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    const data = await (await fetch(url)).json()
    const r2d2 = (await data.results.filter(object => object.name === "R2-D2"));
    console.table('r2-d2 eye color is', r2d2[0].eye_color);
    
    
}

fetchData();
