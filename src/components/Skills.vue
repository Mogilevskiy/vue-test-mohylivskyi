<template>
  <div class="skills">
    <form @submit.prevent="addSkill">
      <div class="add-skill-menu">
        <input type="text" placeholder="Enter a skill you have..." v-model="skill" class="form-control">
        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </form>
    <div v-bind:class="classObject"></div>
    <ul class="list-group">
      <transition-group name="bounce">
        <li v-for="(data, index) in skills" :key="index" class="list-group-item">
          {{ data.skill }}
          <i class="fa fa-times" aria-hidden="true" v-on:click="remove(index)"></i>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      skill: '',
      skills: [

      ],
      classObject: {
        line: true
      }
    }
  },
  methods: {
    addSkill: function () {
      if (this.skill) {
        this.skills.push({'skill': this.skill})
        this.skill = ''
      }
    },
    remove: function (index) {
      this.skills.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import 'https://use.fontawesome.com/releases/v5.7.2/css/all.css';

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
}
a {
  color: #42b983;
}

.add-skill-menu {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.add-skill-menu input {
  max-width: 500px;
  margin-right: 10px;
}

.list-group {
  margin-bottom: 20px;
}
.line {
  margin-bottom: 20px;
  width: 100%;
  height: 0.1rem;
  background-color: yellowgreen;
}

i {
  cursor: pointer;
}

.skills {
  margin: 0 auto;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
