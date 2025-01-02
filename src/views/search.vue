<template>
    <div class="search-container">
                    <input type="text" id="searchInput" class="no-select" oninput="searchFunction()" placeholder="検索...">
                </div>
    <ul id="itemList">
      <li v-for="stop in data">
        <ul>
          <li v-for="line in stop.lines" :data-reading="line.read">
            <a href="IchinosekiEkimae22.html">
              <p class="en">{{ line.nameen }}</p>
              <p class="ja">{{ line.name }}</p>
            </a>
          </li>
        </ul>
      </li>
      <li id="noResult" style="display: none;">
        <p style="color: black;">見つかりませんか？スペルをお確かめください。</p>
      </li>
    </ul>
  </template>
  
  <script>
  import search from '../data/search.json'
  
  export default {
    data() {
      return {
        data: search,  // stopsとlinesを含むデータ
      };
    }
  }
  </script>
  
  
<style>
.search-container {
    margin-bottom: 20px;
    max-width: auto;
    text-align: center;
}
#Maincontainer {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
#searchInput {
    width: 50vw;
    padding: 10px;
    border: 4px solid black;
    border-radius: 4px;
    background-color: white;
    color: black;
    outline: none;
    font-size: 40px;
}

#itemList {
    list-style-type: none;
    padding: 0;
    min-height: 100vh;
}

#itemList li a{
    background-color: rgb(223, 223, 223);
    color: black;
    width: 30vw;
    padding: 3px;
    border: 3px solid black;
    border-radius: 4px;
    font-size: 30px;
    margin-bottom: 20px;
}


.en {
    padding-top: 5px;
    font-size: 20px;
    text-align: center;
    padding: 0 auto;
    margin: 0 auto;
}
.ja {
    margin-top: 0;
    margin-bottom: 5px;
}






@media screen and (max-width: 1180px) {
	/* 959px以下に適用されるCSS（デカめのタブレット用） */
    #itemList li a {
        width: 70vw;
    }
    #itemList li a {
        font-size: 20px;
    }
    #itemList {
        min-height: 100vh;
    }
}
@media screen and (max-width: 710px) {
    #itemList li a {
        font-size: 16px;
    }
}
@media screen and (max-width: 480px) {
	/* 480px以下に適用されるCSS（スマホ用） */
    /*.sp {
        display: block;
    }*/
    .ja {
        font-size: 25px;
    }
}
</style>