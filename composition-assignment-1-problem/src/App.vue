<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- <h3 v-if="goal.goalIsVisible">{{ goal.goal }}</h3> -->
  <h3 v-if="goalIsVisible">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
// import { reactive } from 'vue';
// import { reactive, toRefs } from 'vue';
export default {
  // setup() {
  // Separate refs solution
  /*
    const goal = ref('Learn the fundamentals of vue');
    const goalIsVisible = ref(true);
    function toggleGoal() {
      goalIsVisible.value = !goalIsVisible.value;
    }
    return {
      goal,
      toggleGoal,
      goalIsVisible,
    };
    */

  // Reactive
  /*
    const goal = reactive({
      goal: 'Learn the fundamentals of vue',
      goalIsVisible: true,
    });

    function toggleGoal() {
      goal.goalIsVisible = !goal.goalIsVisible;
    }
    return { goal, toggleGoal };
    */

  // To refs
  /*
    const goalStart = reactive({
      goal: 'Learn the fundamentals of vue',
      goalIsVisible: true,
    });
    const goal = toRefs(goalStart);
    function toggleGoal() {
      goal.goalIsVisible.value = !goal.goalIsVisible.value;
    }

    return {
      goal: goal.goal,
      goalIsVisible: goal.goalIsVisible,
      toggleGoal,
    };
    */
  // },

  data() {
    return {
      goal: 'Learn the fundamentals of vue',
      goalIsVisible: true,
    };
  },
  methods: {
    toggleGoal() {
      this.goalIsVisible = !this.goalIsVisible;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>