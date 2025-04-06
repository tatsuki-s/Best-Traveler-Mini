<script setup>
</script>
<template>
    <!--内容上はここから始まる-->
    <div class="welcome">
        <h1>Welcome&nbsp;to&nbsp;<span class="appNameTitle">&quot;BEST&nbsp;TRAVELER.&quot;</span></h1>
    </div>
    <div>
        <h2>当サイト機能のご紹介</h2>
        <div class="kinou">
            <h3>①バス時刻表がどこでも見られる！</h3>
            <p>
                &nbsp;&nbsp;基本的にバス停の時刻表というのは、そのバス停に行かなければ見ることはできませんが、当サイトならいつでもどこでもバス停ごとの時刻表が閲覧可能です！
            </p>
            <h3>②バス停の写真があるから迷わない！</h3>
            <p>
                &nbsp;&nbsp;あなたはバス停の場所で迷ったことはありませんか？当サイトをご利用いただくことで、もうバス停で迷わなくなります！<br/>
                &nbsp;&nbsp;バス停は基本的にのぼりとくだりで2箇所あるため、地図を確認してもわからないことがあります。<br/>
                &nbsp;&nbsp;しかし、当サイトならバス停周辺の写真があるため、目立たないバス停でも見つけやすいです。
            </p>
            <h3>③シンプルで見やすいながら便利！</h3>
            <p>
                &nbsp;&nbsp;当サイトは，みやすさにこだわって開発されています。そのため，非常にシンプルです<br/>
                &nbsp;&nbsp;しかし，検索機能に写真機能の提供など，非常に便利な機能をそろえています。
            </p>
        </div>
    </div>
    <div class="jump">
        <RouterLink to="/ja/ichihira" class="linkButton">
            <h1>一関平泉線の<br/>バス停を見る</h1>
        </RouterLink>
    </div>
</template>
<style scoped>
p {
    padding-bottom: 10px;
}

h2 {
    text-align: center;
    text-decoration:underline;
    text-decoration-color: #7db4e6;
}

.welcome {
    font-weight: bold;
    animation: slideIn 1s ease-out;
    background: linear-gradient(transparent 70%, #7db4e6 70%);
    text-align: center;
    
  }

  span {
    display:inline-block;
  }
  
  @keyframes slideIn {
    0% {
      transform: translateY(200%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

.kinou {
    background: #d5daff88;
    padding: 20px;
    border: 1px solid #7db4e6;
}

.jump {
    display: flex;
    justify-content: center;
    align-items: center;
}

.linkButton{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 300px;
    height: 200px;
    margin-top: 50px;
    background-color:#7db4e6;
    padding: 10px;
    border-radius: 1rem;
}

.linkButton h1 {
    padding: 15px;
}

</style>
