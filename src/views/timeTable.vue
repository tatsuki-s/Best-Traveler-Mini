<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Papa from 'papaparse';
import ichihira from '../data/ichihiraStops.json'

const stops = {ichihira}

const route = useRoute();

// 現在のURLの最初の部分 (ja) を取得
const langPath = () => {
  const currentPath = route.path;
  const pathParts = currentPath.split('/'); // URLを'/'で分割
  return pathParts[1]; // 最初の部分 (ja)
};

// 現在のURLの "ichihira" 部分を取得
const linePath = () => {
  const currentPath = route.path;
  const pathParts = currentPath.split('/'); // URLを'/'で分割
  return pathParts[2]; // 次の部分 (ichihira)
};

const stopPath = () => {
  const currentPath = route.path;
  const pathParts = currentPath.split('/'); // URLを'/'で分割
  return pathParts[3];
};

const tablePath = () => {
  const currentPath = route.path;
  const pathParts = currentPath.split('/'); // URLを'/'で分割
  return pathParts[4];
};

const csvPath = () => {
  const table = tablePath();
  const csvParts = table.split('-'); // URLを'-'で分割
  return `${csvParts[0]}/${csvParts[1]}-${csvParts[2]}`;
};

// 言語に応じて路線を出す定数
const busLineName = () => {
  const busLines = lineData;
  const currentLine = busLines.find(line => line.nickName === linePath());
  return currentLine ? currentLine.name[langPath()] : "";
};

// 状態管理
const loading = ref(true);
const error = ref(null);
const fileURL = ref('');
const headers = ref([]);
const rows = ref([]);
const stopName = ref('');

// 初期化時にCSVデータを取得
onMounted(async () => {
  fileURL.value = `/csvData/${linePath()}/${stopPath()}/${csvPath()}.csv`; // 言語に応じたCSVのURLを設定
  stopName.value = stops[linePath()].map(line => line.name);
  try {
    await fetchCSV(fileURL.value); // CSVデータを取得
  } catch (err) {
    console.error(err); // エラーをログに記録
  }
});

// CSVファイルの読み取り
async function fetchCSV(path) {
  loading.value = true; // ローディング中
  error.value = null; // エラーをクリア

  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV file at ${path}`);
    }

    const csvText = await response.text();
    const results = Papa.parse(csvText, {
      header: true, // ヘッダー行を自動認識
      skipEmptyLines: true, // 空行をスキップ
    });

    headers.value = results.meta.fields || []; // ヘッダー情報
    rows.value = results.data; // データ部分
    loading.value = false; // ローディング完了
  } catch (err) {
    error.value = err.message || 'An error occurred while fetching the CSV.';
    loading.value = false;
    throw err; // エラーを上位に伝播
  }
}
</script>

<template>
<div id="mainTable">    
    <p v-if="loading">Loading CSV data...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <h3>{{ langPath() === 'ja' ? '小学生は半額，小学生未満は無料' : 'Half price for elementary school students, free for pre-elementary school students' }}</h3>
    <div class="tables">
        <table v-if="!loading && !error && rows.length">
            <thead>
                <tr>
                    <!-- <th>出発地</th> -->
                    <th>{{langPath() === 'ja' ? '停車バス停' : 'Stop Name'}}</th>
                    <th>{{langPath() === 'ja' ? '停車時刻' : 'Stop Time'}}</th>
                    <th>{{langPath() === 'ja' ? '運賃' : 'Fare'}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                    <td>
                        <span v-for="name in stopName">
                            {{ row.バス停名 === name.ja ? name[langPath()] : '' }}
                        </span>                        
                        <!-- 一関駅前だけJSONだと10番のりばと書いていてマッチしないので特別に処理 -->
                        <span v-if="row.バス停名 === '一関駅前'">{{ langPath() === 'ja' ? '一関駅前' : 'Ichinoseki Ekimae' }}</span> 
                    </td>
                    <td>{{ `${row.出発時}:${String(row.出発分).padStart(2, '0')}` }}</td>
                    <td>{{ row.運賃 !== '' && row.運賃 !== null ? (langPath() === 'ja' ? `${row.運賃} 円` : `${row.運賃} JPY`) : '✕' }}</td>
                </tr>
            </tbody>
        </table>
        <p v-else-if="!loading && !error">No data available.</p>
    </div>
</div>
</template>
<style scoped>
#mainTable {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* セル内の文字の周りに幅をもたせ,中央寄せ */
table th,
table td {
    padding: 8px;
    text-align: center;
}

/* タイトルの色 */
table th {
    background-color: #6f7dff;
}

/* 表のセルごとのborder */
table,
table th,
table td {
    border: 1px solid black;
    border-collapse: collapse;
}

table {
    width: 50vw;
    font-size: 30px;
    font-family: "游ゴシック体"
}
@media screen and (max-width: 1180px) {
    table {
        font-size: 25px;
        width: 80vw;
    }
}

@media screen and (max-width: 480px) {
	/* 480px以下に適用されるCSS（スマホ用） */
    table {
        font-size: 18px;
        width: 85vw;
    }
}
</style>