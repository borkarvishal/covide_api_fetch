let searchInput = document.getElementById('search');
let templete = document.getElementById('templete');
searchInput.addEventListener('keyup',e =>{
 if(e.key==='Enter'){
 let searchText = e.target.value;
 searchGitUser(searchText);
 }
})


async function searchGitUser(searchValue){
 let URL = 'https://api.covid19api.com/country';
 // let URL = 'https://api.covidtracking.com/v1/states/current.json';
 let DATA = await window.fetch(`${URL}/${searchValue}`);
 let JSON = await DATA.json();
 console.log(   JSON.length      );
 let {Date,Country,Confirmed,Deaths,Active} = JSON[635];
 // let {date,state,positive} = JSON;

templete.innerHTML =`
<main>

<div id="country" >

<p >${Country}</p>
</div>

 

<div id="go"> 
<div id="po" >
<p >Deaths</P>
<div >${Deaths}</div>
</div>

<div id="so">
<p>Confirmed</P>

<div>${Confirmed}</div>
</div>

</div>




</main>

`

// templete.innerHTML =`
// <main>
// <div>
 
// <h3 class="userName">date: ${date}</h3>
// <p class="userName">state: ${state}</p>
// <p class="userName">Positive: ${positive}</p>
 
// </div>
// </main>
// `
}