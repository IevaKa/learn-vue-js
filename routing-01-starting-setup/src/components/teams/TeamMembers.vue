<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['teams', 'users'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  props: ['id'],
  watch: {
    id() {
      this.changeRoute();
    },
  },
  created() {
    this.changeRoute();
  },
  // beforeRouteUpdate(to, from, next) {
  //   this.changeRoute(to.params.id)
  //   next()
  // },
  methods: {
    changeRoute() {
      const id = this.id;
      const selectedTeam = this.teams.find((e) => e.id === id);
      const members = selectedTeam.members;
      const selectedMembers = [];
      members.forEach((memId) => {
        const found = this.users.find((e) => e.id === memId);
        selectedMembers.push(found);
      });
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>