<template>
 <div class="loading">
    <span id="loading"></span>
    <span class="text">{{ text }}</span>
 </div>
</template>

<script setup>
defineProps({
  text: { type: String, default: 'Yükleniyor...' }
})
</script>

<style>
.loading{
  display: flex;
  align-items: center;
  max-width: max-content;
}
.loading .text{
  margin-left: 10px;
}
.loading #loading {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 4px solid #ccc;
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

</style>