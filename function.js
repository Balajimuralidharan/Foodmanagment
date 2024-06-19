
        // Created by j.m.balaji
// </script><script type="text/babel">
class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      isLoading: true,
      isClicked: false
    }
    this.song = new Audio();
    this.song.src = "https://dl.dropbox.com/s/7ce620bvhyfnwd9/Humood_-_Marhab_Ya_Hilal_%28Fusha_Arabic%29_Lyrics_%2B_Translation_-_%D8%AD%D9%85%D9%88%D8%AF_-_%D9%85%D8%B1%D8%AD%D8%A8_%D9%8A%D8%A7_%D9%87%D9%84%D8%A7%D9%84_%D9%83%D9%84%D9%85%D8%A7%D8%AA%28128k%29.mp3?dl=0";
    this.Play = this.Play.bind(this);
  }
  componentDidMount() {
   setTimeout(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(data => {
        if (data && data.meals && data.meals.length > 0) {
          this.setState({ data: data.meals[0], error: null, isLoading: false });
        } else {
          this.setState({ data: null, error: "No meals found", isLoading: false });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ data: null, error: "Error fetching data", isLoading: false });
      });
  },2500);
  }
  
  Generate = () =>{
          fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(data => {
        if (data && data.meals && data.meals.length > 0) {
          this.setState({ data: data.meals[0], error: null, isLoading: false, isClicked:false });
          instruc.style.borderBottom="2.5px solid dodgerblue";
        } else {
          this.setState({ data: null, error: "No meals found", isLoading: false });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ data: null, error: "Error fetching data", isLoading: false });
      });
      let ingred = document.querySelector(".ingred");
   let instruc = document.querySelector(".instruc");
   let video = document.querySelector(".videos");
   ingred.style.border="none";
   video.style.border="none";
  }
  Play() {
    let audio = document.querySelector(".audio");
    if (this.song.paused) {
      this.song.play();
      this.song.loop = true;
      audio.innerHTML = `<i class="fa fa-volume-up"></i>`;
      audio.style.color = "dodgerblue";
    } else {
      this.song.pause();
      audio.innerHTML = `<i class="fa fa-volume-mute"></i>`;
      audio.style.color = "#494560";
    }
    }
  render() {
function Ingredients(){
  let intext = document.querySelector(".intext");
   let ingred = document.querySelector(".ingred");
   let instruc = document.querySelector(".instruc");
   let video = document.querySelector(".videos");
   instruc.style.border="none";
   video.style.border="none";
   ingred.style.borderBottom="2.5px solid dodgerblue";
   let ingredients = [];
   intext.innerHTML="";
  for(let i=1;i<=20;i++){
   ingredients.push(data["strIngredient"+i]);
         }
        ingredients.forEach((hm)=>{
            if(hm){
                intext.innerHTML+=`<li>${hm}</li>`;
            }
        }); 
}
function Instructions(){
    let intext = document.querySelector(".intext");
    let ingred = document.querySelector(".ingred");
   let instruc = document.querySelector(".instruc");
   let video = document.querySelector(".videos");
   ingred.style.border="none";
   video.style.border="none";
   instruc.style.borderBottom="2.5px solid dodgerblue";
intext.innerHTML=data.strInstructions;
}
function Video(){
    let intext = document.querySelector(".intext");
    let ingred = document.querySelector(".ingred");
   let instruc = document.querySelector(".instruc");
   let video = document.querySelector(".videos");
   ingred.style.border="none";
   instruc.style.border="none";
   video.style.borderBottom="2.5px solid dodgerblue";
intext.innerHTML=`<iframe src="https://www.youtube.com/embed/${data.strYoutube.slice(-11)}" frameborder="0" id="frame" allowfullscreen></iframe>
<a href="${data.strYoutube}">
<div class="inyoutube">
<i class="fa fa-youtube"></i> 
Watch on Youtube
</div>
</a>
`;
}
  function Ing(){
  let incont = document.querySelector(".incont");
  let inhead = document.querySelector(".inhead");
  let one = document.querySelector(".one");
  let two = document.querySelector(".two");
  let head = document.querySelector(".head");
  let recont = document.querySelector(".recipe_cont");
     // foot.style.display="none";
      head.style.display="none";
      recont.style.display="none";
      inhead.style.display="flex";
      incont.style.display="block";
      one.style.background="#494560";
      two.style.background="dodgerblue";
  }
  function Home(){
  let incont = document.querySelector(".incont");
  let inhead = document.querySelector(".inhead");
  let head = document.querySelector(".head");
  let recont = document.querySelector(".recipe_cont");
  let one = document.querySelector(".one");
  let two = document.querySelector(".two");
     // foot.style.display="none";
      head.style.display="flex";
      recont.style.display="block";
      inhead.style.display="none";
      incont.style.display="none";
      two.style.background="#494560";
      one.style.background="dodgerblue";
  }
 let handleClick = () => {
    const { isClicked } = this.state;
  let popup = document.querySelector(".popup");
    if (!isClicked) {
  popup.style.display = "flex";
  popup.innerHTML="Liked! <i class='fa fa-heart'></i>";
      setTimeout(() => {
       popup.style.display = "none";
      }, 1500);
    } else {
     popup.style.display = "flex";
     popup.innerHTML="Disliked! <i class='fa fa-heart-broken'></i>";
      setTimeout(() => {
       popup.style.display = "none";
      }, 1500);
    }

    this.setState({ isClicked: !isClicked });
  };
  function SearchCont(){
     let all_all = document.querySelector("#all_all");
               let search_all = document.querySelector("#search_all");
               let search_inp = document.querySelector("#search_inp");
               setTimeout(()=>{
                   search_inp.focus();
               },50);
        all_all.style.display="none";
        search_all.style.display="block";
  }
    const { data, error, isLoading } = this.state;

    if (isLoading) {
      return(
      <div>
          <div className="loader">
          <div className="flex">
            <div className="logo"></div>
            <div className="loading">
             food management <br/>
            <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
           </div>
            </div>
          </div>
          </div>
     </div>
      );
    } else if (error) {
      return <div>{error}</div>;
    } else if (data) {
      return (
      <div>
        <div id="all_all">
          <div className="head">
          <i 
          onClick={SearchCont}
          className="fa fa-search"></i>
            food management
             <i className="fa fa-hamburger"></i>
          </div>
          <div className="recipe_cont">
          <div className="audio"
            onClick={this.Play}
            >
            <i className="fa fa-volume-mute">
            </i>
            </div>
            <div className="img"
              style={{ backgroundImage: `url(${this.state.data.strMealThumb})` }}
            ></div>
            <ul>
            <div className="recipe_name">
          <i className="fa fa-hotdog"></i>
            Name: {data.strMeal}
            </div>
            <div className="recipe_cat">
            <i className="fa fa-list-alt"></i> 
            Category: {data.strCategory}
            </div>
            <div className="recipe_cat">
            <i className="fa fa-hamburger"></i>
            Cuisine: {data.strArea}
            <div className={`heart ${this.state.isClicked ? "clicked" : ""}`} onClick={handleClick}>
        <i className={`fa ${this.state.isClicked ? "fa-heart" : "fa-heart-o"}`} />
      </div>
            </div>
            <div className="btn-cont">
            <button className="btn-gen"
            onClick={this.Generate}
            >GENERATE</button></div>
            </ul>
          </div>
          
           <div className="inhead">
          <div 
          onClick={Instructions}
          className="nav instruc">
          Instructions
          </div>
          <div 
          onClick={Ingredients}
          className="nav ingred">
          Ingredients
          </div>
          <div 
          onClick={Video}
          className="nav videos">
          Video
          </div>
          </div>
          
          <div className="incont">
           <div className="intext">
           {data.strInstructions}
          </div>
          </div>
          
          <div 
          className="footer">
              <div className="homef one"
              onClick={Home}
              >
                <i className="fa fa-home"></i>
                Home
              </div>
              <div className="homef two"
              onClick={Ing}
              >
                <i className="fa fa-cutlery fa-spin"></i>
                Ingridients
              </div>
          </div>
          <div className="popup">
              
          </div>
        </div>
        <div id="search_all">
         <Search/>
        </div>
        </div>
      );
    }
  }
}

