<template>
  <div class="content">
    <div class="divider">
      <div class="left">
        <p class="head">About <span class="logo-title">To Do Vue</span></p>
        <div class="body">
          <p>
            To Do Vue es una aplicación que permite crear nuevas tareas (Con
            título, descripción, tags (múltiples)), Listar tareas, eliminar una
            o varias a la vez, marcarlas como completadas, editarlas y buscarlas
            por tareas o por tags.
          </p>
        </div>
      </div>
      <div class="right">
        <transition name="card" appear>
          <img class="pic" src="../../assets/to-do-left.png" />
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.divider {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.left {
  width: 50%;
}

.right {
  margin-right: 2rem;
}

.head {
  font-size: 4rem;
}

.body {
  line-height: 2.5;
  font-size: 20px;
}

.pic {
  max-height: 30rem;
}

.card-enter-active {
  animation: bounce-in 0.6s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
