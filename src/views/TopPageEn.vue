<template>
    <!--内容上はここから始まる-->
    <div class="welcome">
        <h1>Welcome&nbsp;to&nbsp;<span class="appNameTitle">&quot;BEST&nbsp;TRAVELER.&quot;</span></h1>
    </div>
        <h2>This page will soon be available in English</h2>
        <p>                  
        </p>

  
        <div class="jump">
        <RouterLink to="/en/ichihira" class="linkButton">
            <h1>View pages<br/>(Some Japanese only)</h1>
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
    border-radius: 20px;
}

.linkButton h1 {
    padding: 15px;
}

</style>
