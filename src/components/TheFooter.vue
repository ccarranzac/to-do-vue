<template>
  <div class="footer">
    <p>To Do Vue is property of <span>Camilo Andres Carranza</span></p>
    <div class="container">
      <a href="https://github.com/ccarranzac/to-do-vue" target="_blank"
        >See in Github</a
      >
      <img src="../assets/github.png" alt="github logo" />
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  width: 100%;
  background-color: #45eba5;
  padding: 15px;
}

img {
  max-height: 20px;
}

p,
a {
  font-weight: bold;
  color: black;
}

.container {
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
}
</style>
