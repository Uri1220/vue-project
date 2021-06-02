<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn outlined color="blue lighten-1" v-on="on">Отправить заявку</v-btn>
    </template>

    <v-card>
      <v-container>
        <v-layout column>
          <v-flex xs12>
            <v-card-title>
              <h5 class="text--primary">Заказать выбранную позицию?</h5>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout column>
          <v-flex xs12>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field counter v-model="name" :rules="nameRules" label="Ваше имя" required></v-text-field>

                <v-text-field
                  counter
                  v-model="quantity "
                  :rules="countrule"
                  label="Количество"
                  required
                ></v-text-field>

                <masked-input
                  class="phone mt-3"
                  v-model="phone"
                  mask="\+\375(11)111-1111"
                  placeholder="Телефон"
                />
              </v-form>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text outlined @click="onCancel" :disabled="localLoading">Отмена</v-btn>
              <v-btn
                text
                class="success"
                @click="onSave"
                :disabled="localLoading && !valid "
                :loading="localLoading"
              >Заказать</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import MaskedInput from "vue-masked-input";
export default {
  name: "BuyDialog",
  props: ["product"],
  data() {
    return {
      dialog: false,
      // name: "",
      // phone: "",
      quantity: "",
      localLoading: false,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Введите имя",
        v => (v && v.length <= 16) || "Имя не должно превышать 16 символов"
      ],
      phone: "",
      phoneRules: [
        v => !!v || "Укажите телефон",
        v => (v && v.length <= 16) || "Номер не должен превышать 16 символов"
      ],
      countrule: [v => v.length <= 60 || "Максимум 60 символов"]
    };
  },
  methods: {
    onCancel() {
      this.name = "";
      this.phone = "";
      this.quantity = "";
      this.dialog = false;
    },
    onSave() {
      if (this.$refs.form.validate()) {
        this.localLoading = true;
        this.$store
          .dispatch("createOrder", {
            name: this.name,
            phone: this.phone,
            quantity: this.quantity,
            collection: this.product.cn,
            productId: this.product.id
          })
          .finally(() => {
            this.name = "";
            this.phone = "";
            this.quantity = "";
            this.collection = "";
            this.localLoading = false;
            this.dialog = false;
          });
      }
    }
  },

  components: {
    MaskedInput
  }
};
</script>
<style scoped>
.phone {
  font-size: 17px;
}
</style>



