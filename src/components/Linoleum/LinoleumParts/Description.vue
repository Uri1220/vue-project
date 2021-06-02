<template>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm5 md4 lg5>
          <p class="colname ml-3 mt-2">{{brand}} {{bottomNav}}</p>
          <div class="ml-3" v-for="des of descriptionImg" :key="des.id">
            <v-img :src="des.im" height="250px" width="500px"></v-img>
          </div>
        </v-flex>
        <v-flex xs12 sm7 md8 lg7>
          <div class="des">
            <div class="str" v-for="des of descriptionImg" :key="des.id">
              <p>{{des.str}}</p>
              <hr color="#90CAF9"/>
            </div>

            <div class="d1">
              <div v-for="(value, i) in descriptionInfo" :key="i">
                <p v-if="(i+1)%2">
                  <b>{{ value }}</b>
                </p>
              </div>
            </div>

            <div class="d2">
              <div v-for="(value, i) in descriptionInfo" :key="i">
                <p v-if="i%2">{{ value }}</p>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex></v-flex>
      </v-layout>
      <hr color="#90CAF9"/>
    </v-container>
</template>

<script>
export default {
  name: "Description",
  props: {
    bottomNav: {
      type: String,
      default() {
        return "";
      }
    },
    brand: {
      type: String,
      default() {
        return "";
      }
    },
    descriptionImg: {
      type: Array,
      default() {
        return [];
      }
    },
    descriptionInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.des {
  display: grid;
  grid-template-columns: 145px 1fr;
  font-size: 12px;
  font-family: "MuseoSansCyrl-300", "Helvetica Neue", Verdana, Arial, sans-serif;
  /* background: rgb(247, 213, 213); */
  margin-left: 15px;
}
.des > div {
  /* background: rgb(250, 245, 245); */
  padding-top: 5px;
}
.des > div.str {
  grid-column: 1/-1;
  grid-auto-rows: auto;
  margin: 5px 10px;
  padding-right: 15px;
  /* background: rgb(232, 245, 220); */
  font-family: "MuseoSansCyrl-300", "Helvetica Neue", Verdana, Arial, sans-serif;
  font-size: 15px;
}

.colname {
  /* font-family: 'MuseoSansCyrl-900'; */
  font-family: "MuseoSansCyrl-300", "Helvetica Neue", Verdana, Arial, sans-serif;
  font-size: 18px;
  padding-top: 8px;
  text-transform: uppercase;
  color: #000;
}
</style>
 
