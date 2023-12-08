<template>
  <div class="containPage">
    <div class="cardContainer">
      <div class="containe404">
        <h1>Ooops!</h1>
      </div>
      <h2>{{ error.statusCode }} - {{ error.message }}</h2>
      <a class="buttonReturn" href="/">Go home</a>
    </div>  
  </div>
</template>


<script setup>
defineProps(['error'])

const handleError = () => clearError({redirect: '/',})
</script>

<style scoped>

.containPage{
  position: relative;
  height: 100vh;
  text-align: center;
  background:#287271;
}
.cardContainer{
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.containe404{
  position: relative;
  z-index: -1;
}
.containe404 h1 {
  color: #E9C46A;
  font-size: 6em;
}
.cardContainer h2{
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 1em;
}
.buttonReturn{
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  background: #E76F51;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 40px;
  color: #fff;
  font-weight: 700;
  -webkit-box-shadow: 0px 4px 15px -5px #E76F51;
  box-shadow: 0px 4px 15px -5px #E76F51;
}
</style>