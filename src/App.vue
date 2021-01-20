<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ uppercaseTitle }}</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
      <button class="btn primary" @click="add">Добавить</button>
      <button class="btn danger" @click="incrementAsync({value: 10,delay: 2000})">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import TheNavbar from './TheNavbar.vue'

export default {
  components: { TheNavbar },
  // computed: mapGetters(['counter', 'doubleCounter', 'uppercaseTitle']), // т.к. mapGetters - объект, и в computed нет других свойств
  computed: {
    ...mapGetters(['uppercaseTitle']),
    ...mapGetters('count', ['counter', 'doubleCounter'])
  },
  methods: {
    ...mapMutations({
      add: 'count/increment' // превращается в метод add
    }),
    ...mapActions('count', ['incrementAsync']),
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync', {
    //     value: 10,
    //     delay: 2000
    //   })
    // }
  }
}
</script>
