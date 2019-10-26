<template>
  <div>
    <h1>Submit Text</h1>
    <br>
    <textarea big v-model="text" placeholder="paste text here"></textarea>

    <!-- <table>
      <th v-for="(value, key) in words[0]" v-bind:key="key">
        {{ key.toUpperCase() }}
      </th>
      <tr v-for ="(word, key, index) in words" v-bind:key="index">
        <td v-for ="(value, key) in word" v-bind:key="key">
          <p v-if="key === 'created' || key === 'lastModified'">
            {{ printDate(value) }}
          </p>
          <p v-else>
            {{ value }}
          </p>
        </td>
      </tr>
    </table> -->
    <p>{{this.error}}</p>
    <button @click="submit()">Submit</button>
  </div>
</template>

<script>
import IngestionService from '../services/IngestionService';
import moment from 'moment';
export default {
  name: 'SubmitText',
  data: function () {
    return {
      text: '',
      error: '',
      // words: []
    }
  },
  watch: {
    text: function (val) {
      if (val !== ''){
        this.error = '';
      }
    }
  },
  methods: {
    submit() {
      if(this.text.trim() === ''){
        this.error = 'Please enter at least 1 word.';
        return;
      }
      IngestionService.submitText(this.text)
        .then(response => {
          this.error = response.data;
          // this.words = response.data.words;
          // this.error = '';
        })
        .catch(error => {
          this.error = error;
          // this.words = [];
        })
        .finally(this.text = '');
    },
    printDate(date) {
      if (date === null){
        return '-';
      }
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
}
</script>

<style scoped>
textarea{
  min-width: 25%;
  width: 95%;
  max-width: 100%;
  min-height: 100px;
}
table{
  margin: auto;
}
td {
    width: 15%;
  }
</style>