class Search extends React.Component{
            constructor(props){
                super(props);
                this.state={
                    
                }
            }
            render(){
            function Search(){
              let s_all = document.querySelector("#s_all");
               let r_all = document.querySelector("#r_all");
               let search = document.querySelector("#search_inp");
               let result_name = document.querySelector(".result_name");
            let searches = document.querySelector(".searches");
             let s_value = search.value.trim();
               if(s_value){
              s_all.style.display="none";
              r_all.style.display="block";
              let no_more = document.querySelector(".no_more");
              let s_loader = document.querySelector(".s_loader");
            result_name.innerText=s_value;
            search.value="";
           no_more.style.display="none";
           s_loader.style.display="flex"; fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + s_value)
  .then(res => res.json())
  .then(data => {
    if (data && data.meals && data.meals.length > 0) {
      searches.innerHTML = data.meals.map((meal,i) => `
        <li>
          <div 
            style="background:dodgerblue url(${meal.strMealThumb});background-size:cover;"
            class="s_img">
          </div>
          <div class="s_name">
            ${meal.strMeal} <br />
            <span>${meal.strArea}</span>
          </div>
        </li>
      `).join("");
      no_more.style.display="flex";
      s_loader.style.display="none";
    } else {
      searches.innerHTML = `<li>
      <div 
            style="background:url(https://i.postimg.cc/k4FGyV0k/images-64-removebg-preview.png);background-size:cover;"
            class="not_found">
          </div>
          <div class="s_name">
      No recipe found for "${s_value}"
      </div> <i class="fa fa-exclamation-circle"></i>
     </li>`;
     no_more.style.display="none";
     s_loader.style.display="none";
    }
  })
  .catch(err => {
    // handle error
  });
         }
            }
            function BackToAll(){
                let all_all = document.querySelector("#all_all");
               let search_all = document.querySelector("#search_all");
        search_all.style.display="none";
        all_all.style.display="block";
            }
                return(
                <div>
                    <div id="s_all">
                    <div className="search_head">
                    <i 
                    onClick={BackToAll}
                    className="fa fa-angle-left"></i>
                    <input type="text" id="search_inp" onKeyPress={Search} placeholder="Search Recipes..."/>
                    <i 
                    onClick={Search}
                    onKeyUp={Search}
                    className="fa fa-search">
                    </i>
                    </div>
                    <div className="his_cont">
                   
                    </div>
                    </div>
                    <div id="r_all">
                     <Result/>
                    </div>
                    
                  </div>
                );
            }
        }
        
        class Result extends React.Component{
            constructor(props){
                super(props);
                    this.state={
                        
                    }
            }
            render(){
            function BackToSearch(){
                let s_all = document.querySelector("#s_all");
               let r_all = document.querySelector("#r_all");
               let searches = document.querySelector(".searches");
               let search_inp = document.querySelector("#search_inp");
               setTimeout(()=>{
                   search_inp.focus();
               },50);
            searches.innerHTML="";
              r_all.style.display="none";
              s_all.style.display="block";
            }
                return(
                    <div>
                    <div className="result_head">
                    <i 
                    onClick={BackToSearch}
                    className="fa fa-angle-left"></i>
                    <div className="result_name" onClick={BackToSearch}>
                    
                    </div>
                    </div>
                    <div className="result_cont">
                    
                   <div className="searches">
                    
                   </div>
                   <div 
                   className="no_more">
                   -No more-</div>
                    </div>
                    <div className="s_loader">
                    <div className="ss_loader">
                    </div>
                    </div>
                    </div>
                );
            }
        }

function App() {
  return (
    <div>
      <Recipe />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
    