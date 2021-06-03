<template>
  <user-alert v-if="alertIsVisible" :title="title" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import alertMixin from '../mixins/alert';
import UserAlert from './UserAlert';

export default {
  components: {
    UserAlert,
  },
  data() {
    return {
      title: 'Delete the User?',
    };
  },
  mixins: [alertMixin],
};
</script>