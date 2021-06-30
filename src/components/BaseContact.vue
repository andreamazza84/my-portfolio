<template>
  <form
    action="https://formsubmit.co/a263761003a53d0d3b44000bb483e046"
    method="POST"
  >
    <v-row>
      <v-col>
        <v-text-field
          class="form-input"
          flat
          label="Nome*"
          solo
          :error-messages="nameErrors"
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          class="form-input"
          flat
          label="Email*"
          solo
          :error-messages="emailErrors"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <input type="hidden" name="_next" :value="this.$store.state.baseURL + 'message-sent'">
      </v-col>

      <v-col cols="12">
        <v-text-field
          class="form-input"
          flat
          label="Oggetto*"
          solo
          :error-messages="objectErrors"
          @input="$v.object.$touch()"
          @blur="$v.object.$touch()"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-textarea
          class="form-input"
          flat
          label="Scrivi qua*"
          solo
          :error-messages="textErrors"
          @input="$v.text.$touch()"
          @blur="$v.text.$touch()"
        ></v-textarea>
      </v-col>

      <v-col
        class="mx-auto"
        cols="auto"
      >
        <v-btn
          type="submit" 
          class="btn-submit"
          x-large
        >
          Invia
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(30) },
      email: { required, email },
      object: { required },
      text: {required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('Devi accettare le condizioni per continuare')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Richiesto')
        !this.$v.name.required && errors.push('Richiesto')
        return errors
      },
      objectErrors () {
        const errors = []
        if (!this.$v.object.$dirty) return errors
        !this.$v.object.maxLength && errors.push('Richiesto')
        !this.$v.object.required && errors.push('Richiesto')
        return errors
      },
      textErrors () {
        const errors = []
        if (!this.$v.text.$dirty) return errors
        !this.$v.text.maxLength && errors.push('Richiesto')
        !this.$v.text.required && errors.push('Richiesto')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Inserisci un indirizzo email valido')
        !this.$v.email.required && errors.push('Richiesto')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>
<style lang="scss" scoped>
  .btn-submit{
    background-color: $b_triadic_2 !important;
    color: $f_dark !important;
  }
</style>