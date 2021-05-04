<template>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const choice = confirm('Are you sure? Changes will be unsaved');
      next(choice);
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  // beforeRouteEnter(to, from, next) {
  //   // before navigation gets confirmed
  // }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>