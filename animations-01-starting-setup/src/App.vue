<template>
  <router-view v-slot="slotProps">
    <transition name="router" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

  <!-- <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para">
      <p v-if="paragraphIsVisible">Sometimes visible</p>
    </transition>
    <button @click="toggleParagraph">Toggle paragraph (CSS)</button>
  </div>

  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paragraphIsVisibleJS">Sometimes visible</p>
    </transition>
    <button @click="toggleParagraphJS">Toggle paragraph (JS)</button>
  </div>
  <div class="container">
    <transition name="button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>  

<script>
// import ListData from './components/ListData';
// export default {
//   components: {
//     ListData,
//   },
//   data() {
//     return {
//       dialogIsVisible: false,
//       animatedBlock: false,
//       paragraphIsVisible: true,
//       paragraphIsVisibleJS: true,
//       usersAreVisible: false,
//       enterInterval: null,
//       leaveInterval: null,
//     };
//   },
//   methods: {
//     beforeEnter(el) {
//       console.log('before enter', el);
//       el.style.opacity = 0;
//     },
//     enter(el, done) {
//       console.log('enter', el);
//       let round = 1;
//       this.enterInterval = setInterval(() => {
//         el.style.opacity = round * 0.01;
//         round++;
//         if (round > 100) {
//           clearInterval(this.enterInterval);
//           done();
//         }
//       }, 20);
//     },
//     beforeLeave(el) {
//       console.log('before leave', el);
//       el.style.opacity = 1;
//     },
//     afterEnter(el) {
//       console.log('after enter', el);
//     },
//     leave(el, done) {
//       console.log('leave', el);
//       let round = 1;
//       this.leaveInterval = setInterval(() => {
//         el.style.opacity = 1 - round * 0.01;
//         round++;
//         if (round > 100) {
//           clearInterval(this.leaveInterval);
//           done();
//         }
//       }, 20);
//     },
//     afterLeave(el) {
//       console.log('after leave', el);
//     },
//     enterCancelled() {
//       clearInterval(this.enterInterval);
//     },
//     leaveCancelled() {
//       clearInterval(this.leaveInterval);
//     },
//     showDialog() {
//       this.dialogIsVisible = true;
//     },
//     hideDialog() {
//       this.dialogIsVisible = false;
//     },
//     animateBlock() {
//       this.animatedBlock = true;
//     },
//     toggleParagraph() {
//       this.paragraphIsVisible = !this.paragraphIsVisible;
//     },
//     toggleParagraphJS() {
//       this.paragraphIsVisibleJS = !this.paragraphIsVisibleJS;
//     },
//     showUsers() {
//       this.usersAreVisible = true;
//     },
//     hideUsers() {
//       this.usersAreVisible = false;
//     },
//   },
// };
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.5s ease-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-50px); */
  /* animation: animate-block 0.5s ease-out forwards; */
}

.para-enter-from {
  /* opacity: 0;
  transform: translateX(-30px); */
}

.para-enter-active {
  /* transition: all 0.5s ease-out; */
  animation: animate-block 0.5s ease-out;
}

.para-enter-to {
  /* opacity: 1;
  transform: translateX(0px); */
}

.para-leave-from {
  /* opacity: 1;
  transform: translateX(0px); */
}

.para-leave-active {
  animation: animate-block 0.5s ease-out;
  /* transition: all 0.5s ease-out; */
}

.para-leave-to {
  /* opacity: 0;
  transform: translateX(30px); */
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
}

.button-enter-active {
  transition: opacity 1s ease-out;
}

.button-leave-active {
  transition: opacity 1s ease-in;
}

.button-enter-to,
.button-leave-from {
  opacity: 1;
}

.router-enter-fom {
}
.router-enter-active {
  animation: animate-block 1s ease-out;
}

.router-leave-active {
  animation: animate-block 1s ease-in;
}
.router-enter-to {
}
@keyframes animate-block {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>