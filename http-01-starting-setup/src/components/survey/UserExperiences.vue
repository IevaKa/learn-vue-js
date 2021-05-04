<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && isError">Failed to load the data.</p>
      <p v-else-if="!isLoading && !results.length">No experiences yet.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      isError: false,
    };
  },
  methods: {
    async loadExperiences() {
      this.isError = false;
      this.isLoading = true;
      try {
        const res = await fetch(
          'https://vue-http-demo-14298-default-rtdb.firebaseio.com/surveys.json'
        );
        const data = await res.json();
        const array = [];
        for (const id in data) {
          array.push({ id, name: data[id].name, rating: data[id].rating });
        }
        this.results = array;
      } catch (err) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>