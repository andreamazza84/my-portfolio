<template>
  <form
    id="contact-form"
    @submit.prevent="submit()"
  >
    <v-row>
      <v-col>
        <v-text-field
          v-model="message.name"
          class="form-input"
          flat
          label="Nome*"
          solo
          :error-messages="nameErrors"
          @input="$v.message.name.$touch()"
          @blur="$v.message.name.$touch()"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="message.email"
          class="form-input"
          flat
          label="Email*"
          solo
          :error-messages="emailErrors"
          @input="$v.message.email.$touch()"
          @blur="$v.message.email.$touch()"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="message.object"
          class="form-input"
          flat
          label="Oggetto*"
          solo
          :error-messages="objectErrors"
          @input="$v.message.object.$touch()"
          @blur="$v.message.object.$touch()"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-textarea
          v-model="message.text"
          class="form-input"
          flat
          label="Scrivi qua*"
          solo
          :error-messages="textErrors"
          @input="$v.message.text.$touch()"
          @blur="$v.message.text.$touch()"
        ></v-textarea>
      </v-col>

      <v-col cols="12">
        <v-checkbox
          v-model="message.checkbox"
          :error-messages="checkboxErrors"
          label="Accetto termini e condizioni"
          required
          @change="$v.message.checkbox.$touch()"
          @blur="$v.message.checkbox.$touch()"
        >
        </v-checkbox>
      </v-col>

      <v-col
        class="mx-auto"
        cols="auto"
      >
        <v-btn
          class="btn-clear"
          x-large
          @click="clear()"
        >
          Reset
        </v-btn>
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

      <BaseSnackbar :name="message.name"/>
 
    </v-row>
    <input type="text" name="_honey" style="display:none" class="hidden-input">
    <input type="hidden" name="_captcha" value="false" class="hidden-input">
  </form>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import axios from 'axios'
  import BaseSnackbar from '@/components/BaseSnackbar'

  export default {
    components:{
      BaseSnackbar
    },

    mixins: [validationMixin],

    validations: {
      message: {
        name: { required, maxLength: maxLength(30) },
        email: { required, email },
        object: { required },
        text: { required },
        checkbox: {
          checked (val) {
            return val
          },
        },
      }
    },

    data: () => ({
      success: false,
      message:{
        name: 'Axios',
        email: 'axios@axios.com',
        select: null,
        text: 'Ciao axios',
        object: 'Ciao ciao ciao',
        checkbox: true,
      }
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.message.checkbox.$dirty) return errors
        !this.$v.message.checkbox.checked && errors.push('Devi accettare le condizioni per continuare')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.message.name.$dirty) return errors
        !this.$v.message.name.maxLength && errors.push('Richiesto')
        !this.$v.message.name.required && errors.push('Richiesto')
        return errors
      },
      objectErrors () {
        const errors = []
        if (!this.$v.message.object.$dirty) return errors
        !this.$v.message.object.maxLength && errors.push('Richiesto')
        !this.$v.message.object.required && errors.push('Richiesto')
        return errors
      },
      textErrors () {
        const errors = []
        if (!this.$v.message.text.$dirty) return errors
        !this.$v.message.text.maxLength && errors.push('Richiesto')
        !this.$v.message.text.required && errors.push('Richiesto')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.message.email.$dirty) return errors
        !this.$v.message.email.email && errors.push('Inserisci un indirizzo email valido')
        !this.$v.message.email.required && errors.push('Richiesto')
        return errors
      },
    },

    methods: {
       submit() {
        //Vuelidate
        this.$v.$touch();
        //Form Spree
        //
        //let formObj = this.message;
        let formData = new FormData();
        for(const index in this.message){
          formData.append(index, this.message[index]);
        }
        //console.log(formData);
        axios({
          method: "post",
          url: "https://formspree.io/f/mjvjoejl",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then( response => {
          //console.log(response);
          //console.log(response.data.ok);
          if(response.data.ok){
            this.$store.dispatch('snackToggle');
            console.log("Message sent ", response.data.ok);
          }
        })
        .catch( error => {
          console.log(error);
        })
        
        // 
      },
      // submit(message) {
      //   //Form Submit
      //   this.$v.$touch();
      //   //
      //   axios.defaults.headers.post['Content-Type'] = 'application/json';
      //   axios.post('https://formsubmit.co/ajax/a263761003a53d0d3b44000bb483e046', { message })
      //   .then(response => console.log(response))
      //   .catch(error => console.log(error));
      //   //
      //   this.success = this.$store.state.snackbar;
      //   this.$store.dispatch('snackToggle');
      //   console.log("Message sent ",this.success);
      // },

      clear () {
        this.$v.$reset()
        this.message.name = ''
        this.message.email = ''
        this.message.object = ''
        this.message.select = null
        this.message.checkbox = false
      },
    },
  }
</script>
<style lang="scss" scoped>
  #contact-form{
    position: relative;   
    .hidden-input{
      position: absolute;
    }
    .btn-submit{
      background-color: $b_triadic_1 !important;
      color: $f_dark !important;
    }
    .btn-clear{
      background-color: $b_triadic_2 !important;
      color: $f_dark !important;
    }
  }
</style>