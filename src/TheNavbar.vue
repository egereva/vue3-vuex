<template>
  <header class="navbar">
    <strong>Счетчик {{ counter }}</strong>
    <button class="btn" @click="increment">Добавить 5</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
  export default {
    computed: {
      // counter() {
      //   return this.$store.getters['count/counter']
      // },
      ...mapGetters('count', ['counter'])
    },
    methods: {
      ...mapMutations('count', ['add']),

      // изменить название мутации
      // ...mapMutations({
      //   addFive: 'add'
      // })
      // теперь обращаться к ней можно: this.addFive({value: 5})

      increment() {
        // this.$store.commit('add', {
        //   value: 5
        // })
        // this.$store.commit({
        //   type: 'add',
        //   value: 5
        // })
        this.add({value: 5})
      }
    }
  }
</script>
