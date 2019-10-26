<template>
  <div>
    <h1>Get Word</h1>
    <br>
    <textarea big v-model="text" placeholder="enter word here"></textarea>
    <table>
      <th v-for="(value, key) in word" v-bind:key="key">
        {{ key.toUpperCase() }}
      </th>
      <tr>
        <td v-for ="(value, key) in word" v-bind:key="key">
          <p v-if="key === 'created' || key === 'lastModified'">
            {{ printDate(value) }}
          </p>
          <p v-else>
            {{ value }}
          </p>
        </td>
      </tr>
    </table>
    <p>{{this.error}}</p>
    <button @click="get()">Get</button>
  </div>
</template>

<script>
import WordCountService from '../services/WordCountService';
import moment from 'moment';
export default {
  name: 'GetWord',
  data: function () {
    return {
      text: '',
      word: null,
      error: ''
    }
  },
  methods: {
    get() {
      if(this.text.trim() === ''){
        this.error = 'Please enter at least 1 word.';
        return;
      }
      WordCountService.getCount(this.text)
        .then(response => {
          this.word = response.data;
          this.error = '';
        })
        .catch(error => {
          this.error = error;
          this.word = {};
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
  max-width: 25%;
  min-height: 30px;
  max-height: 30px;
  text-align: center;
}
table{
  margin: auto;
  border: 1px solid lightgrey;
}
td {
  width: 15%;
}
</style>
