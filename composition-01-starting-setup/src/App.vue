<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <h2>Computed: {{ fullName }}</h2>
    <button @click="setNewAge">change age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstname" /> -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <!-- <input type="text" placeholder="Last Name" @input="setLastname" /> -->
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
    <p></p>
  </section>
</template>

<script>
import { ref, reactive, computed, watch } from 'vue';
export default {
  setup() {
    // const userName = ref('Ieva');
    // const age = ref(27);

    const user = reactive({
      name: 'Ieva',
      age: 27,
    });

    const firstName = ref('');
    const lastName = ref('');

    setTimeout(() => {
      // age.value = 127
      user.name = 'Eve';
    }, 2000);

    function setNewAge() {
      user.age = 127;
    }

    // function setFirstname(e) {
    //   firstName.value = e.target.value;
    // }

    // function setLastname(e) {
    //   lastName.value = e.target.value;
    // }

    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    // watch(firstName, (newValue, oldValue) => {
    //   console.log('OldName: ', oldValue);
    //   console.log('NewName: ', newValue);
    // });

    watch([firstName, lastName], (newValues, oldValues) => {
      console.log('OldNames: ', oldValues);
      console.log('NewNames: ', newValues);
    });

    return {
      user,
      setNewAge,
      // setFirstname,
      // setLastname,
      firstName,
      lastName,
      fullName,
    };
  },
};
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>